import { imgAPiSource, png, d } from "./constants";

export function buildingAnUrlImageString(icon) {
  return imgAPiSource + icon.replace(/.$/, d) + png;
}

export function correctDateExpression(date) {
  return date.substring(10, 16);
}
