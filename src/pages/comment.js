import React, {Component} from "react"
import "../css/comment.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"

class Comment extends Component {
    render(){
        return(
            <Layout>
                <div className="comment-post">
                    <img className="comment-images" src={good} alt=""/>
                    <div className="comment-name">
                        <h3>okonye victory</h3>
                        <p> nice one bro sir best lockbbn</p>
                    </div>
                </div>
                <div className="comment-user">
                    <time className="time">7 mins</time>
                    <p className="like-comment">like</p>
                    <p className="reple-comment">reply</p>
                    <p>2</p>
                </div>
                <div className="view-previous">
                    <h1>view previous reply</h1>

                </div>
                <div className="reply-user">
                    <img className="images-reply" src={good} alt=""/>
                    <h2>okonye victory</h2>
                    <p className="like-reply">john king...</p>
                </div>
                <div className="comment-post">
                <img className="comment-images" src={good} alt=""/>
                <div className="comment-name">
                <h3>okonye victory</h3>
                <p> nice one bro sir best lockbbn</p>
            </div>
            </div>
                <div className="comment-user">
                   <time className="time">7 mins</time>
                   <p className="like-comment">like</p>
                   <p className="reple-comment">reply</p>
                  <p>2</p>
            </div>
            <div className="first-reply">
                <img className="image-reply" src={good} alt=""/>
                <div className="comment-replies">
                <h4>timothy joy</h4>
                <p>okonye victory  how your day</p>
                </div>
                

            </div>



            </Layout>
        )
    }
}
export default Comment;
