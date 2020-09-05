import React, { Component } from "react"
import "../css/suspended.css"
import Layout from "../components/layout"

class Suspended extends Component {
    render(){
        return(
            <Layout>
                <div className="suspended-users">
                    <div className="user-suspended">
                        <h1>Suspended lewis philip</h1>
                    </div>
                    <div className="suspend">
                        <p>lewis philip will no longer be able to:</p>
                    </div>
                    <div className="suspended-items">
                        <ul>
                            <li>see things you post on your timeline</li>
                            <li>you can no longer come conversate with your friend</li>
                            <li> you can no longer tag your friend any more</li>
                          
                        </ul>

                    </div>
                    <div className="suspended-details">
                        <p>if you're friends, suspended lewis will also be your friend.</p>

                    </div>
                    <div className="total-suspend">
                        <button>Suspended</button>
                        <button>cancel</button>

                    </div>

                </div>

            </Layout>
        )
    }
}
export default Suspended;