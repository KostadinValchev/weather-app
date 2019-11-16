import React, { Component } from "react";
import Header from "./component/navigation/header";
import Search from "./component/Form/search";
import FiveDaysForecasts from "./component/Forecasts/fiveDaysForecasts";
import WeatherProvider from "./provider/weatherProvider";
import LoginForm from "./component/Form/loginForm";
import RegisterForm from "./component/Form/registerForm";
import "./App.css";
import Navigation from "./component/navigation/navigation";
import { Switch, Route } from "react-router-dom";
import Footer from "./component/footer";

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
        <Navigation />
        <Switch>
          <Route path="/signin" render={props => <LoginForm {...props} />} />
          <Route
            path="/register"
            render={props => <RegisterForm {...props} />}
          />
          <Route
            path="/"
            exact
            render={props => (
              <React.Fragment>
                <Header />
                <Search onSearchSubmit={this.handleSearchSubmit} {...props} />
                <FiveDaysForecasts
                  data={this.state.cityData}
                  cityName={this.state.cityName}
                  country={this.state.country}
                  onDaySelected={this.handleDaySelected}
                  selectedDay={this.state.selectedDay}
                  isSelected={this.state.isSelected}
                  {...props}
                />
              </React.Fragment>
            )}
          />
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
