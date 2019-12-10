import React, { Component } from "react";
import Header from "./component/navigation/header";
import Search from "./component/Form/search";
import FiveDaysForecasts from "./component/Forecasts/fiveDaysForecasts";
import LoginForm from "./component/Form/loginForm";
import RegisterForm from "./component/Form/registerForm";
import NotFound from "./component/not_found/notFound";
import Navigation from "./component/navigation/navigation";
import { Switch, Route, Redirect } from "react-router-dom";
import { validate } from "./component/common/validations";
// import Footer from "./component/footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.weatherProvider = props.provider;
    this.cookies = props.cookies;
  }
  state = {
    cities: [],
    cityData: [],
    selectedDay: { isSelected: false },
    cityName: "",
    country: "",
    isSelected: false,
    errors: ""
  };

  componentWillMount() {
    let defaultCity = this.cookies.getCookie("towns");
    if (defaultCity) {
      let cities = defaultCity.split(",");
      this.weatherProvider
        .getForecastWeather(cities[0])
        .then(result => this.setState({ cities, ...result }));
    }
  }

  handleSearchSubmit = city => {
    const errors = validate(city);
    this.setState({ errors: errors || "" });
    if (errors) return;
    this.weatherProvider.getForecastWeather(city).then(result => {
      if (result) {
        let cities = [...this.state.cities];
        !cities.includes(city) && cities.push(city);
        this.setState({ cities, ...result });
        this.cookies.setCookie("towns", city, 30);
      } else {
        this.setState({ errors: "There is no data on the settlement" });
      }
    });
  };

  handleRemoveCity = city => {
    this.cookies.removeValueFromCookie("towns", city, 30);
    let cities = this.cookies
      .getCookie("towns")
      .split(",")
      .filter(cname => cname !== city);
    this.setState({ cities });
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
        <Navigation
          cities={this.state.cities}
          cityName={this.state.cityName}
          removeCity={this.handleRemoveCity}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <Switch>
          <Route path="/signin" render={props => <LoginForm {...props} />} />
          <Route
            path="/register"
            render={props => <RegisterForm {...props} />}
          />
          <Route path="/not-found" component={NotFound} />
          <Route
            path="/"
            exact
            render={props => (
              <React.Fragment>
                <Header />
                <Search
                  onSearchSubmit={this.handleSearchSubmit}
                  error={this.state.errors}
                  {...props}
                />
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
          <Redirect to="/not-found" />
        </Switch>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
