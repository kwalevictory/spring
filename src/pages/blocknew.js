import React, { Component } from "react"
import "../css/blocknew.css"
import Layout from "../components/layout"
// import BlockUi from 'react-block-ui';



class Blocknew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blocking: false,
            
        }
    }
    toggleBlocking = (e) => {
        this.setState({[e.target.name]:this.state.blocking});
    }
    toggleBlocking = (e) =>{
        e.preventDefault();
    } 
    

    render(){
        return(
            <Layout>
                <div className="newblock-one">
                    <div className="block-new">
                        <h4>block lewis philip</h4>
                    </div>
                    <div className="blockss">
                        <p>lewis philip will no longer be able to:</p>
                    </div>
                    <div className="newblockss">
                        <ul>
                            <li>see things you post on your timeline</li>
                            <li>you can no longer come conversate with your friend</li>
                            <li> you can no longer tag your friend any more</li>
                            <li>you can no longer add you as a friend</li>
                        </ul>

                    </div>
                    <div className="block-two">
                        <button onClick={this.toggleBlocking}>block</button>
                        <button>cancel</button>

                    </div>

                </div>

            </Layout>
        )
    }
}
export default Blocknew;
