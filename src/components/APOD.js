import React from "react";
import "./APOD.sass"
const APOD = props => {
    console.log(props);
    return(
        <div className="apod_container">
            <div className="image_container">
                <img src={props.data.data.url} alt={props.data.data.title}/>
            </div>
            <div className="title_container">
                    <h2>{props.data.data.title}</h2>
            </div>
        </div>
    )
}
export default APOD;