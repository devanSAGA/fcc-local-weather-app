import React from "react";

const WeatherInfo = props => {
  return (
    <div>
      {!props.temp ? (
        <button className="button" onClick={props.handleClick}>
          Get Weather
        </button>
      ) : (
        <p className="weather-info">
          <span id="weather-info__city">{`${props.city}, `}</span>
          <span id="weather-info__country">{props.country}</span>
          <span id="weather-info__temp">{props.temp}</span>
        </p>
      )}
    </div>
  );
};

export default WeatherInfo;
