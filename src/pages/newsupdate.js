import React, { Component } from "react"
import "../css/newsupdate.css"
import Layout from "../components/layout"
import ProfileIcon from "../components/profileicon";
import good from "../images/good.jpg"


class Newsupdate extends Component {
    componentDidMount() {
        fetch('http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=4b551f364d824e558cf327ba91353d39',{mode: 'no-cors' })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
        })
    }
    

    render(){
        return(
            <Layout>
                <div className="newsupdate">
                    <div className="read-news">
                        <ProfileIcon/>
                        <div className="news">
                            <h4>sahara reporters</h4>
                            <time>24m .</time>
                            <i>icon</i>

                        </div>

                    </div>

                </div>
                <div className="newsline-body">
                    <div className="newsline-text newsline-wrap">
                        <p>Pay Ourstanding Salaries Befor We Talk about Ending Strike ASUU Tells Nigeria Government | Sahara Repoters</p>

                </div>
                <div className="newsline-images">
                    <div className="images-two">
                        <img src={good} alt=""/>
                        <div className="imgs-three-inner">
                            
                    
                        </div>
                       </div>
                      </div>

                </div>
                

            </Layout>
        )
    }
}
export default Newsupdate;