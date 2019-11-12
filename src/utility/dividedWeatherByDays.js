import { getDayOfWeek } from "./dateTimeProvider";

export function dividedWeatherByDays(data) {
  let day = getDayOfWeek(data[0].dt_txt);
  let result = [];
  let temp = [];
  for (let i = 0; i < data.length; i++) {
    const currDay = getDayOfWeek(data[i].dt_txt);
    if (day === currDay) {
      temp.push(data[i]);
    } else {
      const obj = { name: day, dayData: temp };
      result.push(obj);
      day = currDay;
      temp = [];
      temp.push(data[i]);
    }
  }
  return result;
}
