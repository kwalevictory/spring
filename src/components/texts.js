import React, {Component} from "react"
import "../css/text.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"
import Context from "./context";




class Text extends Component {
    static contextType = Context

    constructor(props){
        super(props);
        this.state ={
            commentbox:'',
            
            

        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})

    }
     onSubmit =async(e) =>{
        e.preventDefault();
        if(!this.props.commentId)
        this.context.text(this.state.commentbox, this.props.postId, true)
        .then(()=>{
            this.setState({commentbox:''})
        })
        else
        this.context.text(this.state.commentbox, this.props.commentId, false)
        .then(()=>{
            this.setState({commentbox:''})
        })
         /* firebase.firestore().collection('text').add(this.state)
         .then(snap=>{
             const data={
                 userId:this.context.state.user.uid, 
                 friendId:this.props.friendId,
                 comment:this.state.commentbox,
                 postId:this.props.postId,
             }
             this.co.ntext.notification(data)

         })
         .catch(error=>{
             alert(error)
         })*/
     }
    

    render(){
        return(

            <form onSubmit={this.onSubmit}>
            <div className="text-box">
                <div className="text-boxx">
                    <img src={this.props.image?this.props.image:good} alt=""/>
                    <textarea id={this.props.id} onChange={this.changeHandler} name="commentbox" value={this.state.commentbox} placeholder="Add comment..."/>
                    <button>Post</button>

                </div>
            
            </div>
            </form>
            
        )
    }
}
export default Text;