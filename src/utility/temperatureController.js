import { maxTemperature, minTemperature } from "./constants";
import { max } from "../globalConstants";

export function temperatureCalculation(dailyForecast, type) {
  let tempType = type === max ? maxTemperature : minTemperature;
  let dailyTemperatures = dailyForecast.map(d => d.main[tempType]);
  return tempType === maxTemperature
    ? Math.max(...dailyTemperatures)
    : Math.min(...dailyTemperatures);
}
