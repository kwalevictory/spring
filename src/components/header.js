import React from "react";
import "./header.css"

const Header = ()=>{
    return(
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
                    <li><i className="fa fa-camera" aria-hidden="true"></i></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;