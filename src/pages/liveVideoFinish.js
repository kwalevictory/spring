import React from "react";
import {withRouter} from "react-router-dom"
const LiveVideoFinish = ({history})=>{
    const sendToPost = ()=>{
        history.replace('/post')
    }
    return(
        <div style={{width:'100%', height:'100vh', background:'#000'}}>
            <div style={{width:'90%', margin:'0 auto', height:'100%'}}>
                <div style={{height:'80%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <div>
                        <p style={{color:'#fff', textAlign:'center'}}>Your live video has ended it will be posted to your timeline.</p>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <button style={{background:'transparent', border:'1px solid #fff', borderRadius:'6px', padding:'5px 8px', color:'#fff',outline:0}}>Friends</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button style={{width:'100%', border:'1px solid #fff', padding:'10px 0', borderRadius:'6px', background:'transparent',color:'#fff',outline:0}}>Delete</button>
                    <button onClick={sendToPost} style={{width:'100%', border:'1px solid #fff', padding:'10px 0', borderRadius:'6px', marginTop:'10px', background:'transparent',color:'#fff',outline:0}}>Finish</button>
                </div>
            </div>
        </div>
    )
}
export default withRouter(LiveVideoFinish);