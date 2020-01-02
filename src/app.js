(function() {
  const elements = ["app", "loading-message", "main"]
    .reduce((obj, id) => {
      obj[id] = document.getElementById(id);
      obj.displayValues[id] = obj[id].style["display"] === "none" ? "block" : obj[id].style["display"];
      return obj;
    }, { displayValues: { } });

  const util = {
    delay: ms => new Promise(r => setTimeout(r, ms)),
    hide: el => el.style["display"] = "none",
    show: el => el.style["display"] = elements.displayValues[el.id],
  };

  async function bootstrap() {
    await util.delay(300);
    util.hide(elements["loading-message"]);
    util.show(elements["main"]);
  }
  
  document.addEventListener("DOMContentLoaded", bootstrap);
}());
