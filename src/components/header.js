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
        <>
        <div className="top">
            <div className="container">
                <ul className="top-inner">
                    <li><i className="fa fa-camera" aria-hidden="true"></i></li>

                    <li>Spring</li>
                    <li>
                        <form action="">
                            <input type="text"/>
                            <button><i className="fa fa-search " aria-hidden="true"></i></button>

                        </form>
                    </li>
                    <li>Spring</li>
                    <li aria-hidden="true"><i className="fa fa-camera" aria-hidden="true"></i><label htmlFor="file-upload">camera</label></li>
                </ul>
                    <input onChange={(file)=>navigate(file)} style={{display:'none'}} type="file" multiple={true} id="file-upload" />
            </div>
        </div>
        </>
    )
}
export default withRouter(Header);