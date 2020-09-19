import React, {useContext,useState} from "react";
import ProfileIcon from "../components/profileicon";
import Layout from "../components/layout";
import "../css/createpost.css"
import UploadedImages from "../components/uploaded_images";
import Context from "../components/context";
import {withRouter} from "react-router-dom"
import Privacy from "../components/privacy";
import {firestore,storage} from "../database/users"

const CreatePost = ({history})=>{
    const {images,state} = useContext(Context)
    const [data,seData]=useState({
        post:'',
        images:images,
        privacy:false,
        privacyText:'',
    })
    const onSubmit =()=>{
        seData({...data, post:''});
        firestore.collection('posts').add({
            post:data.post,
            name:state.userData.firstname+" "+state.userData.lastname,
            photoURL:state.user.photoURL,
            uid:state.user.uid,
            privacyText:data.privacyText,
            createdAt: new Date().getMilliseconds()
        })
        .then(rep=>{
            firestore.collection('posts').orderBy('createdAt','desc').limitToLast(1).onSnapshot(snap=>{
                snap.forEach(doc=>{
                    for(let i =0; i <state.files.length; i++){
                        const task= storage.ref('post/'+doc.id).child(`${state.files[i].name}`).put(state.files[i])
                        task.then(()=>{
                            storage.ref('post/'+doc.id).child(`${state.files[i].name}`).getDownloadURL()
                            .then(url=>{
                                firestore.collection('post-images').doc(doc.id).set({url})             
                            })
                        })
                    }
                   
                    // state.file.forEach((image,i)=>{
                    //    const task= storage.ref('post/'+doc.id).child(`${image.name}`).put(image)
                    //    task.then(()=>{
                    //        storage.ref('post/'+doc.id).child(i).getDownloadURL()
                    //        .then(url=>{
                    //            firestore.collection('post-images').doc(doc.id).set({i:url})
                    //        })
                    //    })
                    // })
                })
            })
            history.push('/post')
        })
        .catch(err=>{console.log(err)})
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
                <div className="textarea">
                <textarea onChange={(event)=>seData({...data, post:event.target.value})} placeholder="What is in your mind?" defaultValue={data.post}/>
                </div>
                <UploadedImages images={images}/>
                <button onClick={onSubmit}>Post</button>
                <button>Promote Post</button>
            </div>
        </Layout>
    )
}
export default withRouter(CreatePost);
