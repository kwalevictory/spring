import React, {useContext,useState} from "react";
import ProfileIcon from "../components/profileicon";
import Layout from "../components/layout";
import "../css/createpost.css"
import UploadedImages from "../components/uploaded_images";
import Context from "../components/context";
import {withRouter} from "react-router-dom"
import Privacy from "../components/privacy";

const CreatePost = ({history})=>{
    const {images} = useContext(Context)
    const [data,seData]=useState({
        post:'',
        images:images,
        privacy:false,
        privacyText:'',
        uid:Math.floor(Math.random()*100)
    })
    const onSubmit =()=>{
        seData({...data, post:''});
        history.push('/post')
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
                        <h3>John</h3>
                        <time>1hr</time>
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