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
                <div className="search-userss">
                    <div className="user-search">  
                            
                        <input type="text" placeholder="Search..."/>
                        

                    </div>

                     

                </div>
                
                
                
            </Layout>
        )
    }
}
export default Search;