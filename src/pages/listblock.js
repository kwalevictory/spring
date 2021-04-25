import React, {Component} from "react"
import Layout from "../components/layout"
import "../css/listblock.css"
import good from "../images/good.jpg"





class Listblock extends Component{
    render(){
        return(
            <Layout>
                <div className="list-block">
                    <p>Blocking</p>
                </div>
                <div className="drawline-lists">

                </div>
                <div className="list-me">
                    <h2>Block People</h2>

                </div>
                <div className="block-itews">
                    <p>Once you block someone, that person can no longer see things you post on your timeline, tag you, start a conversation with you, or add you as a friend.</p>

                </div>
                <div className="blokedlist">

                </div>
                <div className="blockeded">
                    <h4>list of blocked</h4>

                </div>
                <div className="lock-list">

                </div>
                <div className="action-block">
                    <div className="action-itews">
                        <img src={good} alt=""/>
                        <p>vivian james</p>
                        <button>unblock</button>
                    

                    </div>
                    

                </div>
                

            </Layout>
        )
    }
}
export default Listblock;








