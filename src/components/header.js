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
        <div className="header">

        <div className="icon-bars">
            <a className="active">
                <i className="fa fa-bars" aria-hidden="true"></i>
                
            </a>
            <a>
                <i className="fa fa-home" aria-hidden="true"></i>

            </a>
            <a>
                <i className="fa fa-comment-o" aria-hidden="true"></i>

            </a>
            <a>
                <i className="fa fa-search"></i>

            </a>
            <a>
                <i className="fa fa-camera" aria-hidden="true"></i>

            </a>

        </div>
    
            <ul>
                <li>
                    <a>
                        <div className="list-icons">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name">home</div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="list-icons">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name">home</div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="list-icons">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name">home</div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="list-icons">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name">home</div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="list-icons">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name">home</div>
                    </a>
                </li>
                <li>
                    <a>
                        <div className="list-icons">
                            <i className="fa fa-home" aria-hidden="true"></i>
                        </div>
                        <div className="name">home</div>
                    </a>

                </li>
            </ul>

        </div>
       
    )
}
export default withRouter(Header);