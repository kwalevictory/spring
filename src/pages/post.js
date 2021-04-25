import React, {useContext, useState} from "react";
import {PostLayout as Layout} from "../components/layout";
import {withRouter, Link} from "react-router-dom"
import ProfileIcon from "../components/profileicon";
import "../css/singlepost.css"
import Status from "../components/status";
import Posts from "../components/post";
import Context from "../components/context";


const Post = ({location})=>{
    const [pops, setPops] = useState(false)
    const{state}=useContext(Context)
    return(
        <Layout>
            <div className="timelines">
            <div className="post">
                {/* <div className="post-inner">
                    <ProfileIcon/>
                    <form>
                        <div>What's on your mind ....</div>
                    </form>
                    <span></span>
                </div>
                <div className="post-icons">
                    <ul>
                        <li><span className="fa fa-user-o"></span>Advertisement</li>
                        <li><Link to="/live"><span className="fa fa-video-camera"></span> Live Video</Link></li>
                        <li><span className="fa-video-camera"></span>video from users</li>
                    </ul>
                </div> */}
            </div>
            <Status/>
            {
                state.posts?
                state.posts.map(((post, i)=>{
                   return <Posts key={i} post={{...post}} user={state.user}/>
                }))
                :''
            }
            {
                pops&&
                <div className="pops">
                    <button className="btn-pops"><i className="fa fa-camera"></i>VIVE</button>
                    <button className="btn-pops"><i className="fa fa-camera"></i>POST </button>

                    <button className="btn-pops"><i className="fa fa-circle"></i>OFFICIAL</button>

                    <button className="btn-pops"><i className="fa fa-camera"></i>PROMOTE </button>




                
                </div>
            }
            <button onClick={()=>setPops(!pops)} className="fab">
                <i className="fa fa-plus"></i>
            </button>
            </div>
        </Layout>
    );
}
export default withRouter(Post);