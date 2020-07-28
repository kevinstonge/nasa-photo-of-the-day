import React, {useState} from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';
import "./APOD.scss"

const APOD = props => {
    const [datePopup, setDatePopup] = useState(false);
    const changeDate = date => {
        props.setDate(date);
        setDatePopup(false);
    }
    if (props.data && props.data.data) {
        const dateRange = {
            startDate: new Date("Jun 16, 1995"),
            endDate: new Date(),
            exclude: [new Date("June 17, 1995"), new Date("June 18, 1995"), new Date("June 19, 1995")]
        }
        return(
            // date must be between Jun 16, 1995 and {today}
            //a couple dates have no image, so build missing/error handler
            //June 20 1995: Pleiades Star Cluster - June 16 1995
            //no image returns "code":400
            <div className="apod_container">
                {(datePopup===true)?
                    <div className="calendar_container">
                    <Calendar date={new Date()} minDate={dateRange.startDate} maxDate={dateRange.endDate} disabledDates={dateRange.exclude} onChange={changeDate}/>
                    <button onClick={()=>setDatePopup(false)}>never mind</button>
                    </div>
                    :null}
                {/* break this out into a component */}
                <div className="apod_controls">
                    <p className="apod_control" onClick={()=>props.setDate(dateRange.startDate)}>|&lt; first</p>
                    <p className="apod_control" onClick={()=>props.setDate(new Date(props.date.setDate(props.date.getDate()-1)))}>&lt; previous</p>
                    <p className="apod_control" onClick={()=>setDatePopup(true)}>pick date</p>
                    <p className="apod_control" onClick={()=>props.setDate(new Date(props.date.setDate(props.date.getDate()+1)))}>next &gt;</p>
                    <p className="apod_control" onClick={()=>props.setDate(dateRange.endDate)}>last &gt;|</p>
                </div>
                {/* end component */}
                <div className="image_container">
                    <img src={props.data.data.url} alt={props.data.data.title}></img>
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