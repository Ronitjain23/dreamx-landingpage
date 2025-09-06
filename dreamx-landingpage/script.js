let sideBar = document.querySelector(".sideBar");
let crossIcon = document.querySelector(".crossIcon");
let menuIcon = document.querySelector(".menuIcon");

menuIcon.addEventListener("click", () => {
  if (sideBar.style.display === "none" || sideBar.style.display === "") {
    sideBar.style.display = "flex";
  }
});

crossIcon.addEventListener("click", () => {
  sideBar.style.display = "none";
});
