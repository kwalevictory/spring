import React, { Component } from "react"
import "../css/adverts.css"
import Layout from "../components/layout"
import ProfileIcon from "../components/profileicon";
import good from "../images/good.jpg"


class Adverts extends Component {
    render(){
        return(
            <Layout>
                <div className="advertisement">
                    <div className="advert-goods">
                        <ProfileIcon/>
                        <div className="goods">
                            <h4>lewis philip done</h4>
                            <time>24m .</time>
                            <i>icon</i>

                        </div>

                    </div>

                </div>
                <div className="advertline-body">
                    <div className="advert-text advertline-wrap">
                        <p>Pay Ourstanding Salaries Befor We Talk about Ending Strike ASUU Tells Nigeria Government | Sahara Repoters</p>

                </div>
                <div className="advertline-images">
                    <div className="images-two">
                        <img src={good} alt=""/>
                        <div className="imgs-three-inner">
                            
                    
                        </div>
                       </div>
                      </div>

                </div>
                <div className="advertline-footer advertline-wrap">
                    <p>
                        <span><i className="fa fa-thumbs-up"></i></span>
                        34

                    </p>
                    <ul>
                        <li>
                            <span><i className="fa fa-thumbs-up"></i>3</span>
                        </li>
                        <li>
                            <span>icon</span>
                            <span>icon</span>
                        </li>
                    </ul>

                </div>

            </Layout>
        )
    }
}
export default Adverts;