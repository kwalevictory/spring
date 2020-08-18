import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import "../css/login.css"
//import {users} from "../database/users"

class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            name:'',
            email:''
        }
    }
     changeHandler = (e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     showLogin = ()=>{
        document.getElementById('register').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

     showRegister = ()=>{
        document.getElementById('register').style.display = 'block';
        document.getElementById('login').style.display = 'none'
    }
     onLogin = (event)=>{
         event.preventDefault();
        //  const {username,password} = this.state
        // if(username === users[0].username && password === users[0].password)
        //  this.props.history.push('/profile')
        // else
        // alert('Invalid username and password')
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
                        <input type="text" name="username" onChange={this.changeHandler} placeholder="Username"/>
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
                <form id="register">
                    <div className="form-group">
                        <input type="text" name="" placeholder="Firstname"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="" placeholder="Lastname"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="" placeholder="Password"/>
                    </div>

                    <div className="btn-register">
                        <button>Signup</button>
                        <a href="https://wwww.google.com">Reset</a>
                    </div>
                </form>

            </div>
        </div>
)
 }
}
export default withRouter(Login);