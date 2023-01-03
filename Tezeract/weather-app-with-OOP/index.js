//storage//
class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = "Tampa";
    this.defaultState = "FL";
  }

  getLocationData() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }

    if (localStorage.getItem("state") === null) {
      this.state = this.defaultState;
    } else {
      this.state = localStorage.getItem("state");
    }

    return {
      city: this.city,
      state: this.state,
    };
  }

  setLocationData(city, state) {
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  }
}

//weather//
class Weather {
  constructor(city, state) {
    this.apiKey = "99dfe35fcb7de1ee";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`
    );

    const responseData = await response.json();

    return responseData.current_observation;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
//ui//
class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.dewpoint = document.getElementById("w-dewpoint");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttribute("src", weather.icon_url);
    this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like: ${weather.feelslike_string}`;
    this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
    this.wind.textContent = `Wind: ${weather.wind_string}`;
  }
}
//app.js//
// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
