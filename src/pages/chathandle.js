import React, { Component } from "react"
import "../css/chathandle.css"
import Layout from "../components/layout"
import good from "../images/good.jpg"
import Context from "../components/context"




class Chathandle extends Component{
    static contextType = Context;
    constructor(props){
        super(props)
        this.state={
            chats:[],
            text:'',
            receiverId:'',
            friend:null
        }
    }
    componentDidMount(){
        const id = this.props.location.pathname.split('/')[2]
        
        this.context.getChats(id)

        this.setState({receiverId:id})
    }
    onSubmit =(e)=>{
        e.preventDefault()
        this.context.saveChat(this.state.text, this.state.receiverId)
        .then(()=>{
            this.setState({text:''})
        })
    }
    render(){
        const friend = this.context.state.userData?this.context.state.userData.friends.filter(friend=>friend.id === this.state.receiverId):null
        
        return(
            <Layout>
                <div className="chat-handle">
                    <div className="handlers">
                        <img src={friend?friend[0].photoURL:good} alt=""/>

                    </div>
                </div>
                <div className="users-name">
                    <p>{friend&&friend[0].firstname +' ' +friend[0].lastname}</p>

                </div>
                <div className="users-online">
                    <p>online</p>

                </div>
                <div className="draw-line">

                </div>
                <div className="chat-date">
                    <button>october 2</button>

                </div>
                {
                    this.context.state.chats.length> 0&&
                    this.context.state.chats.sort((a,b)=>{return new Date(a.createdAt.seconds*1000) - new Date(b.createdAt.seconds*1000);}).map((chat,i)=>{
                        let time = ''
                        let am = 'am'
                        if(chat.createdAt){
                            const date = new Date(chat.createdAt.seconds*1000)
                            let h = date.getHours()
                            let min = date.getMinutes()
                            if(h>12){
                                h = h-12
                                am = 'pm'
    
                            }
                            else if( h === 12)
                            am = 'pm'
    
                            h = h< 10 ? '0'+ h:h
                            min = min< 10? '0'+min:min
                            time = h +':'+min+' '+am
                        }
  
                        return(
                        <div key={i}>
                            {
                                chat.senderId === this.context.state.user.uid?
                                <div className="receiving-message">
                                <p>{chat.message}</p>
                                <span>{time}</span>

                            </div>
                                :
                                <div className="sending-message">
                                <p>{chat.message}</p>
                                <span>{time}</span>

                            </div>
                            }

                        </div>
                    )
                })
                }
                

                <div className="type-box">
                    <textarea value={this.state.text} onChange={text=>this.setState({text:text.target.value})} placeholder="Type a Message"/>
                </div>
                <button onClick={this.onSubmit} className="sending-typest">
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
                
            

            </Layout>
        )
    }

}
export default Chathandle;




