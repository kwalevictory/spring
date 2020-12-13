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
import Chathandle from "../pages/chathandle";
import PublicRoute from "./publicRoute";
import AuthRoute from "./authRoute";
const Auth = ()=>{
    const {state} = useContext(Context)
    return(
        <>
        {
          state.initializing?
            <Splash/>
            :
            <>
            <AuthRoute  Component={Chathandle} path="/chathandle"/>
            <AuthRoute Component={Viewjob} path="/viewjob"/>
            <AuthRoute Component={Adverts} path="/adverts"/>
            <Route path="/taguser">
              <Taguser/>
            </Route>
            <Route path="/report">
              <Report/>
            </Route>
            <Route path="/suspended">
              <Suspended/>
            </Route>
            <Route path="/block">
              <Block/>
            </Route>
            <Route path="/blocknew">
              <Blocknew/>
            </Route>
            <Route path="/livevideofinish">
                <LiveVideoFinish/>
            </Route>
            <Route path="/livevideo">
                <Video/>
            </Route>
            <Route path="/live">
                <LiveVideo/>
            </Route>
            <Route path="/watch">
                <Watch/>
            </Route>
            <Route path="/newsupdate">
              <Newsupdate/>
            </Route>
            <Route path="/comment">
              <Comment/>
            </Route>
            <Route path="/newpost">
              <CreatePost/>
            </Route>
            <Route path="/search">
              <Search/>
            </Route>
            <Route path="/notification">
              <Notification/>
            </Route>
            <Route path="/jobplacement">
              <Jobplacement/>
            </Route>
            <Route path="/chat">
              <Chat/>
            </Route> 
            <AuthRoute Component={Post} path="/post/:user"/>
            <AuthRoute Component={Friends} path="/friends"/>
            <Route path="/friend-request">
              <FriendRequest />
            </Route>
            <Route path="/edit-profile">
              <EditProfile/>
            </Route>
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
export default Auth