import React, {Component} from "react"
import "../css/friends.css"
import Layout from "../components/layout"




class Friends extends Component {
    render(){
        return(
            <Layout>
				<div className="friends">
					<p>friends</p>
					<div className="friend">
							<img src="firest.jpg" alt=""/>
							<span>uba vivian</span>

							
						</div>
						<div className="friend">
							<img src="felix.jpg" alt=""/>
							<span>john philip</span>
						</div>
						<div className="friend">
							<img src="felix.jpg" alt=""/>
							<span>john philip</span>
						</div>
						<div className="friend">
							<img src="bud.jpg" alt=""/>
							<span>lucy gold</span>
							
						</div>
						<div className="friend">
							<img src="good.jpg" alt=""/>
							<span>joseph joy</span>
							
						</div>
				</div>
            </Layout>
        )
    }


}
export default Friends;
