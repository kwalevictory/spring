import React,{useState} from "react";
import "./privacy.css"
const Privacy = ({onClose})=>{
    const [privacy, setPrivacy] = useState('')
    return (
        <div className="privacy-modal">
            <div className="privacy-inner">
                <p>Where do you want to post it to</p>
                <div className="body">
                    <ul>
                        <li className="body-items">
                            <span>
                                <label htmlFor="pr1">
                                    <i>icon</i> Public
                                </label>
                            </span>
                            <span>
                                <input onChange={(event)=>setPrivacy(event.target.value)} defaultValue="Public" name="privacy" id="pr1" type="radio"/>
                            </span>
                        </li>

                        <li className="body-items">
                            <span>
                                <label htmlFor="pr2">
                                    <i>icon</i> Friends
                                </label>
                            </span>
                            <span>
                                <input onChange={(event)=>setPrivacy(event.target.value)} defaultValue="Friends"  name="privacy" id="pr2" type="radio"/>
                            </span>
                        </li>
                        <li className="body-items">
                            <span>
                                <label htmlFor="pr2">
                                    <i>icon</i> Advertisement
                                </label>
                            </span>
                            <span>
                                <input onChange={(event)=>setPrivacy(event.target.value)} defaultValue="Friends"  name="privacy" id="pr2" type="radio"/>
                            </span>
                        </li>
                        <li className="body-items">
                            <span>
                                <label htmlFor="pr2">
                                    <i>icon</i> Job placement
                                </label>
                            </span>
                            <span>
                                <input onChange={(event)=>setPrivacy(event.target.value)} defaultValue="Friends"  name="privacy" id="pr2" type="radio"/>
                            </span>
                        </li>
                        <li className="body-items">
                            <span>
                                <label htmlFor="pr2">
                                    <i>icon</i> Video from users
                               </label>
                            </span>
                            <span>
                                <input onChange={(event)=>setPrivacy(event.target.value)} defaultValue="Friends"  name="privacy" id="pr2" type="radio"/>
                            </span>
                        </li>

                    </ul>
                </div>
                <div className="btns">
                    <button onClick={()=>onClose(privacy)} className="finish">Finish</button>
                </div>
            </div>
        </div>
    )
}
export default Privacy;