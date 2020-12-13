import React, {Component} from "react"
import "../css/chat.css"
import Layout from "../components/layout"
import {Link} from "react-router-dom"
import good from "../images/good.jpg"
import Context from "../components/context"

class Chat extends Component {
	static contextType = Context

	componentDidMount(){
		this.context.getHistoryChat()
	}
    render(){
        return(
            <Layout>
                
	<div className="previewchat">
		<div className="previews-inners">
			<div className="carousels">
				{
					this.context.state.userData&&
					this.context.state.userData.friends&&
					this.context.state.userData.friends.map((friend, i)=>{
						return(
							<Link to={'chathandle/'+friend.id} key={i}>
							<div className="items">
								<img src={friend.photoURL?friend.photoURL:good} alt={friend.firstname}/>
								<h4>{friend.firstname}</h4>
							</div>
						</Link>
						)
					})
				}

				{/* <div className="items">
					<img src={good} alt=""/>
					<h4>john</h4>
				</div>
				<div className="items">
					<img src={good} alt=""/>
					<h4>collins</h4>
				</div>
				<div className="items">
					<img src={good} alt=""/>
					<h4>james</h4>
				</div>
				<div className="items">
					<img src={good} alt=""/>
					<h4>chisom</h4>
				</div>
				<div className="items">
					<img src={good} alt=""/>
					<h4>charity</h4>
				</div>
				<div className="items">
					<img src={good} alt=""/>
					<h4>vivian</h4>
				</div>  */}
			</div>
		</div>
	</div>
	<div className="messages-history">
		<h2>Messages History</h2>

	</div>
	<div className="messagess-history">
		<div className="images-history">
			<img src={good} alt=""/>
			<h2>Philip Larry</h2>
		

		</div>

	</div>
	<div className="text-history">
		<p>how are you doing..</p>

	</div>
	<div className="online-time">
		<p>11:02 AM</p>

	</div>

	
	
	
            </Layout>
        )
    }
}
export default Chat;
