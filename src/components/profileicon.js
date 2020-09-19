import React, {useContext} from "react";
import "./profileicon.css"
import good from "../images/good.jpg"
import Context from "./context";

const ProfileIcon = ({user})=>{
    const {state} = useContext(Context)
    return(
        <div className="profile-icon">
            <img src={user?user.photo?user.photo:good:state.user?(state.user.photoURL?state.user.photoURL:good):good} alt=""/>
            <span className="isonline"></span>
        </div>
    )
}
export default ProfileIcon;