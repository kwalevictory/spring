import React, {Component} from "react"
import "../css/comment.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"



class Comment extends Component {
    render(){
        return(
            <Layout>
                <div className="comment-post">
                    <img src={good} alt=""/>
                    <div className="comment-name">
                        <h1>Bianca Marshall</h1>
                        <div className="comments">
                            <p>why is he shackled to the bed? why was he shot? Can we get the very best of physios for the man?</p>
                        </div>
                    </div>
                </div>
                <div className="reply">
                    <time>3 hrs</time>
                    <p>Like</p>
                    <h8>Reply</h8>
                </div>
                <div className="previous-replies">
                    <p>View previous 4 replies</p>

                </div>
                <div className="reply-many">
                    <img src={good} alt=""/>
                    <h4>Bianca Marshall</h4>
                    <p>john...</p>
                </div>
                <div className="comment-post">
                    <img src={good} alt=""/>
                    <div className="comment-name">
                        <h1>Bianca Marshall</h1>
                        <div className="comments">
                            <p>why is he shackled to the bed? why was he shot? Can we get the very best of physios for the man?</p>
                        </div>
                    </div>
                </div>
                <div className="replys-many">
                    <time>2 hrs</time>
                    <p>Like</p>
                    <h7>Reply</h7>

                </div>
                <div className="first-replies">
                    <img src={good} alt=""/>
                    <div className="first">
                        <h5>John Philip</h5>
                        <p>hater for your information he is not playing</p>

                    </div>
                     <div className="reply-last">
                         <time>4 hrs</time>
                         <p>Like</p>
                         <h9>Reply</h9>
                    </div>    

                </div>
                
            </Layout>
        )
    }
}
export default Comment;