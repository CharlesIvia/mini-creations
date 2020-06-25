//DOM manipulation if user has connectivity
function userHasNetwork(online) {
  //Udate the DOM to reflect current status
  const element = document.querySelector(".status");
  if (online) {
    element.classList.remove("offline");
    element.classList.add("online");
    element.innerText = "Online";
  } else {
    element.classList.remove("online");
    element.classList.add("offline");
    element.innerText = "Offline";
  }
}

//Check connection when page initially loads

window.addEventListener("load", () => {
  userHasNetwork(navigator.onLine);
});

//Listen for network changes

window.addEventListener("load", () => {
  userHasNetwork(navigator.onLine);

  window.addEventListener("online", () => {
    //Set userHasNetwork to online when they change to online
    userHasNetwork(true);
  });

  window.addEventListener("offline", () => {
    //Set userHasNetwork to offline when they change to offline
    userHasNetwork(false);
  });
});
