import React, { Component } from "react"
import "../css/friendrequest.css"
import Layout from "../components/layout"


class FriendRequest extends Component {
    render(){
        return(
            <Layout>
                <div class="fr">
		<p>friend request 4</p>
		<div class="name">
			<h2>john favour <span>1d</span></h2>
			
		</div>
		<div class="img">
			<img src="uwa.jpg" alt=""/>
			
		</div>
		<div class="img1">
			<img src="good.jpg" alt=""/>
			<h4>40 Mutual Firend</h4>
			
		</div>
		<div class="button">
			<button>Confirm</button>
			<button >Delete..</button>
			
		</div>

         <h6>people you know</h6>

		<div class="nav">
			<h3>philip happy</h3>

		</div>
		<div class="img">
			<img src="felix.jpg" alt=""/>
			
		</div>
		<div class="img1">
			<img src="firest.jpg" alt=""/>
			<h5>1 Mutual Friend</h5>
		</div>
		<div class="button1">
			<button>Add fri....</button>
			<button>Remove</button>
			
		</div>
		
	</div>

            </Layout>
        )
    }

}
export default FriendRequest;