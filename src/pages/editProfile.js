import React,{Component} from "react";
import "../css/editProfile.css"
import Layout from "../components/layout";
import good from "../images/good.jpg"
import { Link } from "react-router-dom";

class EditProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
    }
    render(){
        return(
            <Layout>
                <div className="profile-top">
                <div className="banner">
                    <img src={good} alt=""/>
                    <div className="profile-image">
                        <span className="button"></span>
                    </div>
                </div> 
                <div className="edit-profile-details">
                    <h3>John Philip</h3>
                    <div className="edit-profile">
                        <span>Edit Your Profile</span>
                        <span>Chat icon</span>
                        <span>----</span>
                    </div>
                    <div className="eprofile">
                        <div className="edit-profile-left">
                            <ul>
                                <li><span>icon</span><span>Nigeria</span></li>
                                <li><span>icon</span><span>Asaba</span></li>
                                <li><span>icon</span><span>victoryokonye@gmail.com</span></li>
                                <li><span>icon</span><span>Male</span></li>
                                <li><span>icon</span><span>Studied:National Open University of Nigeria</span></li>
                                <li><span>icon</span><span>Relationship</span><span>Married</span></li>
                                <li><span>icon</span><span>Relegion:</span><span>Christianity</span></li>
                                <li><span>icon</span><span>Interested In:</span><span>Male</span></li>
                            </ul>
                        </div>
                        {/* <div className="edit-profile-right">
                        <ul>
                            <li><span>Delta</span></li>
                            <li><span>bonnac road Delta State</span></li>
                            <li><span>09064624754</span></li>
                            <li><span>1999/02/02</span></li>
                            <li><span>BSc Computer Sc</span></li>
                            <li><span>Sport</span></li>
                            <li><span>English</span></li>
                            <li><span>besty</span></li>
                        </ul>
                        </div> */}
                    </div>
                    <p>I Love been honest</p>
                </div> 
            </div>

            {/* <!-- friends --> */}

            <div className="friends">
                <h4>Friends Photos</h4>
                <div className="friends-photos">
                    <div className="friend">
                        <div className="friend-image">
                            <img src={good} alt=""/>
                        </div>
                        <h4>Chi Love</h4>
                    </div>
                    <div className="friend">
                        <div className="friend-image">
                            <img src={good} alt=""/>
                        </div>
                        <h4>Queen Joel</h4>
                    </div>
                    <div className="friend">
                        <div className="friend-image">
                            <img src={good} alt=""/>
                        </div>
                        <h4>Obi Love</h4>
                    </div>
                    <div className="friend">
                        <div className="friend-image">
                            <img src={good} alt=""/>
                        </div>
                        <h4>John Philip</h4>
                    </div>
                    <div className="friend">
                        <div className="friend-image">
                            <img src={good} alt=""/>
                        </div>
                        <h4>Osas Lucky</h4>
                    </div>
                    <div className="friend">
                        <div className="friend-image">
                            <img src={good} alt=""/>
                        </div>
                        <h4>Peter Okon</h4>
                    </div>
                    <div className="friend">
                        <div className="friend-image">
                            <img src={good} alt=""/>
                        </div>
                        <h4>Monday best</h4>
                    </div>
                    <div className="friend">
                        <div className="friend-image">
                            <img src={good} alt=""/>
                        </div>
                        <h4>James Ossia</h4>
                    </div>
                </div>
                <div className="friends-footer">
                    <p>100 friends</p>
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
    }
}
export default EditProfile;