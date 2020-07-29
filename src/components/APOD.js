import React, { Fragment } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Controls from "./Controls";
import "./APOD.scss";
import formatDate from "../formatDate";

const APOD = (props) => {
  return (
    <div className="apod_container">
      <Controls date={props.date} setDate={props.setDate} />
      <p className="date_indicator">{formatDate(props.date)}</p>
      {props.data && props.data.data ? (
        <Fragment>
          <div className="image_container">
            {props.data.data.media_type === "image" ? (
              <img src={props.data.data.url} alt={props.data.data.title}></img>
            ) : null}
            {props.data.data.media_type === "video" ? (
              <object
                data={props.data.data.url}
                aria-label={props.data.data.title}
              ></object>
            ) : null}
            <div className="title_container">
              <h2>{props.data.data.title}</h2>
            </div>
          </div>
          <div className="explanation_container">
            <h3>About this image:</h3>
            <p>{props.data.data.explanation}</p>
            {props.data.data.copyright ? (
              <p>copyright: {props.data.data.copyright}</p>
            ) : null}
          </div>
        </Fragment>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
};
export default APOD;
