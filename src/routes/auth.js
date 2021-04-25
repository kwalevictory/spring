import React, {useContext} from "react"
import {

    Route
  } from "react-router-dom";
  import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";
import EditProfile from "../pages/editProfile";
import FriendRequest from "../pages/friendrequest"
import Friends from "../pages/friends"
import Post from "../pages/post";
 import Chat from "../pages/chat"
import Jobplacement from "../pages/jobplacement";
import Notification from "../pages/notification";
import Search from "../pages/search";
import CreatePost from "../pages/createPost";
import Comment from "../pages/comment";
import Newsupdate from "../pages/newsupdate";
import LiveVideo from "../pages/video";
import Video from "../pages/livevideo"
import Watch from "../pages/watch";
import LiveVideoFinish from "../pages/Livevideofinish";
import Block from "../pages/block";
import Suspended from "../pages/suspended";
import Blocknew from "../pages/blocknew";
import Report from "../pages/report";
import Context from "../components/context";
import Taguser from "../pages/taguser";
import Login from "../pages/login"
import Adverts from "../pages/adverts"
import Viewjob from "../pages/viewjob";
import Splash from "../pages/splash";
import OfficialPost from "../pages/officialPost"
import Chathandle from "../pages/chathandle";
import PublicRoute from "./publicRoute";
import AuthRoute from "./authRoute";
import Listblock from "../pages/listblock";
import Reply from "../pages/reply";


const Auth = ()=>{
    const {state} = useContext(Context)

    return(
        <>
        {
          state.initializing?
            <Splash/>
            :
            <>
            <AuthRoute  Component={Newsupdate} path="/newsupdate"/>
            <AuthRoute  Component={Chathandle} path="/chathandle"/>
            <AuthRoute Component={Viewjob} path="/viewjob"/>
            <AuthRoute Component={Adverts} path="/adverts"/>
            <AuthRoute Component={Report} path="/report"/>
            <AuthRoute Component={Suspended} path="/suspended"/>
            <AuthRoute Component={Blocknew} path="/blocknew"/>
            <AuthRoute Component={LiveVideoFinish} path="livevideofinish"/>
            <AuthRoute Component={LiveVideo} path="/livevideo"/>
            <AuthRoute Component={Search} path="/search"/>
            <AuthRoute Component={Notification} path="/notification"/>
            <AuthRoute Component={Jobplacement} path="/jobplacement"/>
            <AuthRoute Component={Comment} path="/comment"/>
            <AuthRoute Component={Reply} path="/reply"/>
            <AuthRoute Component={OfficialPost} path="/officialPost"/>



            <AuthRoute Component={Chat} path="/chat"/>
            <AuthRoute Component={Listblock} path="/listblock"/>
            <AuthRoute Component={Block} path="/block"/>
            <AuthRoute Component={Taguser} path="/taguser"/>




        
            <AuthRoute Component={Watch} path="/watch"/>
            
            <AuthRoute Component={Post} path="/post/:user"/>
            <AuthRoute Component={Friends} path="/friends"/>

            <AuthRoute Component={Dashboard} path="/dashboard"/>
            <AuthRoute Component={CreatePost} path="/newpost"/>
            <AuthRoute Component={FriendRequest} path="/friend-request"/>
            <AuthRoute Component={EditProfile} path="/editprofile"/>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <PublicRoute path="/" exact Component={Login}/>
        </>
        
        }
        </>
    )
}
export default Auth;