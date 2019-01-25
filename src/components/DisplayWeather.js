import React from "react";

import WeatherInfo from "./WeatherInfo";

class DisplayWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      longitude: null,
      latitude: null,
      error: null,
      city: "",
      country: "",
      currentTemp: null,
      isLoading: false
    };
  }

  getWeather = () => {
    this.setState({ isLoading: true });

    const fetch_url =
      "https://cors-anywhere.herokuapp.com/https://fcc-weather-api.glitch.me/api/current?lat=" +
      this.state.latitude +
      "&lon=" +
      this.state.longitude;
    fetch(fetch_url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          city: data.name,
          country: data.sys.country,
          currentTemp: data.main.temp,
          isLoading: false
        })
      );
  };

  getLocation = () => {
    if (navigator.geolocation) {
      const success = position => {
        const lon = position.coords.longitude;
        const lat = position.coords.latitude;

        this.setState({ longitude: lon, latitude: lat }, () => {
          this.getWeather();
        });
      };

      const error = () => {
        this.setState({ error: "Unable to retrieve data" });
      };

      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  render() {
    return (
      <div className="weather-info-container">
        {this.state.isLoading ? (
          <span className="weather-info-note">Loading...</span>
        ) : (
          <WeatherInfo
            city={this.state.city}
            country={this.state.country}
            temp={this.state.currentTemp}
            handleClick={this.getLocation}
          />
        )}
      </div>
    );
  }
}

export default DisplayWeather;
