import React, {Component} from "react"
import "../css/notification.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"
import {withRouter} from "react-router-dom"
import Context from "../components/context";
import firebase from "../database/users"

class Notification extends Component {
    static contextType=Context

    constructor(props) {
        super(props);
        this.state ={
            friendId:"",
            postId:"",
            comment_id:"",
            notification_item_id:""
            
        
        }
    }
    

    render(){
        return(
            <Layout>
                <div className="notification-alert">
                    <img src={good} alt=""/>
                    <div className="notify">
                        <h5>ubah vivian</h5>
                        <span>mentioned</span>
                        <p>you in a comment</p>
                        <div className="notify-date">
                            <p>Dec 4th - 9:44pm</p>

                        </div>

                    </div>
                    

                </div>
                <div className="notification-alert">
                    <img src={good} alt=""/>
                    <div className="notify">
                        <h5>ubah vivian</h5>
                        <span>likes your</span>
                        <p>comment:.Very nice</p>
                        <div className="notify-date">
                            <p>Aug 7th - 6:21pm</p>

                        </div>


                    </div>
                </div>
                <div className="notification-alert">
                    <img src={good} alt=""/>
                    <div className="notify">
                        <h5>ubah vivian</h5>
                        <span>also</span>
                        <p>commented on her photo</p>
                        <div className="notify-date">
                            <p>Jul 13th - 9:05pm</p>
                        </div>
                    </div>
                </div>


            </Layout>

        )
    }
}
export default withRouter(Notification);

