import { imgAPiSource, png, d } from "./constants";

export function buildingAnUrlImageString(icon) {
  return imgAPiSource + icon.replace(/.$/, d) + png;
}

export function correctDateExpression(date) {
  return date.substring(10, 16);
}

export function capitalizeFirstLetter(string) {
  const result = string.charAt(0).toUpperCase() + string.slice(1);
  return result;
}
