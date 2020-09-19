import React from "react";
import "./post.css"
import good from "../images/good.jpg"
import ProfileIcon from "./profileicon";
import {Link} from "react-router-dom"
const Post =({comment,user,post})=>{
    return(
        <div className="timeline">
		<div className="timeline-inner">
			<div className="timeline-wrap">
				<div className="timeline-head">
                    <ProfileIcon user={post}/>
					<div className="timeline-tag">
						<h3>{post.name} &nbsp;</h3>
						<span>
							is with 
							<h3>&nbsp;Jemimah Best</h3>
						</span>
						<time>23 minutes ago</time>
					</div>
				</div>
			</div>
			<div className="timeline-body">
				<div className="timeline-text timeline-wrap">
				<p>{post.post}</p>
				</div>
				<div className="timeline-images">
					<div className="img-two">
						<img src={good} alt=""/>
						<div className="img-three-inner">
							<span>+4</span>
							<img src={good} alt=""/>
							<img src={good} alt=""/>
						</div>
					</div>
				</div>
			</div>
			<div className="timeline-footer timeline-wrap">
				<p>
					<span><i className="fa fa-thumbs-up"></i></span>
					Hellen Saaah and 2 others
				</p>
				<ul>
					<li>
						<span><i className=" fa fa-thumbs-up"></i></span><span>3</span>
					</li>
					<li>
						<Link to="/comment">
							<span> icon</span>
							<span>10</span>
						</Link>
					</li>
				</ul>
			</div>
			<div style={{display:'grid', justifyContent:'space-between', gridAutoFlow:'column', marginTop:'20px', marginBottom:'20px',borderTop: '1px solid #ccc', paddingTop:'20px'}} >
				<ProfileIcon size={40}/>
				<textarea style={{borderRadius:'15px',outline:'none', padding: '8px'}} cols="30" rows="3" placeholder="Write a comment..."></textarea>
				<button style={{padding:'12px',height:'43px'}}>Post</button>
			</div>
		</div>
	</div>
    )
}
export default Post;