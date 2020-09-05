import React, {Component} from "react"
import "../css/notification.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"

class Notification extends Component {





    
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
                            <p>2 hours ago</p>

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
                            <p>aug 26, 2020, 01:12 pm</p>

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
                            <p>2 daya ago</p>
                        </div>
                    </div>
                </div>



















            </Layout>

        )
    }
}
export default Notification;