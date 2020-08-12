import React from "react";
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
const Navigation = ()=>{
    return(
        <Router>
        <div>
          <Switch>
            {/* <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route> */}
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
    )
}
export default Navigation;