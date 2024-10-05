let menu = document.querySelector(".burger-menu");
let nav = document.querySelector(".nav-menu");
let links = document.querySelectorAll(".nav-menu li");

console.log(links);

menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

window.addEventListener("scroll", () => {
  nav.classList.add("hidden");
});

links.forEach((e) => {
  e.addEventListener("click", ()=> {
    nav.classList.add("hidden");
  });
});

