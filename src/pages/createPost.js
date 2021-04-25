import React, {useContext,useState} from "react";
import ProfileIcon from "../components/profileicon";
import Layout from "../components/layout";
import "../css/createpost.css"
import UploadedImages from "../components/uploaded_images";
import Context from "../components/context";
import {withRouter} from "react-router-dom"
import Privacy from "../components/privacy";
const CreatePost = ({history})=>{
    const {images,state, newPost} = useContext(Context)
    const [data,seData]=useState({
        post:'',
        images:images,
        privacy:false,
        privacyText:'',
    })
    const onSubmit =()=>{
       
        newPost(data.post)
        .then((res)=>{
            seData({...data, post:''})
            history.push(`/post/${state.user.email}`)

        })
        // firestore.collection('posts').add({
        //     post:data.post,
        //     name:state.userData.firstname+" "+state.userData.lastname,
        //     photoURL:state.user.photoURL,
        //     uid:state.user.uid,
        //     privacyText:data.privacyText,
        //     createdAt: store.FieldValue.serverTimestamp()
        // })
        // .then(rep=>{
        //     firestore.collection('posts').orderBy('createdAt','desc').limit(1).get()
        //     .then(snap=>{
        //         snap.forEach(doc=>{
        //             for(let i =0; i <state.files.length; i++){
        //                 const task= storage.ref('post/'+state.files[i].name).put(state.files[i])
        //                 task.then(()=>{
        //                     storage.ref('post/'+state.files[i].name).getDownloadURL()
        //                     .then(url=>{
        //                         urls.push(url)  
        //                         firestore.collection('posts').doc(doc.id).update({images:urls})          
        //                     })
        //                 })
        //             }
        //         })
        //        // firestore.collection('post-images').doc(doc.id).set({images:urls})
        //     })
        // })
        // .then(()=>{
        //         history.push('/post')
        
        // })
        // .catch(err=>{console.log(err)})
    }

    const onClose = (privacy)=>{
        seData({...data, privacy:false, privacyText:privacy})
    }
    return(
        <Layout>
            {
                data.privacy?
                <Privacy onClose={onClose}/>
                :null
            }
            <div className="createpost">
                <div className="personal-profile">
                    <ProfileIcon/>
                    <div className="personal">
                        <h3>{state.userData?state.userData.firstname + " "+state.userData.lastname:''}</h3>
                        <i>icon</i>
                    </div>
                    <div aria-hidden="true" onClick={()=>seData({...data, privacy:!data.privacy})} className="personal-privacy">
                        <span>{data.privacyText === ''?'Choose Privacy':data.privacyText} <i>icon</i></span>
                    </div>
                </div>
                <div className="textare">
                <textarea onChange={(event)=>seData({...data, post:event.target.value})} placeholder="What is in your mind?" defaultValue={data.post}/>
                </div>
                <UploadedImages images={images}/>
                <div className="down-icons">
                </div>
                <div className="icon-camera">
                    <i class="fa fa-camera" aria-hidden="true"></i>
                </div>
                <button onClick={onSubmit}>Post</button>
                <button>Promote Post</button>
            </div>
        </Layout>
        
    )
}
export default withRouter(CreatePost);
