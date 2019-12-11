import { capitalizeFirstLetter } from "./stringBuilder";

class CookieUtil {
  setCookie(cname, cvalue, exdays) {
    let currentValues = this.getCookie(cname)
      .split(",")
      .filter(e => e !== "");
    const capitalizedValue = capitalizeFirstLetter(cvalue);
    console.log(capitalizeFirstLetter)
    if (!currentValues.includes(capitalizedValue)) {
      currentValues.push(capitalizedValue);
      let expireTime = this.setCookieExpireTime(exdays);
      document.cookie = document.cookie = this.buildCookie(
        cname,
        currentValues,
        expireTime
      );
    }
  }
  getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  removeValueFromCookie(cname, cvalue, exdays) {
    let currentValues = this.getCookie(cname)
      .split(",")
      .filter(e => e !== cvalue);
    this.deleteCookie(cname);
    let expireTime = this.setCookieExpireTime(exdays);
    document.cookie = this.buildCookie(cname, currentValues, expireTime);
  }
  setCookieExpireTime(exdays) {
    let d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    return "expires=" + d.toUTCString();
  }
  buildCookie(cname, values, expireTime) {
    return cname + "=" + values.join(",") + ";" + expireTime + ";path=/";
  }
  deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
}

export default CookieUtil;
