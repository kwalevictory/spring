import React, {Component} from "react"
import "../css/chat.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"

class Chat extends Component {
    render(){
        return(
            <Layout>
                <div className="preview-chat">
                    <div  className="single-preview">
                        <img className="preview-images" src={good} alt=""/>
                        <div className="user"/>
                        <p>john</p>

                    </div>
                    <div className="single-preview">
                        <img className="preview-images" src={good} alt=""/>
                        <div className="user"/>
                        <p>james</p>
                    </div>
                    <div className="single-preview">
                        <img className="preview-images" src={good} alt=""/>
                        <div className="user"/>
                        <p>john</p>
                    </div>
                    <div className="single-preview">
                        <img className="preview-images" src={good} alt=""/>
                        <div className="user"/>
                        <p>lewis</p>
                    </div>
                    <div className="single- preview">
                        <img className="preview-images" src={good} alt=""/>
                        <div className="user"/>
                        <p>daniel</p>
                    </div>
                    <div className="single-preview">
                        <img className="preview-images" src={good} alt=""/>
                        <div className="user"/>
                        <p>collins</p>
                    </div>
                </div>
                <div className="online">
                    <li>icon</li>
                    <img className="online-image" src={good} alt=""/>
                    <span>lewis philip</span>
                    <p>online</p>
                </div>
                <div className="preview-messages">
                        <button>preview messages</button>
                    <div className="duration-time">
                           <time>mon 09:12</time>
                        </div>
                       <div className="chat-message">
                           <img src={good} alt=""/>
                        <div className="send-message">
                           <p>how are you doing dear</p>
                        </div>
                        
                       </div>
                       <div className="recieve-message">
                           <p>am fine dear and you too</p>

                       </div>
                    </div>
                     <div className="chat-messagess">
                         <img src={good} alt=""/>
                        <div className="sends-message">
                         <p>longest times</p>
                        </div>
                     </div>
                     <div className="personal-messages">
                         <p>na so bro were are you staying now</p>
                     </div>
                     <div className="time-duration">
                         <time className="times">may 11 11:11</time>

                     </div>
                     <div className="previous-messages">
                         <p>previous messages</p>
                     </div>
                     <div className="list-messages">
                         <img src={good} alt=""/>
                        <div className="lists-user">
                            <h1>ubah vivian</h1>
                            <p>how are you doing to night</p>


                        </div>

                     </div>
                     
                    
                         
            </Layout>
        )
    }
}
export default Chat;
