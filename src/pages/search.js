import React, {Component} from "react"
import "../css/search.css"
import Layout from "../components/layout" 

class Search extends Component {
    render(){
        return(
            <Layout>
                <div className="search-userss">
                    <div className="user-search">
                        <span>
                            <i class="fa fa-search" aria-hidden="true"></i>

                        </span>
                        <input type="text" placeholder="search.."/>


                    
                    </div>

                     

                </div>
                
                
                
            </Layout>
        )
    }
}
export default Search;