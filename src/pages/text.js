import React, {Component} from "react"
import "../css/text.css"
import Layout from "../components/layout"
import firebase from "../database/users"


class Text extends Component {
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
             alert('if successfuly writting')

         })
         .catch(error=>{
             alert(error)
         })



     }
    

    render(){
        return(
            <Layout>
                
                <div className="text-box">
                    <form onSubmit={this.onSubmit}>
                    <textarea onChange={this.changeHandler} name="commentbox" placeholder="add comment...."/>
                    <button>
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </button>
                    </form>

                </div>
            </Layout>
        )
    }
}
export default Text;