import React, { Component } from "react"
import "../css/report.css"
import Layout from "../components/layout"
import firebase from "../database/users"


class Report extends Component{
    constructor(props) {
        super(props);
        this.state ={
            report:'',
        }
    }
     changeHandler = (e) =>{
         this.setState({[e.target.name]:e.target.value})
     }
     onSubmit =(e) =>{
         e.preventDefault();
         firebase.firestore().collection('report').add(this.state)
         .then(snap=>{
            alert('he must be succes')

         })
         .catch(error=>{
             alert(error)
         })

     }
     
     
    


    render(){
        return(
            <Layout>
                <div className="report-user">
                    <div className="report-issue">
                        <p>Complain or Report.</p>

                    </div >
                    <form onSubmit={this.onSubmit}>
                    <div className="report-descrpt">
                        <p>Reason of your Complain or Report.</p>
                        <textarea onChange={this.changeHandler} name="" id="" cols="30" rows="10"/>
                    </div>
                    <div className="report-send">
                        <button>send report</button>

                    </div>
                    </form>
                    

                </div>

            </Layout>
        )
    }
}
export default Report;
