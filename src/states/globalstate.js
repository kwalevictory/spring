import  {useMemo, useReducer, useEffect} from "react"
import {auth,firestore,storage} from "../database/users"
const GlobalState = ()=>{
    //const [images,setImages]= useState([])

    const initialState = {
        images:[],
        files:[],
        user:null,
        userData:null,
        profile:null,
        posts:[]
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
        firestore.collection('posts').onSnapshot(snap=>{
            dispatch({type:"GET_POSTS", payload:{posts:snap.docs}})
        })
    }
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                dispatch({type:"SET_USER", payload:{user:user}})
                firestore.collection('users').doc(user.uid).onSnapshot((snap)=>{
                    dispatch({type:"SET_USERDATA", payload:{userData:snap.data()}})
                })
                getProfile(user.uid)
                getPosts();
            }
            else{
                dispatch({type:"SET_USER", payload:{user:user}})
            }
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
       
       
                })
                .catch(error=>{
                    console.log(error)
                })
           },
           register:(email,password,firstname,lastname,props)=>{
            auth.createUserWithEmailAndPassword(email, password)
            .then(rep=>{
                firestore.collection('users').doc(rep.user.uid).set({
                    email,
                    firstname,
                    lastname
                })
                .then(()=>{
                    firestore.collection('users').doc(rep.user.uid).onSnapshot((snap)=>{
                        dispatch({type:"SET_USERDATA", payload:{userData:snap.data()}})
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
                        state.user.updateProfile({
                          photoURL:url
                      })
                      else
                      firestore.collection('profile').doc(state.user.uid).update({bannerPic:url})
                   })
               })
               .catch(err=>console.log(err))
            }
           },
           state,
            images:state.images,
        }),[state])
    return context;
}
export default GlobalState;