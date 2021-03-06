import React from "react";
import "./post.css"
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
						<h3>{post.firstname + " " + post.lastname} &nbsp;</h3>
						<span> 
							<h3>&nbsp;</h3>
						</span>
						<time>1h</time>
					</div>
				</div>
			</div>
			<div className="timeline-body">
				<div className="timeline-text timeline-wrap">
				<p>{post.post}</p>
				</div>
					{
						post.images.length>0?
						<div className="timeline-images">
							{
								post.images.length === 1?
								<div className="img-one">
									<img src={post.images[0].image} alt={post.post}/>
								</div>
								:
								post.images.length === 2?
								<div className="img-two">
									<img src={post.images[0].image} alt=""/>
									<img src={post.images[1].image} alt=""/>
								</div>
								:
								<div className="img-two">
									<img src={post.images[0].image} alt=""/>
									<div className="img-three-inner">
										{
											post.images.length-3>0&&<div className="overlay"><span>+{post.images.length -3}</span></div>
										}
										<img src={post.images[1].image} alt=""/>
										<img src={post.images[2].image} alt=""/>
									</div>
								</div>
							}
						</div>
						:''
					}
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
						<Link to={`/comment/${post.id}`}>
							<span><i class="fa fa-heart-o" aria-hidden="true"></i></span>
							<span>10</span>
						</Link>
					</li>
				</ul>
			</div>
			
		
		</div>
	</div>
    )
}
export default Post;