import React, {Component} from "react"
import "../css/chat.css"
import Layout from "../components/layout" 

class Chat extends Component {
    render(){
        return(
            <Layout>
            
                {/* <!-- preview --> */}
                <div className="preview">
                    <div className="preview-inner">
                        <div className="less">
                            <div className="item">
                                <img src="firest.jpg" alt=""/>
                                <h4>Philip </h4>
                            </div>
                            <div className="item">
                                <img src="vivian.jpg" alt=""/>
                                <h4> besty</h4>
                            </div>
                            <div className="item">
                                <img src="uwa.jpg" alt=""/>
                                <h4> luzis</h4>
                            </div>
                            <div className="item">
                                <img src="felix.jpg" alt=""/>
                                <h4> happy</h4>
                            </div>
                            <div className="item">
                                <img src="bud.jpg" alt=""/>
                                <h4> Best</h4>
                            </div>
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg"alt=""/>
                                <h4>victory </h4>
                            </div> 
                            <div className="item">
                                <img src="good.jpg" alt=""/>
                                <h4>victory </h4>
                            </div> 
                        </div>
                    
                    </div>
                </div>
                <div className="conversation">
                    <div className="user-image">
                        <img src="felix.jpg" alt=""/>
                    </div>
                    <div>
                        <h6 className="username">
                            okonye victoy
                        </h6>
                        <h5 className="conversation-message">
                            how was ur day dear			
                        </h5>
                    </div>
                    <time className="create-dat">
                        17h
                        
                    </time>
                    
            
                    
                </div>
                <div className="conversation">
                    <div className="user-image">
                        <img src="vivian.jpg" alt=""/>
                    </div>
                    <div>
                        <h6 className="username">
                            philip peter
                        </h6>
                        <h5 className="conversation-message">
                            i hope you are fine wat of mum 
                            
                        </h5>
                    </div>
                    <time className="create-dat">
                        1d
                    </time>
                </div>
                <div className="conversation">
                    <div className="user-image">
                        <img src="bud.jpg" alt=""/>
                    </div>
                    <div>
                        <h6 className="username">
                            okonye victory
                        </h6>
                        <h5 className="conversation-message">
                            were are you john.....
                            
                        </h5>
                    </div>
                    <time className="create-dat">
                        3d
                    </time>
                </div>
                <div className="conversation">
                    <div className="user-image">
                        <img src="firest.jpg" alt=""/>
                    </div>
                    <div>
                        <h6 className="username">
                            uba vivian
                            
                        </h6>
                        <h5 className="conversation-message">
                            am dere already love...
                            
                        </h5>
                    </div>
                    <time className="create-dat">
                        11m
                    </time>
                </div>
                <div className="conversation">
                    <div className="user-image">
                        <img src="vivian.jpg" alt=""/>
                    </div>
                    <div>
                        <h6 className="username">
                            joy okoh
                            
                        </h6>
                        <h5 className="conversation-message">
                            are you coming today..
                            
                        </h5>
                    </div>
                    <time className="create-dat">
                        2m
                        
                    </time>
                </div>
            
            
    

            </Layout>
        )
    }


}
export default Chat;
