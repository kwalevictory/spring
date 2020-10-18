import React, {Component} from "react"
import "../css/chat.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"

class Chat extends Component {
    render(){
        return(
            <Layout>
                
	<div className="previewchat">
		<div className="previews-inners">
			<div className="carousels">
				<div className="items">
					<img src={good} alt=""/>
					<h4>philip</h4>
				</div>
				<div className="items">
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
				</div> 
			</div>
		</div>
	</div>
	<div className="chat-history">
		<div className="active-user">
			<img src={good} alt=""/>
			<p>john philip</p>
			<h4>online</h4>

		</div>	
	</div>
	<div className="history-chat">
		<div className="previewss">
			<button>preview messages</button>

		</div>
		<div className="chat-time">
			<time>sun 22:21</time>

		</div>
		<div className="send-messages">
			<p>good evening dear .</p>

		</div>
		<div className="recieveimage">
			<img src={good} alt=""/>
			<div className="recieve-message">
				<p>the same to your dear</p>

			</div>

		</div>
		<div className="draw-line">
			<div className="box-mess">
			    <div className="texty">
				<textarea placeholder="type your message"/>
				<button>send</button>
				</div>

			</div>

		</div>

	</div>
	

            
            
  
            </Layout>
        )
    }
}
export default Chat;
