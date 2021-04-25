import React, { Component } from "react"
import "../css/friendrequest.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"
import Context from "../components/context"



class FriendRequest extends Component {
	
	static contextType = Context
	state ={
		loading:false
	}
	componentDidMount(){
		
	}

	cancelRequest=(userId)=>{
		this.context.updateFriends(0, userId)
	}
	dismissFriend=(userId)=>{
		this.context.updateUsers(-1, userId)
	}
	confirmFriend=(userId)=>{
		this.context.updateFriends(2, userId)
	}

	addFriend = (userId)=>{
		this.setState({loading:true})
		this.context.updateUsers(1, userId)
		.then(()=>{
			this.setState({loading:false})
		})
		.catch(e=>{
			this.setState({loading:false})
		})
	}
    render(){
        return(
            <Layout>
				<div className="continal-request">
					<div className="relationship">
						<h3>Friend Requests</h3>
						<h4>5</h4>

					</div>
					{
						this.context.state.users.length>0&&
						this.context.state.users.map((friend,i)=>{
							// const date = new Date(friend.createdAt.seconds*1000).getDate()

							if((friend.status === 1 && (this.context.state.user.id !== friend.action_user && (friend.user_id ===this.context.state.user.id || this.context.state.user.id === friend.friend_id))) || (friend.status === 2 && friend.action_user ===this.context.state.user.id))
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

									
									
									{
										friend.status === 2?
										<p>You are now friends</p>
										:
										<>
										<div className="confirm">
										<button onClick={()=>this.confirmFriend(friend.id)}>Confirm</button>
											</div>
											<div className="delete">
												<button onClick={()=>this.cancelRequest(friend.id)}>Delete</button>

											</div>
										</>
									}

			
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
							this.context.state.users.map((user, i)=>{
								// const confirmedFriends = this.context.state.userData.friends.filter(item=>item.status===true && item.id === user.id)
								// const friend = this.context.state.userData.friends.filter(item=>item.id === user.id)
								// const deleted = this.context.state.userData.deleted.filter(item=>item === user.id);
				
								if(user.status >= 0 && user.status !==2 &&  (user.action_user === this.context.state.user.id || user.action_user === null))
								return(
									<div className="add-suggested-friend" key={i}>
										<div className="addname">
											<p>{user.firstname + " "+ user.lastname}</p>
	
										</div>
										<div className="addimage">
											<img src={user.image !== null?user.image:good} alt=""/>
	
										</div>
										{/*<div className="addmutual">
											<div className="mutualimage">
												<img src={good} alt=""/>
												<div className="mutualss">
													<p>24 mutual friends</p>
	
												</div>
	
											</div>
											
									   <div className="completed">
										<div className="completedimage">
											<img src={good} alt=""/>
											<div className="mutual">
												<p>10 mutual friends</p>

											</div>

										</div>

									</div>
	
								</div>*/}
										<div className="action-btns">
											<div className="addconfirm">
												{
													!user.status?
													 <button onClick={()=>{this.addFriend(user.id)}}>{'Add ...'}</button>
													 :
													 <button className onClick={()=>{this.cancelRequest(user.id)}}>Cancel Request</button>
												}

								
											</div>
												{
													!user.status&&
													<div className="remove">
														<button onClick={()=>this.dismissFriend(user.id)}>Dismiss</button>
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