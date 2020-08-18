import React, {Component} from "react"
import "../css/notification.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"




class Notification extends Component {
    render(){
        return(
            <Layout>
				<div className="container">
		            <img classN="image-box" src={good} alt=""/>
		            <div className="comment-name">
			          <h2>ubah vivian</h2>
			          <p>commented on your photo</p>
			          <span className="date">12th july. 2020</span>
			
		          </div>
		
	            </div>

	
            </Layout>

        )
    }
}
export default Notification;