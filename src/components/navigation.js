import React from "react";
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";
import Context from "./context";
import globalState from "../states/globalstate";
import Auth from "../routes/auth";

const Navigation = ()=>{
    return(
      <Context.Provider value={globalState()}>
        <Router>
        <div>
          <Switch>
            <Auth/>
          </Switch>
        </div>
      </Router>
      </Context.Provider>
    )
}
export default Navigation;
