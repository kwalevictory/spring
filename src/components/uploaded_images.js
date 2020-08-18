import React from "react";

import "./uploaded_images.css"

const UploadedImages = ({images})=>{
    return(
        <div className="uploaded-images">
            <ul>
                {
                    images?
                    images.length>0?
                    
                        images.map((image,i)=>{
                            return(
                                <li key={i}>
                                    <img src={image} alt=""/>
                                </li>
                            )
                        })
                    :null
                    :null
                }
            </ul>
        </div>
    )
}
export default UploadedImages;