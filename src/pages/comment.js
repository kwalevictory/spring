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
                    <time>3 mins</time>
                    <p>Like</p>
                    <button>Reply</button>
                    
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
                <div className="reply">
                    <time>2 hrs</time>
                    <p>Like</p>
                    <button>Reply</button>
                    

                </div>
                <div className="first-replies">
                    <img src={good} alt=""/>
                    <div className="first">
                        <h5>John Philip</h5>
                        <span>Bianca Marshall</span><p>hater for your information he is not playing</p>

                    </div>

                </div>
                <div className="replies-friend">
                    <time>1 hrs</time>
                    <p>Like</p>
                    <button>Reply</button>
                    

                </div>
                
            </Layout>
        )
    }
}
export default Comment;
