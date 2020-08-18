import React, { Component } from "react"
import "../css/friendrequest.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"



class FriendRequest extends Component {
    render(){
        return(
            <Layout>
                <div className="fr">
		<p>friend request 4</p>
		<div className="name">
			<h2>john favour <span>1d</span></h2>
			
		</div>
		<div className="img">
			<img src={good} alt=""/>
			
		</div>
		<div className="img1">
			<img src={good} alt=""/>
			<h4>40 Mutual Firend</h4>
			
		</div>
		<div className="button">
			<button>Confirm</button>
			<button >Delete..</button>
			
		</div>

         <h6>people you know</h6>

		<div className="nav">
			<h3>philip happy</h3>

		</div>
		<div className="img">
			<img src={good} alt=""/>
			
		</div>
		<div className="img1">
			<img src={good} alt=""/>
			<h5>1 Mutual Friend</h5>
		</div>
		<div className="button1">
			<button>Add fri....</button>
			<button>Remove</button>
			
		</div>
		
	</div>

            </Layout>
        )
    }

}
export default FriendRequest;