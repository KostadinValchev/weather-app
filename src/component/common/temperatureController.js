export function temperatureCalculation(dailyForecast, type) {
  let tempType = type === "max" ? "temp_max" : "temp_min";
  let dailyTemperatures = dailyForecast.map(d => d.main[tempType]);
  return tempType === "temp_max"
    ? Math.max(...dailyTemperatures)
    : Math.min(...dailyTemperatures);
}
