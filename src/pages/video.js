import React,{useEffect} from "react";
import "../css/livevideo.css";
import video from "../images/besty.mp4"
import Media from "../components/media"
import {withRouter} from "react-router-dom"

const LiveVideo = ({history})=>{

    let myVideo
    useEffect(()=>{
        let media = new Media()
     media.getPermission()
        .then(stream=>{
            try{
                myVideo.src = URL.createObjectURL(stream)
            }
            catch(err){
                myVideo.srcObject = stream
            }
            myVideo.play()
        })
    })
    const goLive = ()=>{
        history.push('/livevideo')
    }
    return(
            <div className="livevideo">
                <div className="live-icons">
                    <span>icon</span>
                    <span>icon</span>
                </div>
                <video width="100%" height="100%" ref={vid=>myVideo=vid} src={video}></video>
                <div className="live-button">
                    <p>
                       To <span>Public</span>
                    </p>
                    <label>
                        Description:
                        <input/>
                    </label>
                    <button onClick={goLive}>Go Live</button>
                </div>
            </div>
    )
}
export default withRouter(LiveVideo);