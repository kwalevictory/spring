import React, {Component} from "react"
import "../css/friends.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"
import firebase from "../database/users"




class Friends extends Component {
	constructor(props){
		super(props);
		this.state = {
			online:true,
			offline:false,
		}
	}
	online = (e) =>{

		firebase.firestore().collection('friend').add(this.state)
		.then(snap=>{
			alert('')
		})
		.catch(error=>{
			alert(error)
		})

	}


    render(){
        return(
            <Layout>
				<div className="friends">
					<p>friends</p>
					<div className="friend">
							<img src={good} alt=""/>
							<span>uba vivian</span>
							<p className="online">online</p>

							
						</div>
						<div className="friend">
							<img src={good} alt=""/>
							<span>john philip</span>
							<p  className="online">offline</p>
						</div>
						<div className="friend">
							<img src={good} alt=""/>
							<span>john philip</span>
							<p className="online">online</p>
						</div>
						<div className="friend">
							<img src={good} alt=""/>
							<span>lucy gold</span>
							<p className="online">online</p>
							
						</div>
						<div className="friend">
							<img src={good} alt=""/>
							<span>joseph joy</span>
							<p className="online">offline</p>
							
						</div>
				</div>
            </Layout>
        )
    }


}
export default Friends;
