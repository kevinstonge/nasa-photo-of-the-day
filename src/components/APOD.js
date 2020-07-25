import React from "react";
import "./APOD.scss"
const APOD = props => {
    console.log(props);
    return(
        <div className="apod_container">
            <div className="image_container">
                {/* <img src={props.data.data.url} alt={props.data.data.title}/> */}
                <div className="title_container">
                    <h2>{props.data.data.title}</h2>
                </div>
            </div>
            <div className="explanation_container">
                <h3>About this image:</h3>
                <p>{props.data.data.explanation}</p>
            </div>
        </div>
    )
}
export default APOD;