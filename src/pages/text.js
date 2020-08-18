import React, {Component} from "react"
import "../css/text.css"
import Layout from "../components/layout"


class Text extends Component {
    render(){
        return(
            <Layout>
                <div className="text-box">
                    <textarea placeholder="add comment...."></textarea>
                    <button>post</button>

                </div>
            </Layout>
        )
    }
}
export default Text;