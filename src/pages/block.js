import React, { Component } from "react"
import "../css/block.css"
import Layout from "../components/layout"

class Block extends Component{
    render(){
        return(
            <Layout>
                <div className="block-user">
                    <div className="block-line">
                        <p>Block, Suspended User Profil</p>
                    </div>
                    <div className="block-profil">
                        <button>Totally Block</button>
                    </div>
                    <div className="suspended-user">
                        <button>Suspended For 10 Days</button>

                    </div>
                    <div className="complain-report">
                        <button>complain or report user</button>

                    </div>
    
                

                </div>

            </Layout>
        )

    }
}
export default Block;