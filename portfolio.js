let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");
let navbar = document.querySelector(".header .flex .navbar");
let header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("hide", window.scrollY > 0);
});

menuBtn.onclick = () => {
  navbar.classList.add("active");
};

closeBtn.onclick = () => {
  navbar.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};
