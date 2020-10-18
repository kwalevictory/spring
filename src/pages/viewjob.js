import React, { Component } from "react"
import "../css/viewjob.css"
import Layout from "../components/layout"
import ProfileIcon from "../components/profileicon";




class Viewjob extends Component{
    render(){
        return(
            <Layout>
                <div className="viewjob">
                    <div className="post-job">
                        <ProfileIcon/>
                        <div className="views">
                            <h4>john godfrey</h4>
                            <time>9mins .</time>
                            <i>icon</i>

                        </div>

                    </div>

                </div>
                <div className="details-job">
                    <h2>Job Title</h2>
                    <p>Programming</p>
                    <h2>Job Location</h2>
                    <p>Delta State</p>
                    <h2>Job Application Email</h2>
                    <p>victoryokonye@gmail.com</p>
                    <h2>Job Description</h2>
                    <p>Am very good in frontend and backend.</p>
                    <h2>10/4/2020</h2>
                </div>
                <div className="details-footer details-wrap">
                    <p>
                        <span><i className="fa fa-thumbs-up"></i></span>
                        11
                    </p>
                    <ul>
                        <li>
                            <span><i className="fa fa-thumbs-up"></i>3</span>

                        </li>
                        <li>
                            <span>icon</span>
                            <span>icon</span>

                        </li>
                    </ul>

                </div>

            </Layout>
        )
    }
}
export default Viewjob;