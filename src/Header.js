import React from "react";
import "./App.css";

export default function DaysForcast() {
  return (
    <div>
      <div class="row mainHeader">
        <div id="headerTitle" class="col-6">
          <h1>Weather forecast</h1>
          <small>Saturday 21st February 2022</small>
        </div>

        <form class="mt-2 col-5">
          <input
            type="text"
            class="form-control"
            placeholder="Search city here"
            aria-label="Search city here"
            id="form-Input"
          />
          <button id="inputButton" type="submit">
            <i class="fa-solid fa-magnifying-glass searchIcon"></i>
          </button>
        </form>
        <div class="col-1" id="locationButton">
          <button id="location" type="submit">
            <i class="fa-solid fa-location-crosshairs"></i>
          </button>
        </div>
      </div>
      <div class="row detailWrapper">
        <div class="col-6">
          <h2 id="city" class="detailCity">
            City
          </h2>
          <h3 id="temp">2</h3>
        </div>

        <i class="fa-regular fa-sun detailIcon col-4"></i>
        <ul class="detailInfo col-2">
          <li id="weatherShape"></li>
          <li id="humidity"></li>
          <li id="wind"></li>
        </ul>
      </div>
    </div>
  );
}
