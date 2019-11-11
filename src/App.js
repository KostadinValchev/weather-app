import React, { Component } from "react";
import Header from "./component/header";
import Search from "./component/Form/search";
import FiveDaysForecasts from "./component/Forecasts/fiveDaysForecasts";
import Jumbotron from "./component/jumbotron";
import WeatherProvider from "./provider/weatherProvider";
import "./App.css";
// import Footer from "./component/footer";

class App extends Component {
  constructor() {
    super();
    this.weatherProvider = new WeatherProvider();
  }
  state = {
    cityData: [],
    selectedDay: { isSelected: false },
    cityName: "",
    country: "",
    isSelected: false
  };

  handleSearchSubmit = city => {
    this.weatherProvider
      .getForecastWeather(city)
      .then(result => this.setState({ ...result }));
  };

  handleDaySelected = dayName => {
    if (dayName) {
      const days = [...this.state.cityData];
      const selectedDay = days.filter(day => day.name === dayName);
      selectedDay.isSelected = true;
      this.setState({ selectedDay, isSelected: true });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Jumbotron />
        <Search onSearchSubmit={this.handleSearchSubmit} />
        <FiveDaysForecasts
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
