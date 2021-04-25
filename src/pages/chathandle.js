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
        
        // this.context.getChats(id)

        this.setState({receiverId:Number(id)})
    }
    onSubmit =(e)=>{
        e.preventDefault()
        this.context.messager(this.state.text, this.state.receiverId)
        .then(()=>{
            this.setState({text:''})
        })
    }
    render(){
        
		const messages = this.context.state.messages.filter(message=>(message.friend_id === this.state.receiverId || message.user_id === this.state.receiverId))
        const friend = this.context.state.friends.filter(friend=>friend.id === this.state.receiverId)
        console.log(this.context.state.messages)
        return(
            <Layout>
                <div className="chat-handle">
                    <div className="handlers">
                        <img src={friend.length>0?friend[0].image?friend[0].image:good:good} alt=""/>

                    </div>
                </div>
                <div className="users-name">
                    <p>{friend.length>0&&friend[0].firstname +' ' +friend[0].lastname}</p>

                </div>
                <div className="users-online">
                    <p>{friend.length>0?friend[0].status?'online':'offline':''}</p>

                </div>
                <div className="draw-line">

                </div>
                <div className="chat-date">
                    <button>october 2</button>

                </div>
                {
                    messages.length> 0&&
                    messages.map((chat,i)=>{
                        //messages.sort((a,b)=>{return new Date(a.createdAt.seconds*1000) - new Date(b.createdAt.seconds*1000);})
                        let time = ''
                        let am = 'am'
                        // if(chat.createdAt){
                            const date = new Date()
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
                        //}
  
                        return(
                        <div key={i}>
                            {
                                chat.user_id === this.context.state.user.id?
                                <div className="receiving-message">
                                <p>{chat.messages}</p>
                                <span>{time}</span>

                            </div>
                                :
                                <div className="sending-message">
                                <p>{chat.messages}</p>
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




