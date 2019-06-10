import React, { Component } from "react";
import Header from "./component/header";
import Search from "./component/search";
import WeatherListDays from "./component/weatherListDays";
import {dividedWeatherByDays} from './component/common/dividedWeatherByDays'
import "./App.css";
import Jumbotron from "./component/jumbotron";
import Footer from "./component/footer";

class App extends Component {
  state = {
    app: {
      key: "&appid=3507629448bc60676c80bd0061820d1d",
      source: "http://api.openweathermap.org/data/2.5/forecast?q="
    },
    cityData: [],
    selectedDay: {isSelected: false},
    cityName: "",
    country: "",
    isSelected: false
  };
  handleSearchSubmit = city => {
    if (city !== "") {
      const { source, key } = this.state.app;

      fetch(source + city + "&units=metric" + key)
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            cityName: data.city.name,
            country: data.city.country,
            cityData: dividedWeatherByDays(data.list)
          });
        })
        .catch(function() {});
    }
  };

  handleDaySelected = dayName => {
    if (dayName) {
      const days = [...this.state.cityData]
      const selectedDay = days.filter(day => day.name === dayName )
      selectedDay.isSelected = true;
      this.setState({selectedDay, isSelected: true});
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Jumbotron />
        <Search onSearchSubmit={this.handleSearchSubmit} />
        <WeatherListDays
          data={this.state.cityData}
          cityName={this.state.cityName}
          country={this.state.country}
          onDaySelected={this.handleDaySelected}
          selectedDay={this.state.selectedDay}
          isSelected={this.state.isSelected}
        />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
