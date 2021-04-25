import React, { Component } from "react"
import "../css/watch.css"
import Layout from "../components/layout"
import ProfileIcon from "../components/profileicon";



class Watch extends Component {
    
    render(){
        return(
            <Layout>
                <div className="watch-video">
                    <div className="watches-video">
                        <ProfileIcon/>
                        <div className="watch">
                            <h4>sahara reporters</h4>
                            <time>24m .</time>
                            <i>icon</i>
                        </div>
                    </div>
                </div>
                <div className="watches">
                    <div className="watch-video">
                        <video className="video" src="besty.mp4"></video>
                        <div className="controls">
                            <div className="bar">
                                <div className="orange"></div>
                            </div>
                            <div className="buttons">
                                <button id="play"><i class="fa fa-play" aria-hidden="true"></i>
                                 </button>
                           </div>
                        </div>

                    </div>

                </div>
                

            </Layout>
        )
    }
}
export default Watch;