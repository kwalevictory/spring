import React from "react";
import {PostLayout as Layout} from "../components/layout";
import {withRouter} from "react-router-dom"
import ProfileIcon from "../components/profileicon";
import "../css/singlepost.css"
import Status from "../components/status";
import Posts from "../components/post";

const Post = ({location})=>{
//  console.log(location)
    return(
        <Layout>
            <div className="post">
                <div className="post-inner">
                    <ProfileIcon/>
                    <form>
                        <div>What's on your mind ....</div>
                    </form>
                    <span></span>
                </div>
                <div className="post-icons">
                    <ul>
                        <li><span className="fa fa-user-o"></span>Advertisement</li>
                        <li><span className="fa fa-video-camera"></span> Live Video</li>
                        <li><span className="fa-video-camera"></span>video from users</li>
                    </ul>
                </div>
            </div>
            <Status/>
            <Posts/>
        </Layout>
    );
}
export default withRouter(Post);