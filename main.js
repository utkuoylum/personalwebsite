// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = (e) => {
  // sticky header
  // remove toggle icon and navbar when click navbar links (scroll)
  // animation footer on scroll
};
let avatar = document.querySelector("#avatar");
let berlin = document.querySelector(".berlin");

avatar.addEventListener("mouseover", (e) =>
  {berlin.classList.add("slide-down")}
);
avatar.addEventListener("mouseout", (e) =>
  {berlin.classList.remove("slide-down")}
);

let hireMe = document.querySelector('#hire-me');
hireMe.addEventListener("click", (e) => {
  window.location.href = 'mailto:email@example.com';
})
