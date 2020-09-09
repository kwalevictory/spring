import React,{useEffect} from "react";
import Media from "../components/media";
import {withRouter} from "react-router-dom"

const Video = ({history})=>{
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
    },[])
    const goToFinish = ()=>{
        myVideo.srcObject.getTracks().forEach(track=>{
            track.stop()
        })
        history.replace('/livevideofinish')
    }
    return(
        <div style={{width:'100%', height:'100vh', position:'relative',background:'black'}} className="live-container">
            <span style={{background:'red', color:'#fff', padding:'2px 4px'}}>LIVE</span>
            <video style={{width:'100%', height:'100%', position:'absolute', left:0,top:0}} ref={(ref)=>myVideo=ref}></video>
            <div style={{position:'absolute', bottom:'10px',left:'5%', display:'flex', alignItems:'center', justifyContent:'space-between', width:'90%',}} className="live-buttom">
                <ul style={{display:'flex',listStyle:'none'}}>
                    <li style={{marginRight:'10px', color:'#fff'}}>icon</li>
                    <li style={{marginRight:'10px', color:'#fff'}}>icon</li>
                    <li style={{marginRight:'10px', color:'#fff'}}>icon</li>
                    <li style={{marginRight:'10px', color:'#fff'}}>icon</li>
                </ul>
                <div>
                    <button onClick={goToFinish} style={{background:'transparent', padding:'5px 10px', border:'1px soiid #fff', borderRadius:'6px', color:'#fff'}}>Finish</button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Video);
