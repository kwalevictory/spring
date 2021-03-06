import React, {Component} from "react"
import "../css/comment.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"
import {Link, withRouter} from "react-router-dom"
import Text from "../components/texts"
import Context from "../components/context";




class Comment extends Component {
    static contextType=Context


    constructor(props){
        super(props)
        this.state={
            friendId:"",
            postId:"",
            comment_id:""
        }
    }
    componentDidMount(){
        const url=this.props.location.pathname.split("/")
        this.setState({friendId:url[3],postId:url[2]})
        this.context.comments(url[2])
    }
    onReply = (comment_id)=>{
        this.setState({comment_id})
    }
    render(){
        return(
            <Layout>
                {
                    this.context.state.comments.map((comment, i)=>(
                        <div key={i}>
                            <div className="comment-post">
                                <img src={comment.image} alt=""/>
                                <div className="comment-name">
                                    <h1>{comment.firstname+' '+comment.lastname}</h1>
                                    <div className="comment">
                                        <p>{comment.comment}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="reply">
                                <time>3 hrs</time>
                                <p>Like</p>
                                <label htmlFor="reply"  onClick={()=>this.onReply(comment.id)}>Reply</label>
                            </div>
                            {
                                comment.replies>0&&
                                <div className="previous-replies">
                                <Link to={`/reply/${this.state.postId}/${comment.id}`}>View previous {comment.replies} replies</Link>

                            </div>
                            }
                            {/* <div className="reply-many">
                                <img src={good} alt=""/>
                                <h4>Bianca Marshall</h4>
                                <p>john...</p>
                            </div> */}
                        </div>
                    ))
                }
                {/* <div className="comment-post">
                    <img src={good} alt=""/>
                    <div className="comment-name">
                        <h1>Bianca Marshall</h1>
                        <div className="comment">
                            <p>why is he shackled to the bed? why was he shot? Can we get the very best of physios for the man?</p>
                        </div>
                    </div>
                </div>
                <div className="reply">
                    <time>3 hrs</time>
                    <p>Like</p>
                    <h8>Reply</h8>

                </div>
                <div className="first-replies">
                    <img src={good} alt=""/>
                    <div className="first">
                        <h5>John Philip</h5>
                        <p>nice comment and i will waite</p>

                    </div>
                     <div className="reply-last">
                         <time>4 hrs</time>
                         <p>Like</p>
                         <h9>Reply</h9>
                    </div>    

                </div> */}
                <Text id="reply" image={this.context.state.user.image} commentId={this.state.comment_id} friendId={this.state.friendId} postId={this.state.postId}/>
                
            </Layout>
        )
    }
}
export default withRouter(Comment);
