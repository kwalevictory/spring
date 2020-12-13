import React, { Component } from "react"
import "../css/viewjob.css"
import Layout from "../components/layout"
import ProfileIcon from "../components/profileicon";
import {Link} from "react-router-dom"
import Context from "../components/context";




class Viewjob extends Component{
    static contextType=Context
    componentDidMount(){
        this.context.jobPlacement()

    }

    render(){
        const jobs=this.context.state.jobs
        return(
            <Layout>
                {
                    jobs.map(job=>{
                        return(
                            <>
                            
                <div className="viewjob">
                    <div className="post-job">
                        <ProfileIcon/>
                        <div className="views">
                            <h4>john godfrey</h4>
                            <time>9mins</time>

                        </div>

                    </div>

                </div>
                <div className="details-job">
                    <h2>Job Title</h2>
                        <p>{job.jobtitle}</p>
                    <h2>Job Location</h2>
                        <p>{job.joblocation}</p>
                    <h2>Job Application Email</h2>
                        <p>{job.jobapplicationemail}</p>
                    <h2>Job Description</h2>
                        <p>{job.jobdescription}</p>
                    <h2>10/4/2020</h2>
                </div>
            
                            </>

                        )
                    })
                }

            </Layout>
        )
    }
}
export default Viewjob;