import React, { useContext } from 'react';
import {Route, Redirect} from "react-router-dom";
import Context from '../components/context';


const PublicRoute = ({Component:Component, ...rest})=>{
    const {state} = useContext(Context)
    return(
        <Route {...rest} render={props=>{
            return(
            state.user?
            <Redirect to={`/post/${state.user.username}`}/>
            : 
            <Component {...props}/>
        )}}/>
    )
}
export default PublicRoute;