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
                        <h1>bianca marshall</h1>
                        <div className="comments">
                            <p>why is he shackled to the bed? why was he shot? Can we get the very best of physios for the man?</p>
                        </div>
                    </div>
                </div>
                <div className="reply">
                    <time>3 hrs</time>
                    <p>like</p>
                    <button>reply</button>
                </div>
                <div className="previous-replies">
                    <p>view previous 4 replies</p>

                </div>
                <div className="reply-many">
                    <img src={good} alt=""/>
                    <h4>bianca marshall</h4>
                    <p>john...</p>
                </div>
                <div className="comment-post">
                    <img src={good} alt=""/>
                    <div className="comment-name">
                        <h1>bianca marshall</h1>
                        <div className="comments">
                            <p>why is he shackled to the bed? why was he shot? Can we get the very best of physios for the man?</p>
                        </div>
                    </div>
                </div>
                <div className="reply-many">
                    <time>2 hrs</time>
                    <p>like</p>
                    <button>reply</button>

                </div>
                <div className="first-replies">
                    <img src={good} alt=""/>
                    <div className="first">
                        <h5>john philip</h5>
                        <span>bianca marshall</span><p>hater for your information he is not playing</p>

                    </div>

                </div>
                
            </Layout>
        )
    }
}
export default Comment;
