import React from "react";
import "./APOD.scss"

const APOD = props => {
    if (props.data && props.data.data) {
        return(
            // date must be between Jun 16, 1995 and {today}
            //a couple dates have no image, so build missing/error handler
            //no image returns "code":400
            <div className="apod_container">
                {/* break this out into a component */}
                <div className="apod_controls">
                    <p className="apod_control">select date</p>
                    <p className="apod_control">&gt;</p>
                </div>
                {/* end component */}
                <div className="image_container">
                    {/* TODO: replace static image reference with props reference for final build */}
                    {/* <img src={props.data.data.url} alt={props.data.data.title}/> */}
                    <img src="169A2911Dai1024.jpg" alt={props.data.data.title}></img>
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
    else { return(<div className="apod_container">...loading...</div>)}
}
export default APOD;