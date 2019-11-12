import { app, unitsMetric } from "./constants";
import { dividedWeatherByDays } from "../utility/dividedWeatherByDays";

class WeatherProvider {
  getForecastWeather(city) {
    const { source, key } = app;
    if (city !== "") {
      return fetch(source + city + unitsMetric + key)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          return {
            cityName: data.city.name,
            country: data.city.country,
            cityData: dividedWeatherByDays(data.list)
          };
        })
        .catch(function() {});
    }
    return this.state;
  }
}

export default WeatherProvider;
