import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Layout from "../components/layout";
import best from "../images/good.jpg"
import "../css/profile.css"

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            open:false
        }
    }
    dropDown = ()=>{
        let open = this.state.open
        const profiledDetails = document.querySelector('.profile-details')
        if(!open){
            profiledDetails.style.display = "block";
            open = true
            setTimeout(()=>{
                profiledDetails.style.opacity = "1";
                profiledDetails.style.transform = "translateY(0%)";
            },200)
            }
        else{
            open= false
            profiledDetails.style.transform = "translateY(-102%)";
            setTimeout(()=>{
                profiledDetails.style.display = "none";
                profiledDetails.style.opacity = "0";
            },200)
        }
        this.setState({open})
    }
    render(){
        return (
            <Layout>
                <div className="profile">
                    <div className="profile-display">
                        <div className="profile-image">
                            <img id="img" src={best} alt=""/>
                            <form action="">
                                <input type="file"  name="" id="profile"/>
                                <button id="image">Upload Image</button>		
                            </form>
                            <label htmlFor="profile"><i className="fa fa-camera" aria-hidden="true"></i></label>
                        </div>

                        <div className="name">
                            <h4>John Jerry Uwa</h4>
                        </div>
                        <div className="add-btn" onClick={this.dropDown}>
                            <div className="add">
                                <span></span>
                                <span>Add Your Personal details</span>
                            </div>
                            <div className="chatbox">
                                <i className="fa fa-commenting-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    

                            {/* <!-- dropdown section --> */}
                    <div className="profile-details">
                        <form action="">
                            <div className="profile-group">
                                <div className="profile-box">
                                    <div className="field-icon">
                                    <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Nationality</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="edit-icon">
                                    <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="profile-box">
                                    <div className="field-icon">
                                        
                                        <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">State</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="edit-icon">
                                        <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-group">
                                <div className="profile-box">
                                    <div className="field-icon">
                                        <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">City</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="edit-icon">
                                        <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div className="profile-box">
                                    <div className="field-icon">
                                        <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Address</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="edit-icon">
                                        
                                        <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="profile-group">
                                <div className="profile-box">
                                    <div className="field-icon">
                                
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Email</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="edit-icon">
                                

                                    </div>
                                </div>
                                <div className="profile-box">
                                    <div className="field-icon">
                            
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="edit-icon">
                                    
                                    </div>
                                </div>
                            </div>

                            <div className="profile-group">
                                <div className="profile-box">
                                    <div className="field-icon">
                                    
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Gender</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="edit-icon">
                                    
                                    </div>
                                </div>

                                <div className="profile-box">
                                    <div className="field-icon">
                                    
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Birthdate</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="edit-icon">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="profile-group">
                                    <div className="profile-box">
                                        <div className="field-icon">
                                            
                                        </div>
                                        <div className="inner-i  nput">
                                            <label htmlFor="">Institution</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                    <div className="profile-box">
                                        <div className="field-icon">
                                            
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Program</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-group">
                                    <div className="profile-box">
                                        <div className="field-icon">
                                            
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Relationship</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="edit-icon">
                        
                                        </div>
                                    </div>
                                    <div className="profile-box">
                                        <div className="field-icon">
                                            
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Hobbies</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="edit-icon">
                                        
                                        </div>
                                    </div> 
                                </div>

                                <div className="profile-group">
                                    <div className="profile-box">
                                        <div className="field-icon">
                                
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Religion</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                    <div className="profile-box">
                                        <div className="field-icon">
                                    
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Language</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="profile-group">
                                    <div className="profile-box">
                                        <div className="field-icon">
                                            
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Interested</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                    <div className="profile-box">
                                        <div className="field-icon">
                                    
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Nickname</label>
                                            <input type="text"/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                </div>


                                <div className="profile-post">
                                    <div className="textrea">
                                        <label htmlFor="">Write about yourself</label>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                    <div className="textarea">
                                        <button>Save</button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>

            </Layout>
        )
    }
}
export default withRouter(Profile)