import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Layout from "../components/layout";
import best from "../images/good.jpg"
import "../css/profile.css"
import Context from "../components/context";

class Profile extends Component{
    static contextType = Context
    constructor(props){
        super(props)
        this.state = {
            open:false,
            profilePic:null,
            nationality:'',
            state:'',
            city:'',
            address:'',
            phone:'',
            gender:'',
            birthdate:'',
            institution:'',
            program:'',
            religion:'',
            language:'',
            interested:'',
            nickname:'',
            about:''

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
    changeHandler =(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    getImages = (event)=>{
        const profileUpload = this.context.profileUpload
        profileUpload(event,this, 'profilePic')
    }
    onSubmit = (event)=>{
        event.preventDefault();
        if(this.state.nationality === '' || this.state.gender === '' || this.state.birthdate ==='' || this.state.about === ''){
            alert('Nationality, date of birth, gender and about must not be empty');
            return
        }
        // firestore.collection('profile').doc(this.context.state.user.uid).set({
        //     nationality:this.state.nationality,
        //     state:this.state.state,
        //     city:this.state.city,
        //     address:this.state.address,
        //     phone:this.state.phone,
        //     gender:this.state.gender,
        //     birthdate:this.state.nationality,
        //     institution:this.state.institution,
        //     program:this.state.program,
        //     religion:this.state.religion,
        //     language:this.state.language,
        //     interested:this.state.interested,
        //     nickname:this.state.nickname,
        //     about:this.state.about
        // })
        // .then(()=>{
        //     this.props.history.push('/post')
        // })
    }
    render(){
        console.log(this.context.state.profile)
        // firestore.collection('profile').doc(this.context.state.user.uid).get()
        // .then(res=>{
        //     if(res.data())
        //     {
        //         this.props.history.push('/edit-profile')
        //         return null
        //     }
        // })
        return (
            <Layout>
                <div className="profile">
                    <div className="profile-display">
                        <div className="profile-image">
                            <img id="img" src={this.state.profilePic?this.state.profilePic:this.context?this.context.state?this.context.state.user?this.context.state.user.photoURL?this.context.state.user.photoURL:best:best:best:best} alt=""/>
                            <form action="">
                                <input type="file" onChange={this.getImages}  name="profilePic" id="profile"/>
                            </form>
                            <label htmlFor="profile"><i className="fa fa-camera" aria-hidden="true"></i></label>
                        </div>

                        <div className="name">
                        <h4>{this.context?this.context.state? this.context.state.userData? this.context.state.userData.firstname + " "+ this.context.state.userData.lastname:'':'':''}</h4>
                        </div>
                        <div className="add-btn" onClick={this.dropDown}>
                            <div className="add">
                                <span></span>
                                <span>Add Your Personal details</span>
                            </div>
                            <div className="chatbox">
                                
                            </div>
                        </div>
                    </div>
                    

                            {/* <!-- dropdown section --> */}
                    <div className="profile-details">
                        <form onSubmit={(event)=>this.onSubmit(event)}>
                            <div className="profile-group">
                                <div className="profile-box">
                                    <div className="field-icon">
                                    <i className="fa fa-flickr" aria-hidden="true"></i>
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Nationality</label>
                                        <input type="text" onChange={this.changeHandler} name="nationality"/>
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
                                        <input type="text" onChange={this.changeHandler} name="state"/>
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
                                        <input type="text" onChange={this.changeHandler} name="city"/>
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
                                        <input type="text" onChange={this.changeHandler} name="address"/>
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
                                        <input type="text" onChange={this.changeHandler} disabled value={this.context?this.context.state?this.context.state.user?this.context.state.user.email:'':'':''}/>
                                    </div>
                                    <div className="edit-icon">
                                

                                    </div>
                                </div>
                                <div className="profile-box">
                                    <div className="field-icon">
                            
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="text" onChange={this.changeHandler} name="phone"/>
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
                                        <input type="text" onChange={this.changeHandler} name="gender"/>
                                    </div>
                                    <div className="edit-icon">
                                    
                                    </div>
                                </div>

                                <div className="profile-box">
                                    <div className="field-icon">
                                    
                                    </div>
                                    <div className="inner-input">
                                        <label htmlFor="">Birthdate</label>
                                        <input name="birthdate" type="text" onChange={this.changeHandler}/>
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
                                            <input name="institution" type="text" onChange={this.changeHandler}/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                    <div className="profile-box">
                                        <div className="field-icon">
                                            
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Program</label>
                                            <input name="program" type="text" onChange={this.changeHandler}/>
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
                                            <input name="relationship" type="text" onChange={this.changeHandler}/>
                                        </div>
                                        <div className="edit-icon">
                        
                                        </div>
                                    </div>
                                    <div className="profile-box">
                                        <div className="field-icon">
                                            
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Hobbies</label>
                                            <input name="hobbies" type="text" onChange={this.changeHandler}/>
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
                                            <input name="religion" type="text" onChange={this.changeHandler}/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                    <div className="profile-box">
                                        <div className="field-icon">
                                    
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Language</label>
                                            <input name="language" type="text" onChange={this.changeHandler}/>
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
                                            <input name="interested" type="text" onChange={this.changeHandler}/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                    <div className="profile-box">
                                        <div className="field-icon">
                                    
                                        </div>
                                        <div className="inner-input">
                                            <label htmlFor="">Nickname</label>
                                            <input name="nickname" type="text" onChange={this.changeHandler}/>
                                        </div>
                                        <div className="edit-icon">
                                            
                                        </div>
                                    </div>
                                </div>


                                <div className="profile-post">
                                    <div className="textrea">
                                        <label htmlFor="">Write about yourself</label>
                                        <textarea name="about" id="" onChange={this.changeHandler} cols="30" rows="10"></textarea>
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