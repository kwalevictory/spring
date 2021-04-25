import React, { Component } from "react"
import "../css/jobplacement.css"
import Layout from "../components/layout";
import Context from '../components/context'


class Jobplacement extends Component {
    static contextType = Context
    constructor(props){
        super(props);
        this.state ={
            jobtitle:'',
            joblocation:'',
            jobapplicationemail:'',
            jobdescription:'',
            

            
            


        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    
    }

    onSubmit = async(e) =>{
        e.preventDefault();
        const jobPlacement = this.context.jobPlacement     
        if(this.state.jobtitle === '')
         return alert('Job title must not be empty')
         if(this.state.joblocation ==='')
         return alert('job location must not be empty')
         if(this.state.jobapplicationemail ==='')
         return alert('job application email must not be empty')
         if(this.state.jobdescription ==='')
         return alert('job description must not be empty')
        jobPlacement(this.state.jobtitle, this.state.joblocation, this.state.jobapplicationemail, this.state.jobdescription)
        .then(()=>{
            this.props.history.push('/viewjob')
        })
        .catch(e=>{
            console.log(e)
        })




    }
    

    render(){
        return(
            <Layout>
   <div className="placement">
      <div className="button-container-div">
         <button >Create Job</button>
      </div>
       <form onSubmit={this.onSubmit}>
         <label htmlFor="">Job Title</label>
         <input type="text" name="jobtitle" onChange={this.changeHandler} />
         <label htmlFor="">Job Location</label>
         <input type="text" name="joblocation" onChange={this.changeHandler} />
         <label htmlFor="">Job Application Email</label>
         <input type="text" name="jobapplicationemail" onChange={this.changeHandler}/>
         <div className="textrea">
            <label htmlFor="">Job Description</label>
            <textarea onChange={this.changeHandler} name="jobdescription" id="" cols="30" rows="10"/>
         <button className="besty">post</button>

            
            
         </div>
      

</form>
</div>

            </Layout>
        )
    }
}
export default Jobplacement;
