//DOM manipulation if user has connectivity
const element = document.querySelector(".status");

function userHasNetwork(online) {
  //Udate the DOM to reflect current status

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
