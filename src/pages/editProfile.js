import React,{Component} from "react";
import "../css/editProfile.css"
import Layout from "../components/layout";
import good from "../images/good.jpg"
import { Link } from "react-router-dom";
import Context from "../components/context";
import {withRouter} from "react-router-dom"

class EditProfile extends Component{
    static contextType = Context;
    constructor(props){
        super(props);
        this.state = {
            profilePic:null,
            bannerPic:null
        }
    }
    componentDidMount(){
    }
    getImages = (event)=>{
        const profileUpload = this.context.profileUpload
        profileUpload(event,this, 'profilePic')
    }
    uploadBanner = (event)=>{
        const profileUpload = this.context.profileUpload
        profileUpload(event,this, 'bannerPic')
    }
    render(){
        if(this.context.state.user && this.context.state.profile)
        return(
            <Layout>
                <div className="profile-top">
                <label htmlFor="profileBanner">
                    <span className="uploadbtn"></span>
                </label>
                <div className="banner">
                    <img src={this.state.bannerPic?this.state.bannerPic:this.context.state.profile.bannerPic?this.context.state.profile.bannerPic:good} alt=""/>
                    <input type="file" id="profileBanner" onChange={this.uploadBanner} style={{display:'none'}} name="profileBanner" />
                    <div className="profile-image">
                        <input type="file" id="profilePics" onChange={this.getImages} style={{display:'none'}} name="profilePic" />
                        <img  style={{height:'100%', width:'100%',borderRadius:'50%'}} src={this.state.profilePic?this.state.profilePic:this.context.state.user.photoURL?this.context.state.user.photoURL:good} alt=""/>
                        <label htmlFor="profilePics"><span className="button"></span></label>
                    </div>
                </div> 
                <div className="edit-profile-details">
                    <h3>{this.context.state.userData.firstname + " " + this.context.state.userData.lastname}</h3>
                    <div className="edit-profile">
                        <span>Edit Your Profile</span>
                        <span>Chat icon</span>
                        <span>----</span>
                    </div>
                    <div className="eprofile">
                        <div className="edit-profile-left">
                            <ul>
                                <li><span>icon</span><span>{this.context.state.profile.nationality}</span></li>
                                <li><span>icon</span><span>{this.context.state.profile.city}</span></li>
                                <li><span>icon</span><span>{this.context.state.user.email}</span></li>
                                <li><span>icon</span><span>{this.context.state.profile.gender}</span></li>
                                <li><span>icon</span><span>Studied:{this.context.state.profile.institution}</span></li>
                                <li><span>icon</span><span>Relationship</span><span>{this.context.state.profile.relationship}</span></li>
                                <li><span>icon</span><span>Relegion:</span><span>{this.context.state.profile.religion}</span></li>
                                <li><span>icon</span><span>Interested In:</span><span>{this.context.state.profile.interested}</span></li>
                            </ul>
                        </div>
                        <div className="edit-profile-right">
                        <ul>
                            <li><span>{this.context.state.profile.state}</span></li>
                            <li><span>{this.context.state.profile.address}</span></li>
                            <li><span>{this.context.state.profile.phone}</span></li>
                            <li><span>{this.context.state.profile.birthdate}</span></li>
                            <li><span>{this.context.state.profile.program}</span></li>
                            <li><span>{this.context.state.profile.hobbies}</span></li>
                            <li><span>{this.context.state.profile.language}</span></li>
                            <li><span>{this.context.state.profile.nickname}</span></li>
                        </ul>
                        </div>
                    </div>
                    <p>{this.context.state.profile.about}</p>
                </div> 
            </div>

            {/* <!-- friends --> */}

            <div className="friends">
                <h4>Friends Photos</h4>
                <div className="friends-photos">
                    {
                        this.context.state.userData.friends.length>0&&
                            this.context.state.userData.friends.map((friend,i)=>(
                                <div className="friend">
                                <div className="friend-image">
                                    <img src={friend.photoURL !== null?friend.photoURL:good} alt=""/>
                                </div>
                                <h4>{`${friend.firstname} ${friend.lastname}`}</h4>
                            </div>
                            ))
                    }
                </div>
                <div className="friends-footer">
                    <p>{this.context.state.userData.friends.length} {this.context.state.userData.friends.length===1?'friend':'friends'}</p>
                    <Link to="/friends">See All friends</Link>
                </div>
            </div>
            <div className="album">
                <span>
                    <input type="checkbox" name="" id=""/>
                    <span>User photos</span>
                </span>
            </div>
            </Layout>
        )
        else
        {
            this.props.history.push('/profile')
            return null
        }
    }
}
export default withRouter(EditProfile);