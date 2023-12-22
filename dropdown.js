const dropLink = document.querySelector(".droplink");
const dropLinks = document.querySelectorAll(".dropmenu li a");
const dropMenu = document.querySelector(".dropmenu");
dropLink.addEventListener("click", () => {
  dropMenu.classList.toggle("show");
});

dropLinks.forEach((a) => {
  a.addEventListener("click", () => {
    dropMenu.classList.remove("show");
  });
});
