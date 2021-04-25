import React, {Component} from "react"
import "../css/comment.css"
import Layout from "../components/layout"
import {withRouter} from "react-router-dom"
import Text from "../components/texts"
import Context from "../components/context";




class Reply extends Component {
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
        this.setState({comment_id:url[3],postId:url[2]})
        this.context.replies(url[2],url[3])
    }
    onReply = (comment_id)=>{
        this.setState({comment_id})
    }
    render(){
        return(
            <Layout>
                {
                    this.context.state.replies.map((comment, i)=>(
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
                                <p>View previous {comment.replies} replies</p>

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
          
                <Text id="reply" image={this.context.state.user.image} commentId={this.state.comment_id} friendId={this.state.friendId} postId={this.state.postId}/>
                
            </Layout>
        )
    }
}
export default withRouter(Reply);
