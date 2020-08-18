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
                <div className="preview-message">
                    <p>preview messages</p>

            </div>
            <div className="chat">
                <div className="date-center">
                    <p>fri 09:23</p>
                </div>
                <div className="owner-chat">
                    <p>which one bro </p>

                </div>
                <div className="reciever-chat">
                    <img className="chat-images" src={good} alt=""/>
                    <p>good bro</p>

                </div>

            </div>
            
            </Layout>
        )
    }
}
export default Chat;
