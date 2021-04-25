import React, { Component } from "react"
import "../css/viewjob.css"
import Layout from "../components/layout"
import ProfileIcon from "../components/profileicon";
import {Link} from "react-router-dom"
import Context from "../components/context";




class Viewjob extends Component{
    static contextType=Context
    // componentDidMount(){
    //     this.context.jobPlacement()

    // }

    render(){
        const jobs=this.context.state.jobs
        console.log(jobs)
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
                        <p>{job.job_title}</p>
                    <h2>Job Location</h2>
                        <p>{job.job_location}</p>
                    <h2>Job Application Email</h2>
                        <p>{job.job_application_email}</p>
                    <h2>Job Description</h2>
                        <p>{job.job_description}</p>
                    
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