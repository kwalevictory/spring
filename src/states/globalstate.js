import  {useMemo, useReducer, useEffect} from "react"
import {auth,firestore,storage} from "../database/users"
import firebase from "firebase/app"
import comment from "../pages/comment"
import { getAuth, setAuth,clearAuth, profileUploads,getReplies, createPost, getPost, createJobs, createComments, updateUser, updateFriend, getComment,createNotifications, createChats,} from "./helper"
import io from 'socket.io-client'
const GlobalState = ()=>{
    //const [images,setImages]= useState([])
    const serverTime = firebase.firestore.FieldValue.serverTimestamp()

    const initialState = {
        images:[],
        files:[],
        user:null,
        users:[],
        friends:[],
        messages:[],
        requests:[],
        userData:null,
        profile:null,
        posts:[],
        initializing:true,
        errMsg:'',
        chats:[],
        jobs:[],
        comments:[],
        replies:[],
        notifications:[],
        official:[]
        

        
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
            case "SET_MESSAGES":
                return{
                    ...prevState,
                    messages:action.payload.messages
                }
                
            case "SET_FRIENDS":
                return{
                    ...prevState,
                    friends:action.payload.friends
                }
            case "GET_OFFICIAL":
                return{
                    ...prevState,
                    user:action.payload.user
                }
                
            case "SET_NOTIFICATIONS":
                return{
                    ...prevState,
                    notifications:action.payload.notifications
                }
            case "SET_USERDATA":
                return{
                    ...prevState,
                    userData:action.payload.userData
                }
                
            case "SET_COMMENTS":
                return{
                    ...prevState,
                    comments:action.payload.comments
                }
            case "SET_REPLIES":
                return{
                    ...prevState,
                    replies:action.payload.replies
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

    const getProfile=async(email)=>{
        console.log(email,'email')
        const response = await fetch(`/api/profile/${email}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
          })
          const res = await response.json()
          if(res.status === 200){
            dispatch({type:"SET_PROFILE", payload:{profile:{...res}}})
          }
          console.log(res, 'profile')
          return res.status;
    }

    const getPosts = ()=>{
        getPost()
        .then(res=>{
            const posts = []
            res.data.forEach(post=>{
                
               const image =  res.data.filter(d=>d.post_id === post.post_id)
               posts.push({
                   post:post.post,
                   images:image,
                   id:post.post_id
               })
            })
           dispatch({type:"GET_POSTS", payload:{posts}})
        })
    }
    


    
    
    
    useEffect(()=>{
        const socket = io('http://localhost:3000', {
            query:{
                user:localStorage.getItem('@auth')
            },
            forceNew:true,

        })
    socket.on('posts', (resp)=>{
        const res = JSON.parse(resp)
        const posts = []
        res.forEach(post=>{
            
           const image =  res.filter((d)=>{
               if(d.id === post.id){
                if(d.image)
                    return d
                   
                   
                //    if(d.image){
                //        return d
                //    }
               }
           })
           posts.push({
               post:post.post,
               images:image,
               id:post.id,
               firstname:post.firstname,
               lastname:post.lastname,
               created_at:post.created_at
           })
        })
        dispatch({type:"GET_POSTS", payload:{posts}})
    })
    
    socket.on('comments',(resps)=>{
        const comments = JSON.parse(resps)
        dispatch({type:"SET_COMMENTS", payload:{comments}})
    })


    socket.on('friends',(resps)=>{
        const friends = JSON.parse(resps)
        dispatch({type:"SET_FRIENDS", payload:{friends}})
    })
    socket.on('messages',(resps)=>{
        const messages = JSON.parse(resps)
        dispatch({type:"SET_MESSAGES", payload:{messages}})
    })


    socket.on('notifications',(sees)=>{
        const notifications = JSON.parse(sees)
        dispatch({type:"SET_NOTIFICATIONS", payload:{notifications}})   
    })
    
    socket.on('jobs', (resp)=>{
        const jobs = JSON.parse(resp)
        dispatch({type:"SET_JOBS", payload:{jobs}})
    })
    socket.on('users', (resp)=>{
        const users = JSON.parse(resp)
        dispatch({type:"GET_USERS", payload:{users:users}})
    })

            getAuth()
            .then(user=>{
                if(user){
                    dispatch({type:"SET_USER", payload:{user:user}})
                //     if(user.email !== undefined)
                //    getProfile(user.email)
                getPosts()
                }
                else{
                    dispatch({type:"SET_USER", payload:{user:null}})
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
            login : async(email,password)=>{
                // setAuth(res)
                const response = await fetch(`/api/login`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({user: {email:email,password:password}})
                  })
                  const res = await response.json()
                  if(res.status === 200){
                    setAuth(res)
                    dispatch({type:"SET_USER", payload:{user:{...res}}})
                  }
                  return res;
           },

           

       text:async(comment_box, post_id, type)=>{
            const resps =  createComments(comment_box, state.user.id, post_id, type)
            dispatch({type:"SET_COMMENTS", payload:{comments:[{comment:comment_box,user_id:state.user.id, replies:0, firstname:state.user.firstname, lastname:state.user.lastname, image:state.user.image}, ...state.comments]}})
           
       },
       
       notification:async(comment_box, post_id,	notification_item_id, type)=>{
        const sees =  createNotifications(comment_box, state.user.id, post_id, notification_item_id, type)
        dispatch({type:"SET_NOTIFICATIONS", payload:{notifications:[{notification:comment_box,user_id:state.user.id, firstname:state.user.firstname, lastname:state.user.lastname, image:state.user.image}, ...state.comments]}})
       
   },

       
       
           register:async(email,password,firstname,lastname,props)=>{
            const response = await fetch(`/api/register`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({user: {email:email,password:password,firstname:firstname,lastname:lastname}})
              })
              const res = await response.json()
              if(res.status === 200){
                  
                setAuth(res)
                dispatch({type:"SET_USER", payload:{user:{...res}}})
                props.history.push('/profile')
              }
            },
            
            jobPlacement:async(job_title,job_location,job_application_email,job_description)=>{
                const jobs = {job_title:job_title,job_location:job_location,job_application_email:job_application_email,job_description:job_description}
                const res =  createJobs(jobs, state.user.id)
               // return res
            //    if(res.status === 200){
                   
            //     //  setAuth(res)
            //     //  dispatch({type:"SET_USER", payload:{user:{...res}}})
            //      props.history.push('/viewjob')
            //    }
 
            // auth.createUserWithEmailAndPassword(email, password)
            // .then(rep=>{
            //     firestore.collection('users').doc(rep.user.uid).set({
            //         email,
            //         firstname,
            //         lastname,
            //         friends:[],
            //         deleted:[]
            //     })
            //     .then(()=>{
            //         firestore.collection('users').doc(rep.user.uid).onSnapshot((snap)=>{
            //             dispatch({type:"SET_USERDATA", payload:{userData:{...snap.data(),id:snap.id}}})
            //             props.history.push('/profile')
            //         })
            //     })
            // })
            // .catch(error=>{
            //     console.log(error)
            // })

           },
    

            messager:async(message,receiver_id,)=>{
                const res =  createChats(message,state.user.id,receiver_id)
            

           },
           logOut:()=>{
            clearAuth()
            .then(()=>{
                dispatch({type:"SET_USER", payload:{user:null}}) 
            })
                
           },
           updateUsers:async(status, friendId)=>{
            await updateUser(status, state.user.id, friendId)
           },
           updateFriends:(status, friendId)=>{
            updateFriend(status, state.user.id, friendId)
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
                // firestore.collection('requests').where('id', '==', state.user.uid).onSnapshot(requests=>{
                //     const req = []
                //     requests.forEach(request=>req.push({...request.data(), id:request.id}))
                //     dispatch({type:"GET_REQUESTS", payload:{requests:req}})
                // })
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
            let image = event.target.files;
            let reader = new FileReader();
            reader.readAsDataURL(image[0])
            reader.onload = (e)=>{
               object.setState({[name]:e.target.result})
               profileUploads(image, state.user.id)
            //   const task =  storage.ref(name==='profilePic'?state.user.uid:'banner/'+state.user.uid).put(image)
            //    task.on('state_changed',snap=>{
            //        const percent = Math.round(snap.bytesTransferred/snap.totalBytes) *100;
            //        console.log(percent)
            //    })
            //    task.then(()=>{
            //        storage.ref(name==='profilePic'?state.user.uid:'banner/'+state.user.uid).getDownloadURL()
            //        .then(url=>{
            //            if(name==='profilePic')
            //             {
            //                 state.user.updateProfile({
            //                     photoURL:url
            //                 })
            //                 firestore.collection('users').doc(state.user.uid).update({photoURL:url})
            //             }
            //           else
            //           firestore.collection('profile').doc(state.user.uid).update({bannerPic:url})
            //        })
            //    })
            //    .catch(err=>console.log(err))
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
        newPost :async(post)=>{
          return  createPost(post, state.user.id, state.files)
          .then(res=>res)
        },
        comments : async(id)=>{
            getComment(id)
            .then(resn=>{
                // const comments = []
                // resn.data.forEach((res,i)=>{
                //     if(res.parent_id === 0){
                //         const replies =  resn.data.filter(ref=>(ref.id === res.parent_id && ref.parent_id === res.parent_id ))
                //         comments.push({
                //             ...res,
                //             replies
                //         })
                //     }

                // })
               dispatch({type:"SET_COMMENTS", payload:{comments:resn.data}})
            })
        },
        replies : async(postId, comment_id)=>{
            getReplies(postId, comment_id)
            .then(resn=>{
               dispatch({type:"SET_REPLIES", payload:{replies:resn.data}})
            })
        },
    /*comments:()=>{
           firestore.collection('comments').get()
           .then(docs=>{
               let teach=[]
               docs.forEach(doc=>teach.push(doc.dat()))
               dispatch({type:"SET_COMMENTS", payload:{comments:teach}})

               
           })

       },*/

    //    jobPlacement:()=>{
    //        firestore.collection('job-placement').get()
    //        .then(docs=>{
    //            let place=[]
    //            docs.forEach(doc=>place.push(doc.data()))
    //            dispatch({type:"SET_JOBS", payload:{jobs:place}})
               

    //        })
           
    //    },
           state,
            images:state.images,
        }),[state])
    return context;
}
export default GlobalState;