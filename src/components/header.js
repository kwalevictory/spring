import React, {useContext} from "react";
import "./header.css"
import Context from "./context";
import {withRouter} from "react-router-dom"

const Header = ({history})=>{
    const {getImages} = useContext(Context)
    const navigate = (file)=>{
        getImages(file)
        history.push('/newpost')
    }
    return(
        <div className="icon-bars">
            <i className="fa fa-home"></i>
             <i className="fa fa-home"></i>
            </div>    
        
    
        
    )
}
export default withRouter(Header);