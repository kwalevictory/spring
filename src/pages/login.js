import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import "../css/login.css"
import firebase from "../database/users"
//import {users} from "../database/users"

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            firstname:'',
            lastname:'',
            email:''
        }
    }
     changeHandler = (e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     showLogin = ()=>{
        document.getElementById('register').style.display = 'none';
        document.getElementById('resetpassword').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

     showRegister = ()=>{
        document.getElementById('register').style.display = 'block';
        document.getElementById('login').style.display = 'none'
    }
     onLogin = (event)=>{
         event.preventDefault();
         firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
         .then(res=>{ 
            this.props.history.push('/post')


         })
         .catch(error=>{
             console.log(error)
         })
    }
    signup= (e) =>{
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(rep=>{
            this.props.history.push('/profile')
        })
        .catch(error=>{
            console.log(error)
        })
    }
    forgetPassword=(e) =>{
        firebase.auth().sendPasswordResetEmail(this.state.email)
        .then(reset=>{
            console.log(reset)
        })
        .catch(error=>{
            console.log(error)
        })
    }
 render(){
    return (
        <div id="a">
            <div className="form">
                <ul className="btn">
                    <li>
                        <span onClick={this.showLogin} aria-hidden="true">Login</span>
                    </li>
                    <li>
                        <span onClick={this.showRegister} aria-hidden="true">Register</span>
                    </li>
                </ul>

                <div className="sicon">
                    <ul className="social">
                        <li><i className="fa fa-briefcase" aria-hidden="true"></i></li>
                        <li><i className="fa fa-newspaper-o" aria-hidden="true"></i></li>
                        <li><i className="fa fa-comment" aria-hidden="true"></i></li>
                    </ul>
                </div>
                <h3>Spring</h3>
                <form id="login"  onSubmit={event=>this.onLogin(event)}>
                    <div className="form-group">
                        <input type="text" name="email" onChange={this.changeHandler} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" onChange={this.changeHandler} placeholder="Password"/>
                    </div>
                    <div className="reset">
                        <a href="https://wwww.google.com">Forget Password</a>
                        <a href="https://wwww.google.com">Reset</a>
                    </div>
                    <div className="btn-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <form onSubmit={this.signup} id="register">
                    <div className="form-group">
                        <input type="text" onChange={this.changeHandler} name="firstname" placeholder="Firstname"/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.changeHandler} name="lastname" placeholder="Lastname"/>
                    </div>
                    <div className="form-group">
                        <input type="text" onChange={this.changeHandler} name="email" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text"  onChange={this.changeHandler} name="username" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" onChange={this.changeHandler} name="password" placeholder="Password"/>
                    </div>

                    <div className="btn-register">
                        <button>Signup</button>
                        <a href="https://wwww.google.com">Reset</a>
                    </div>
                </form>
                <form id="resetpassword">
                    <div className="form-group">
                        <input type="text" onChange={this.changeHandler} name="email" placeholder="Email"/>
                    </div>
                    <div className="btn-group">
                        <button type="submit">Reset Password</button>
                    </div>
                </form>
            </div>
        </div>
)
 }
}
export default withRouter(Login);