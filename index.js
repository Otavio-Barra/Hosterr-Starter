const navMenu = document.querySelector("#menu-mobile");
const menuMobile = document.querySelector(".navegation-mobile");

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuMobile.classList.toggle("menu-actived");
});
