import selectTab from "./js/selecttab";
import showSlides from "./js/newslider";
import startModalWindow from "./js/modalwindow";
import click from "./js/click";
import selectPerson from "./js/selectperson";
import validInput from "./js/validinput";
import SliderFactory from "./js/slider";
import json from "./json/json.json";
import "./css/style.css";

/**Блок инициализации для секции tab */

let epic = document.querySelector("#epic");

let fotoDay = document.querySelector("#foto-day");

let roverFoto = document.querySelector("#rover-foto");

let meteors = document.querySelector("#near-object");

let marsWeather = document.querySelector("#mars-weather");

click(epic, selectTab);
click(fotoDay, selectTab);
click(roverFoto, selectTab);
click(meteors, selectTab);
click(marsWeather, selectTab);

/**Блок инициализации вывода отзывов клиентов */

let el = document.querySelector("#person");

let chenge1 = el.querySelector("#chenge1");
let chenge2 = el.querySelector("#chenge2");
let chenge3 = el.querySelector("#chenge3");

click(chenge1, selectPerson);
click(chenge2, selectPerson);
click(chenge3, selectPerson);

/**Инициализация модальных окон */
startModalWindow(".body", "#click-button");
startModalWindow(".body", "#click-button1");
startModalWindow(".body", "#click-button2");

/**Инициализация слайдера */
let ImgSlider = json[1].ImgSlider;

let startImg =
  "https://i.pinimg.com/736x/01/c6/19/01c6195a2bb7bfd7b73cd9a9a783f70b.jpg";
let slider1 = new SliderFactory(ImgSlider);
slider1.start("slider1", startImg);

/**Инициализация секции подписки */
let validInputFooter = document.querySelector("#btn-footer");
validInputFooter.addEventListener("click", (e) => {
  validInput("#input-footer", "#email-error-footer");
});

/**Инициализация нового слайдера */
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 0;
/* Вызshowываем функцию, которая реализована ниже: */
showSlides(slideIndex);
let slides = document.getElementsByClassName("item");

let newNextSlide = document.querySelector(".next");
newNextSlide.addEventListener("click", (e) => {
  if (slideIndex === slides.length) {
    return;
  }
  nextSlide();
});

let newPreviousSlide = document.querySelector(".previous");
newPreviousSlide.addEventListener("click", (e) => {
  if (slideIndex === 0) {
    return;
  }
  previousSlide();
});

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
  showSlides((slideIndex += 1));
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
  showSlides((slideIndex -= 1));
}
