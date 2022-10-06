import React from "react";

export default function DaysForcast() {
  return (
    <div>
      <div className="daysForecast">
        <p>6 days forecast</p>
        <ul className="row">
          <li className="col-2">
            <h5>Sun</h5>
            <span>cloudy</span>
            <span>tem</span>
            <i className="fa-solid fa-cloud"></i>
          </li>
          <li className="col-2">
            <h5>Mon</h5>
            <span>cloudy</span>
            <span>tem</span>
            <i className="fa-solid fa-cloud"></i>
          </li>
          <li className="col-2">
            <h5>Tue</h5>
            <span>cloudy</span>
            <span>tem</span>
            <i className="fa-solid fa-cloud"></i>
          </li>
          <li className="col-2">
            <h5>Wed</h5>
            <span>cloudy</span>
            <span>tem</span>
            <i className="fa-solid fa-cloud"></i>
          </li>
          <li className="col-2">
            <h5>Thu</h5>
            <span>cloudy</span>
            <span>tem</span>
            <i className="fa-solid fa-cloud"></i>
          </li>
          <li className="col-2">
            <h5>Fri</h5>
            <span>cloudy</span>
            <span>tem</span>
            <i className="fa-solid fa-cloud"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
