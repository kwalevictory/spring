import React, {Component} from "react"
import "../css/text.css"
import Layout from "../components/layout"
import firebase from "../database/users"
import Context from "./context"


class Text extends Component {
    static contextType=Context
    constructor(props){
        super(props);
        this.state ={
            commentbox:'',
            
            

        }
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value})

    }
     onSubmit =(e) =>{
        e.preventDefault();
          firebase.firestore().collection('text').add(this.state)
         .then(snap=>{
             const data={
                 userId:this.context.state.user.uid, 
                 friendId:this.props.friendId,
                 comment:this.state.commentbox,
                 postId:this.props.postId,
             }
             this.context.notification(data)

         })
         .catch(error=>{
             alert(error)
         })
     }
    

    render(){
        return(
            
                
                <div className="text-box">
                    <form onSubmit={this.onSubmit}>
                    <textarea onChange={this.changeHandler} name="commentbox" placeholder="add comment...."/>
                    <button className="text-comments">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                    </form>

                </div>
            
        )
    }
}
export default Text;