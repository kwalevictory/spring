import React, {Component} from "react"
import "../css/friends.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"





class Friends extends Component {
    render(){
        return(
            <Layout>
				<div className="friends">
					<p>friends</p>
					<div className="friend">
							<img src={good} alt=""/>
							<span>uba vivian</span>

							
						</div>
						<div className="friend">
							<img src={good} alt=""/>
							<span>john philip</span>
						</div>
						<div className="friend">
							<img src={good} alt=""/>
							<span>john philip</span>
						</div>
						<div className="friend">
							<img src={good} alt=""/>
							<span>lucy gold</span>
							
						</div>
						<div className="friend">
							<img src={good} alt=""/>
							<span>joseph joy</span>
							
						</div>
				</div>
            </Layout>
        )
    }


}
export default Friends;
