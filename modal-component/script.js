//Fetch dom elements and set variables
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.querySelector(".modal-container");

//Toggle

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  openBtn.style.display = "flex";
});
