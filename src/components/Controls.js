import React, { Fragment, useState } from "react";
import "./Controls.scss";
import { Calendar } from "react-date-range";

const Controls = (props) => {
  const sameDate = (date1, date2) => {
    if (
      date1.getYear() === date2.getYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    ) {
      return true;
    } else {
      return false;
    }
  };
  const [datePopup, setDatePopup] = useState(false);
  const changeDate = (date) => {
    props.setDate(date);
    setDatePopup(false);
  };
  const dateRange = {
    startDate: new Date("Jun 16, 1995"),
    endDate: new Date(),
    exclude: [
      new Date("June 17, 1995"),
      new Date("June 18, 1995"),
      new Date("June 19, 1995"),
    ],
  };
  return (
    <Fragment>
      {datePopup === true ? (
        <div className="calendar_container">
          <Calendar
            date={new Date()}
            minDate={dateRange.startDate}
            maxDate={dateRange.endDate}
            disabledDates={dateRange.exclude}
            onChange={changeDate}
          />
          <button onClick={() => setDatePopup(false)}>never mind</button>
        </div>
      ) : null}
      <div className="apod_controls">
        {sameDate(props.date, dateRange.startDate) ? (
          <Fragment>
            <p className="apod_control">|&lt; first</p>
            <p className="apod_control">&lt; previous</p>
          </Fragment>
        ) : (
          <Fragment>
            <p
              className="apod_control enabled"
              onClick={() => props.setDate(dateRange.startDate)}
            >
              |&lt; first
            </p>
            <p
              className="apod_control enabled"
              onClick={() =>
                props.setDate(
                  new Date(props.date.setDate(props.date.getDate() - 1))
                )
              }
            >
              &lt; previous
            </p>
          </Fragment>
        )}

        <p className="apod_control enabled" onClick={() => setDatePopup(true)}>
          pick date
        </p>

        {sameDate(props.date, new Date()) ? (
          <Fragment>
            <p className="apod_control">next &gt;</p>
            <p className="apod_control">last &gt;|</p>
          </Fragment>
        ) : (
          <Fragment>
            <p
              className="apod_control enabled"
              onClick={() =>
                props.setDate(
                  new Date(props.date.setDate(props.date.getDate() + 1))
                )
              }
            >
              next &gt;
            </p>
            <p
              className="apod_control enabled"
              onClick={() => props.setDate(dateRange.endDate)}
            >
              last &gt;|
            </p>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
export default Controls;
