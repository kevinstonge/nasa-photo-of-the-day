import React, {useState, Fragment} from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { Calendar } from 'react-date-range';
import "./APOD.scss"
import formatDate from "../formatDate";

const APOD = props => {
    const [datePopup, setDatePopup] = useState(false);
    const changeDate = date => {
        props.setDate(date);
        setDatePopup(false);
    }
    const sameDate = (date1,date2) => {
        if (date1.getYear() === date2.getYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()) { return true;
        }
        else { return false }
    }
    if (props.data && props.data.data) {
        const dateRange = {
            startDate: new Date("Jun 16, 1995"),
            endDate: new Date(),
            exclude: [new Date("June 17, 1995"), new Date("June 18, 1995"), new Date("June 19, 1995")]
        }
        return(
            <div className="apod_container">
                {(datePopup===true)?
                    <div className="calendar_container">
                    <Calendar date={new Date()} minDate={dateRange.startDate} maxDate={dateRange.endDate} disabledDates={dateRange.exclude} onChange={changeDate}/>
                    <button onClick={()=>setDatePopup(false)}>never mind</button>
                    </div>
                    :null}
                {/* break this out into a component */}
                <div className="apod_controls">
                    {
                    (sameDate(props.date,dateRange.startDate)) ?
                        <Fragment>
                        <p className="apod_control">|&lt; first</p>
                        <p className="apod_control">&lt; previous</p>
                        </Fragment>
                        :
                        <Fragment>
                        <p className="apod_control enabled" onClick={()=>props.setDate(dateRange.startDate)}>|&lt; first</p>
                        <p className="apod_control enabled" onClick={()=>props.setDate(new Date(props.date.setDate(props.date.getDate()-1)))}>&lt; previous</p>
                        </Fragment>
                    }

                    <p className="apod_control enabled" onClick={()=>setDatePopup(true)}>pick date</p>

                    {
                    (sameDate(props.date,new Date())) ?
                        <Fragment>
                        <p className="apod_control">next &gt;</p>
                        <p className="apod_control">last &gt;|</p>
                        </Fragment>
                        :
                        <Fragment>
                        <p className="apod_control enabled" onClick={()=>props.setDate(new Date(props.date.setDate(props.date.getDate()+1)))}>next &gt;</p>
                        <p className="apod_control enabled" onClick={()=>props.setDate(dateRange.endDate)}>last &gt;|</p>
                        </Fragment>
                    }                    
                </div>
                {/* end component */}
                <p className="date_indicator">
                    {formatDate(props.date)}
                </p>
                <div className="image_container">
                    {(props.data.data.media_type === "image")?
                        <img src={props.data.data.url} alt={props.data.data.title}></img>
                        :
                        null
                    }
                    {(props.data.data.media_type === "video")?
                        <object data={props.data.data.url} aria-label={props.data.data.title}></object>
                        :
                        null
                    }
                    <div className="title_container">
                        <h2>{props.data.data.title}</h2>
                    </div>
                </div>
                <div className="explanation_container">
                    <h3>About this image:</h3>
                    <p>{props.data.data.explanation}</p>
                    {(props.data.data.copyright)?
                        <p>copyright: {props.data.data.copyright}</p>
                        :
                        null
                    }
                </div>
            </div>
        )
    }
    else { return(<div className="apod_container">...loading...</div>)}
}
export default APOD;