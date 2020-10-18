import React, {useContext} from "react";
import "./header.css"
import Context from "./context";
import {withRouter} from "react-router-dom"

const Header = ({history})=>{
    const {getImages,logOut} = useContext(Context)
    const navigate = (file)=>{
        getImages(file)
        history.push('/newpost')
    }
    return(
        <div className="header">

        <div className="icon-bars">
            <a href="https://www.google.com" className="active">
                <i className="fa fa-bars" aria-hidden="true"></i>
                
            </a>
            <a href="https://www.google.com" onClick={(e)=>{e.preventDefault(); logOut()}}>
                <i className="fa fa-home" aria-hidden="true"></i>

            </a>
            <a href="https://www.google.com">
                <i className="fa fa-commenting-o" aria-hidden="true"></i>

            </a>
            <a href="https://www.google.com">
                <i className="fa fa-search" aria-hidden="true"></i>

            </a>
            <input type="file" onChange={navigate} multiple id="images" style={{display:'none'}}/>
            <label htmlFor="images">
                    <i className="fa fa-camera" aria-hidden="true"></i>
            </label>

        </div>
    
            <ul>
                <li>
                    <a href="https://www.google.com" >
                        <div className="list-icons">
                        </div>
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                        <div className="list-icons">
                        </div>
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                        <div className="list-icons">
                        </div>
                        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                        <div className="list-icons">
                        </div>
                        <i className="fa fa-desktop" aria-hidden="true"></i>

                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                        <div className="list-icons">
                        </div>
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com">
                        <div className="list-icons">
                        </div>
                        <i className="fa fa-bell-o" aria-hidden="true"></i>


                    </a>

                </li>
            </ul>

        </div>
       
    )
}
export default withRouter(Header);