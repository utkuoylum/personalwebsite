// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// scroll sections
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");










window.onscroll = (e) => {
sections.forEach(sec => {
  let top = window.scrollY;
  let offset = sec.offsetTop - 100;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id')

  if(top >= offset && top < offset + height) {
    navLinks.forEach(links => {
      links.classList.remove('active');
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    })
}})


let header = document.querySelector(".header");
header.classList.toggle('sticky', window.scrollY > 100)
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
