import React, { Component } from "react"
import "../css/friendrequest.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"
import Context from "../components/context"



class FriendRequest extends Component {
	
	static contextType = Context

	componentDidMount(){
		this.context.getUsers();
		this.context.getFriendsRequest()
	}

    render(){
		// console.log(this.context.state.userData)
        return(
            <Layout>
				<div className="continal-request">
					<div className="relationship">
						<h3>Friend Requests</h3>
						<h4>5</h4>

					</div>
					{
						this.context.state.requests.length>0&&
						this.context.state.requests.map((friend,i)=>{
							// const date = new Date(friend.createdAt.seconds*1000).getDate()
							if(!friend.accepted)
							return(
								<div key={i}>
									<div className="friendship">
										<div className="friendships">
											<p>{friend.firstname + " "+ friend.lastname}</p>
											<div className="number">
											{/* <p>{date}</p> */}

											</div>

										</div>

									</div>
									<div className="requestimage">
										<img src={good} alt=""/>

									</div>
									<div className="completed">
										<div className="completedimage">
											<img src={good} alt=""/>
											<div className="mutual">
												<p>10 mutual friends</p>

											</div>

										</div>

									</div>
									
									
			
									<div className="confirm">
										<button onClick={()=>this.context.confirmRequest(friend)}>Confirm</button>
									</div>
									<div className="delete">
										<button onClick={()=>this.context.deleteRequest(friend)}>Delete</button>

									</div>
			
								</div>
								
							
							
							)
							else
							return ''
						})
					}


				</div>
				<div className="addfrinend">
					{
						this.context.state.users.length>0&&
						<>
						<div className="peoples">
							<h4>Add People You Many Known</h4>
						</div>
						{
							this.context.state.userData&&
							this.context.state.users.map((user, i)=>{
								const confirmedFriends = this.context.state.userData.friends.filter(item=>item.status===true && item.id === user.id)
								const friend = this.context.state.userData.friends.filter(item=>item.id === user.id)
								const deleted = this.context.state.userData.deleted.filter(item=>item === user.id);
								
								if(!deleted.length >0 && confirmedFriends.length <1)
								return(
									<div className="add-suggested-friend" key={i}>
										<div className="addname">
											<p>{user.firstname + " "+ user.lastname}</p>
	
										</div>
										<div className="addimage">
											<img src={user.photoURL !== null?user.photoURL:good} alt=""/>
	
										</div>
										<div className="addmutual">
											<div className="mutualimage">
												<img src={good} alt=""/>
												<div className="mutualss">
													<p>24 mutual friends</p>
	
												</div>
	
											</div>
	
										</div>
										<div className="action-btns">
											<div className="addconfirm">
												{
													!friend.length>0?
													<button onClick={()=>{this.context.sendFriendRequest(user)}}>Add frie...</button>
													:
													<button onClick={()=>{this.context.cancelFriendRequest(user)}}>Cancel Request</button>
												}

								
											</div>
												{
													!friend.length>0&&
													<div className="remove">
														<button onClick={()=>this.context.removeUser(user)}>Remove</button>
													</div>
												}
										</div>
									</div>
								)
								else
								 return ''
							})
						}
						</>
					}


				</div>
							

            </Layout>
        )
    }

}
export default FriendRequest;