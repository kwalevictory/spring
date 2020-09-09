import React,{useState,useMemo} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from "../pages/login"
import Dashboard from "../pages/dashboard";
import Profile from "../pages/profile";
import EditProfile from "../pages/editProfile";
import FriendRequest from "../pages/friendrequest"
import Friends from "../pages/friends"
import Post from "../pages/post";
 import Chat from "../pages/chat"
import Jobplacement from "../pages/jobplacement";
import Notification from "../pages/notification";
import Text from "../pages/text"
import Search from "../pages/search";
import CreatePost from "../pages/createPost";
import Comment from "../pages/comment";
import Context from "./context";
import Newsupdate from "../pages/newsupdate";
import LiveVideo from "../pages/video";
import Video from "../pages/livevideo"
import Watch from "../pages/watch";
import LiveVideoFinish from "../pages/Livevideofinish";
import Block from "../pages/block";
import Suspended from "../pages/suspended";
import Blocknew from "../pages/blocknew";
import Report from "../pages/report";

const Navigation = ()=>{
  const [images,setImages]= useState([])

  const context = useMemo(()=>({
      getImages : (event)=>{
              let image = event.target.files;
              let imageContainer = []
              for(let i=0;i<image.length;i++){
                let reader = new FileReader();
                reader.readAsDataURL(image[i])
                reader.onload = (e)=>{
                   imageContainer.push(e.target.result)
                   setImages([...images,...imageContainer])
                }
              }

          },
          images:images,
      }),[images])
    return(
      <Context.Provider value={context}>
        <Router>
        <div>
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
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
            <Route path="/text">
              <Text/>
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
            <Route path="/post/:user?">
              <Post/>
            </Route>
            <Route path="/friends">
              <Friends/>
            </Route>
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
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
      </Context.Provider>
    )
}
export default Navigation;
