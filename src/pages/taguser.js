import React, { Component } from "react"
import "../css/taguser.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"



class Taguser extends Component {
    constructor(props){
        super(props);
        this.state ={
            friends:[
                {
                    name:'Okonye Victory',
                    ischecked:false
                },
                {
                    name:'John Joy',
                    ischecked:false
                },
                {
                    name:'Lewis Philip',
                    ischecked:false
                },
                {
                    name:'Uhab Vivian',
                    ischecked:false
                },
                {
                    name:'Chike Benson',
                    ischecked:false
                },

            ]
            
        };
    }
    
    toggleChange = (e) =>{
        const event = e;
            const friends = this.state.friends
            const frien = this.state.friends[event.value]
               friends.splice(event, 1,frien)
              this.setState({friends:friends})

    }
    
    
    render(){
        console.log(this.state)
        return(
            
            <Layout>
                
                <div className="tag">
                    <p>Choose any friend you wish to tag</p>

                </div>
                {
                    this.state.friends?
                        this.state.friends.map((friend, i)=>{
                            return(
                                <div key={i} className="tag-users">
                            
                                    <img src={good} alt=""/>
                                    <div className="tag-mem">
                                        <h6>{friend.name}</h6>
                                        <input type="checkbox" value={i} checked={this.state.friends[i].ischecked} onChange={(e)=>this.toggleChange(e.target)} name="friends"/>
                                    </div>
                                </div>
                            )
                        })
                    :''
                }
                <button className="done">Done</button>
                
                
            </Layout>
        

        )
    }
}
export default Taguser;