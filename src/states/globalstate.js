import  {useMemo, useReducer, useEffect} from "react"
import {auth,firestore,storage} from "../database/users"
import firebase from "firebase/app"
import comment from "../pages/comment"
const GlobalState = ()=>{
    //const [images,setImages]= useState([])
    const serverTime = firebase.firestore.FieldValue.serverTimestamp()

    const initialState = {
        images:[],
        files:[],
        user:null,
        users:[],
        requests:[],
        userData:null,
        profile:null,
        posts:[],
        initializing:true,
        errMsg:'',
        chats:[],
        jobs:[]

        
    }

    const reducers = (prevState, action)=>{
        switch(action.type){
            case "SET_IMAGES":
                return{
                    ...prevState,
                    images:action.payload.images,
                    files:action.payload.files
                }
            case "SET_USER":
                return{
                    ...prevState,
                    user:action.payload.user
                }
            case "SET_USERDATA":
                return{
                    ...prevState,
                    userData:action.payload.userData
                }
                
            case "SET_JOBS":
                return{
                    ...prevState,
                    jobs:action.payload.jobs
                }
            case "SET_PROFILE":
                return{
                    ...prevState,
                    profile:action.payload.profile
                }
            case "GET_POSTS":
                return{
                    ...prevState,
                    posts:action.payload.posts
                }
            case "GET_CHATS":
                return{
                    ...prevState,
                    chats:action.payload.chats
                }
            case "SET_APP_STATE":
                return{
                    ...prevState,
                    initializing:action.payload.initializing
                }
            case "GET_USERS":
                return{
                    ...prevState,
                    users:action.payload.users
                }
            case "GET_REQUESTS":
                return{
                    ...prevState,
                    requests:action.payload.requests
                }
            case "SET_ERROR":
                return{
                    ...prevState,
                    errMsg:action.payload.errMsg
                }
            default:
                return prevState;
        }
    }
    const [state, dispatch] = useReducer(reducers, initialState)
    //const [images,setImages]= useState([]uid
    const getProfile=(uid)=>{
        firestore.collection('profile').doc(uid).onSnapshot((snap=>{
            dispatch({type:"SET_PROFILE", payload:{profile:snap.data()}})
        }))
    }
    const getPosts = ()=>{
        firestore.collection('posts').orderBy('createdAt', 'desc').onSnapshot(snap=>{
            dispatch({type:"GET_POSTS", payload:{posts:snap.docs}})
        })
    }
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                dispatch({type:"SET_USER", payload:{user:user}})
                firestore.collection('users').doc(user.uid).onSnapshot((data)=>{
                    firestore.collection('users').doc(user.uid).collection('friends').onSnapshot((snap)=>{
                        const friends = []
                        snap.forEach(friend=>friends.push({...friend.data(),id:friend.id}))
                        firestore.collection('users').doc(user.uid).collection('deleted').onSnapshot((deleted)=>{
                            const deletes = []
                            deleted.forEach(friend=>deletes.push({...friend.data(),id:friend.id}))
                            dispatch({type:"SET_USERDATA", payload:{userData:{...data.data(), id:data.id, friends:[...friends], deleted:[...deletes]}}})
                            
                        })
                        
                    })

                })

                getProfile(user.uid)
                getPosts();
                
            }
            else{
                dispatch({type:"SET_USER", payload:{user:user}})
            }
            dispatch({type:'SET_APP_STATE', payload:{initializing:false}})
        })
    },[])

    const context = useMemo(()=>({
        getImages : (event)=>{
                let image = event.target.files;
                let imageContainer = []
                for(let i=0;i<image.length;i++){
                  let reader = new FileReader();
                  reader.readAsDataURL(image[i])
                  reader.onload = (e)=>{
                     imageContainer.push(e.target.result)
                     dispatch({type:"SET_IMAGES", payload:{images:[...state.images,...imageContainer], files:image}})
                     //setImages([...images,...imageContainer])
                  }
                }
    
            },
            login : (email,password,props)=>{
                auth.signInWithEmailAndPassword(email, password)
                .then(res=>{ 
                   props.history.push('/post')
                   dispatch({type:'SET_ERROR', payload:{errMsg:""}})
                   return false
       
       
                })
                .catch(error=>{
                    dispatch({type:'SET_ERROR', payload:{errMsg:error.message}})
                    return true;
                })
           },
           register:(email,password,firstname,lastname,props)=>{
            auth.createUserWithEmailAndPassword(email, password)
            .then(rep=>{
                firestore.collection('users').doc(rep.user.uid).set({
                    email,
                    firstname,
                    lastname,
                    friends:[],
                    deleted:[]
                })
                .then(()=>{
                    firestore.collection('users').doc(rep.user.uid).onSnapshot((snap)=>{
                        dispatch({type:"SET_USERDATA", payload:{userData:{...snap.data(),id:snap.id}}})
                        props.history.push('/profile')
                    })
                })
            })
            .catch(error=>{
                console.log(error)
            })
           },
           logOut:()=>{
                auth.signOut()
                
           },
           getUsers:()=>{
            let users=[]
            firestore.collection('users').orderBy('firstname', 'asc').get()
            .then(docs=>{
                docs.forEach(doc=>{
                    if(doc.data().email !== state.user.email)
                    users.push({id:doc.id, ...doc.data()})
                    dispatch({type:"GET_USERS", payload:{users:users}})
                })
            })
           },
           removeUser:(user)=>{
                const index = state.users.findIndex(item=>item.id === user.id)
                state.users.splice(index,1)
                let deleted = []
                if(state.userData.deleted.length>0)
                deleted.push(...state.userData.deleted)
                deleted.push(user.id)
                firestore.collection('users').doc(state.user.uid).collection('deleted').doc(user.id).set({
                    deleted:deleted
                })
                dispatch({type:"GET_USERS", payload:{users:state.users}})
           },
           sendFriendRequest:(user)=>{
            // let friends = []
            const time = new Date()
            // if(state.userData.friends.length>0)
            // friends.push(...state.userData.friends)
            // friends.push({...user, accepted:false, createdAt:time})
            firestore.collection('users').doc(state.user.uid).collection('friends').doc(user.id).set({
               ...user,
                status:false,
                createdAt:time,
                

            })
            firestore.collection('requests').doc(user.id+state.user.uid).set({
                ...state.userData,
                id:user.id,
                createdAt:time
            })
           },
           confirmRequest:(user)=>{
            const time = new Date()
            firestore.collection('requests').doc(user.id).delete()
            const id = user.id.split(state.user.uid)[1]
            firestore.collection('users').doc(id).collection('friends').doc(state.user.uid).update({
                 status:true,
                 createdAt:time,
 
             })
             firestore.collection('users').doc(state.user.uid).collection('friends').doc(id).set({
                ...user,
                 status:true,
                 createdAt:time,
                 
 
             })
           },
           getFriendsRequest:()=>{
                firestore.collection('requests').where('id', '==', state.user.uid).onSnapshot(requests=>{
                    const req = []
                    requests.forEach(request=>req.push({...request.data(), id:request.id}))
                    dispatch({type:"GET_REQUESTS", payload:{requests:req}})
                })
           },
           deleteRequest:(request)=>{
            firestore.collection('requests').doc(request.id).delete()
            const id = request.id.split(state.user.uid)[1]
            firestore.collection('users').doc(id).collection('friends').doc(state.user.uid).delete()
           },
           cancelFriendRequest:(user)=>{
            // const index = state.userData.friends.findIndex(item=>item.id === user.id)
            // state.userData.friends.splice(index,1)
            firestore.collection('users').doc(state.user.uid).collection('friends').doc(user.id).delete()
            firestore.collection('requests').doc(user.id+state.user.uid).delete()
           },
           profileUpload:(event,object,name)=>{
            let image = event.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image)
            reader.onload = (e)=>{
               object.setState({[name]:e.target.result})
              const task =  storage.ref(name==='profilePic'?state.user.uid:'banner/'+state.user.uid).put(image)
               task.on('state_changed',snap=>{
                   const percent = Math.round(snap.bytesTransferred/snap.totalBytes) *100;
                   console.log(percent)
               })
               task.then(()=>{
                   storage.ref(name==='profilePic'?state.user.uid:'banner/'+state.user.uid).getDownloadURL()
                   .then(url=>{
                       if(name==='profilePic')
                        {
                            state.user.updateProfile({
                                photoURL:url
                            })
                            firestore.collection('users').doc(state.user.uid).update({photoURL:url})
                        }
                      else
                      firestore.collection('profile').doc(state.user.uid).update({bannerPic:url})
                   })
               })
               .catch(err=>console.log(err))
            }
           },
           
        //    confirmRequest:(index)=>{
        //        firestore.collection('users').doc(state.user.uid).get()
        //        .then((docs)=>{
        //             docs.
        //        })
        //    },
        notification:()=>{
            firestore.collection('notification').get
            .then(snap=>{
                
            })

        },
    
        
        notification:(data)=>{
        console.log(data)
            firestore.collection('posts').doc(data.postId).collection('comments').add({
                userId:data.userId,
                friendId:data.friendId,
                comment:data.comment,
            })

        },
        
        saveChat:async(message, receiverId)=>{
            firestore.collection('chats').add({
               senderId:state.user.uid,
               message: message,
               receiverId:receiverId,
               createdAt: new Date()
            })
        },
        getChats:async(receiverId)=>{
               
            firestore.collection('chats').where('receiverId', '==', receiverId).where('senderId', '==', state.user.uid).orderBy('createdAt', 'asc').onSnapshot(chats=>{  
                let req = [] 
                chats.forEach(chat=>req.push({...chat.data(), id:chat.id}))
                dispatch({type:"GET_CHATS", payload:{chats:req}})
                firestore.collection('chats').where('receiverId', '==', state.user.uid).where('senderId', '==', receiverId).onSnapshot(chats=>{
                    let sechats = []    
                    chats.forEach(chat=>sechats.push({...chat.data(), id:chat.id}))
                    dispatch({type:"GET_CHATS", payload:{chats:sechats.concat(req)}})
                })
            })

            
       },
       getHistoryChat:async()=>{
        firestore.collection('chats').where('senderId', '==', state.user.uid).get()
        .then(docs=>{
            let results=[]
            docs.forEach(doc=>results.push(doc.data()))
            firestore.collection('chats').where('receiverId', '==', state.user.uid).get()
            .then(resul=>{
                let step=[]
                resul.forEach(result=>step.push(result.data())) 
                console.log(step.concat(results))
            })
        })
       },
       jobPlacement:()=>{
           firestore.collection('job-placement').get()
           .then(docs=>{
               let place=[]
               docs.forEach(doc=>place.push(doc.data()))
               dispatch({type:"SET_JOBS", payload:{jobs:place}})
               

           })
           
       },
           state,
            images:state.images,
        }),[state])
    return context;
}
export default GlobalState;