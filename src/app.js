(function() {
  const appElement = document.getElementById("app");

  function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
  }


  async function bootstrap() {
    await delay(2000);
    appElement.innerHTML = "Done loading!";
  }
  
  document.addEventListener("DOMContentLoaded", bootstrap);
}());
