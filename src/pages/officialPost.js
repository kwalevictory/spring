import React, {Component} from "react"
import "../css/officialpost.css"
import Layout from "../components/layout"
import ProfileIcon from "../components/profileicon";
import UploadedImages from "../components/uploaded_images";








const Officialpost = ({})=>{
    
    
    
    return(
        <Layout>
            <div className="officialpost">
                <ProfileIcon/>
                <h4>collins philip</h4>
                <i className="fa fa-circle"></i>
                

            </div>
            <div className="textofficial">
                <textarea placeholder="what is in your mind"/>

            </div>
        
           <div className="official-camera">
               <i class="fa fa-camera" aria-hidden="true"></i>


           </div>
           <div className="official-send">
               <button>post</button>

           </div>
            
        </Layout>
    )
}
export default Officialpost;