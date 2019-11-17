class CookieUtil {
  setCookie(cname, cvalue, exdays) {
    let currentValues = this.getCookie(cname)
      .split(",")
      .filter(e => e !== "");
    if (!currentValues.includes(cvalue)) {
      let d = new Date();
      currentValues.push(cvalue);
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie =
        cname + "=" + currentValues.join(",") + ";" + expires + ";path=/";
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
}

export default CookieUtil;
