//Import CSS
import "./styles/home.css";
import "./styles/header.css";
import "./styles/contact.css";
import "./styles/menu.css";

//Import JS
import firstLoad from "./functions/firstLoad.js";
import render from "./functions/render.js";
import home from "./pages/home.js";
import menu from "./pages/menu.js";
import contact from "./pages/contact.js";

//Loading Page
firstLoad();
// Tab Control Button

const homeBtn = document.querySelector("#home-tab");
const menuBtn = document.querySelector("#menu-tab");
const contactBtn = document.querySelector("#contact-tab");

homeBtn.addEventListener("click", function () {
  render();
  home();
});
menuBtn.addEventListener("click", function () {
  render();
  menu();
});
contactBtn.addEventListener("click", function () {
  render();
  contact();
});
