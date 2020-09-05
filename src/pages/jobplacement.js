import React, { Component } from "react"
import "../css/jobplacement.css"
import Layout from "../components/layout";


class Jobplacement extends Component {
    constructor(props){
        super(props);
        this.state = {
            JobTitle:'',
            JobLocation:'',
            jobApplicationEmail:'',
            jobdescription:''


        };
    }
     handlerChange(event) {
         this.setState({value:event.target.value})
     }
     

    

    



      

    

    
    render(){
        return(
            <Layout>
   <div className="placement">
      <div className="button-container-div">
         <button>Create Job</button>
      </div>
       <form action="">
         <label for="">Job Title</label>
         <input type="text"/>
         <label for="">Job Location</label>
         <input type="text"/>
         <label>Job Application Email</label>
         <input type="text"/>
         <div className="textrea">
            <label for="">Job Description</label>
            <textarea value={this.state.value} onChange={this.changeHandler} name="" id="" cols="30" rows="10"></textarea>
         <label for="">12 hours ago</label>
         <button  className="besty">post</button>


            
         </div>
      

</form>
</div>

            </Layout>
        )
    }
}

export default Jobplacement;
