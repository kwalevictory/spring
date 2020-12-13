import React from "react";
import "./status.css";
import good from "../images/good.jpg"
const Status = ()=>{
    return(
        <div className="preview">
		<div className="preview-inner">
			<div className="carousel">
				<div className="item items">
					<img src={good} alt=""/>
					<span>
						<i className="fa fa-plus"></i>
					</span>
					
				</div>
				<div className="item">
					<img src={good} alt=""/>
					<h4>Uwa Best</h4>
				</div>
				<div className="item">
					<img src={good} alt=""/>
					<h4>Uwa Best Airehenbuwa</h4>
				</div>
				<div className="item">
					<img src={good} alt=""/>
					<h4>Uwa Best</h4>
				</div>
				<div className="item">
					<img src={good} alt=""/>
					<h4>Uwa Best Airehenbuwa</h4>
				</div>
				<div className="item">
					<img src={good} alt=""/>
					<h4>Uwa Best</h4>
				</div>
				<div className="item">
					<img src={good} alt=""/>
					<h4>Uwa Best</h4>
				</div> 
			</div>
			<h5>VIVE</h5>
		</div>
	</div>
    )
}
export default Status