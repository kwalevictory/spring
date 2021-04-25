import React, {Component} from "react"
import "../css/search.css"
import Layout from "../components/layout" 

class Search extends Component {
    constructor(props) {
        super(props)
        this.state ={
        
        }
    }
    
    render(){
        return(
            <Layout>
                <div className="spring-search">
                    <i>icon</i>
                    <textarea placeholder="Search...." />       
                </div>
            
            </Layout>
        )
    }
}
export default Search;