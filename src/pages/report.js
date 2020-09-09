import React, { Component } from "react"
import "../css/report.css"
import Layout from "../components/layout"

class Report extends Component{
    render(){
        return(
            <Layout>
                <div className="report-user">
                    <div className="report-issue">
                        <p>Complain or Report.</p>

                    </div >
                    <div className="report-descrpt">
                        <p>Reason of your Complain or Report.</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="report-send">
                        <button>send report</button>

                    </div>
                    

                </div>

            </Layout>
        )
    }
}
export default Report;
