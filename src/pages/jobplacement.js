import React, { Component } from "react"
import "../css/jobplacement.css"
import Layout from "../components/layout";

class Jobplacement extends Component {
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
            <textarea name="" id="" cols="30" rows="10"></textarea>
         <label for="">12 hours ago</label>


            
         </div>
      

</form>
</div>

            </Layout>
        )
    }
}
export default Jobplacement;
