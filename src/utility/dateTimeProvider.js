import { daysOfWeek } from "./constants";
export function getDayOfWeek(date) {
  var dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? null : daysOfWeek[dayOfWeek];
}
