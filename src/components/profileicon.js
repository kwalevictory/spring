import React from "react";
import "./profileicon.css"
import good from "../images/good.jpg"
const ProfileIcon = ()=>{
    return(
        <div className="profile-icon">
            <img src={good} alt=""/>
            <span className="isonline"></span>
        </div>
    )
}
export default ProfileIcon;