import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import "../css/login.css"
import firebase from "../database/users"
import Context from "../components/context";
import Splash from "./splash";
//import {users} from "../database/users"

class Login extends Component{
    static contextType = Context
    constructor(props){
        super(props);
        this.state ={
            password:'',
            firstname:'',
            lastname:'',
            email:'',
            loading:false,
            message:''
        }
    }
     changeHandler = (e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     componentDidMount(){
        document.getElementById('resetpassword').style.display = 'none';
     }
     showLogin = ()=>{
        document.getElementById('register').style.display = 'none';
        document.getElementById('resetpassword').style.display = 'none';
        document.getElementById('login').style.display = 'block';
    }

    resePassword = (e)=>{
        e.preventDefault()
        document.getElementById('register').style.display = 'none';
        document.getElementById('resetpassword').style.display = 'block';
        document.getElementById('login').style.display = 'none';   
    }
     showRegister = ()=>{
        document.getElementById('register').style.display = 'block';
        document.getElementById('login').style.display = 'none'
        document.getElementById('resetpassword').style.display = 'none';
    }
     onLogin = (event)=>{
         event.preventDefault();
         this.setState({loading:true, message:''})
         if(this.state.email === '' || this.state.password === ''){
            this.setState({loading:false, message:'Email or Password cannot be blank'})
            return
         }
        const login = this.context.login
           login(this.state.email, this.state.password)
           .then(res=>{
               if(res === 419 || res === 404)
               {
                this.setState({loading:false, message:'Invalid username or password'})
               }
           })
    }
    signup= async(e) =>{
        e.preventDefault();
        const register = this.context.register
         register(this.state.email,this.state.password,this.state.firstname,this.state.lastname,this.props)

        // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .then(rep=>{
        //     this.props.history.push('/profile')
        // })
        // .catch(error=>{
        //     console.log(error)
        // })
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
     if(this.state.loading)
     return <Splash/>
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

                
    
                <h3>Spring</h3>
                {
                    this.state.message !== ''&&
                    <p className="show-message">{this.state.message}</p>
                }
                <form id="login"  onSubmit={event=>this.onLogin(event)}>
                    <div className="form-group">
                        <input type="text" name="email" onChange={this.changeHandler} placeholder="Email or Phone"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" onChange={this.changeHandler} placeholder="Password"/>
                    </div>
                    <div className="reset">
                        <a href="#" onClick={this.resePassword}>Forget Password</a>
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
                        <input type="text" onChange={this.changeHandler} name="email" placeholder="Email or Phone"/>
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