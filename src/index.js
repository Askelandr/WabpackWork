import selectTab from "./js/selecttab";
import startModalWindow from "./js/modalwindow";
import click from "./js/click";
import selectPerson from "./js/selectperson";
import validInput from "./js/validinput";
import SliderFactory from "./js/slider";
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
let ImgSlider = [
  "https://wallbox.ru/wallpapers/main2/201646/kosmos-art-vselennaa-planeta-galaktika-zemla.jpg",
  "https://poisknews.ru/wp-content/uploads/2020/03/shutterstock_1072726052.jpg",
  "https://webpulse.imgsmail.ru/imgpreview?key=pic3047381702879972355&mb=pulse",
  "https://masyamba.ru/земля-из-космоса/43-фото-земли-из-космоса.jpg",
  "https://avatars.mds.yandex.net/get-zen_doc/3418917/pub_6055de6208506c23b0851696_6055e1d383224c57fbb2313e/scale_1200",
  "https://mirkosmosa.ru/download/news/7/6422.jpg",
  "https://f.vividscreen.info/soft/f0708836466ed29ca8ed153d1b81d11b/Rings-Of-Saturn-1920x1200.jpg",
  "https://interesnyefakty.org/wp-content/uploads/Planeta-Pluton-1.jpg",
];
let startImg =
  "https://i.pinimg.com/736x/01/c6/19/01c6195a2bb7bfd7b73cd9a9a783f70b.jpg";
let slider1 = new SliderFactory(ImgSlider);
slider1.start("slider1", startImg);

/**Инициализация секции подписки */
let validInputFooter = document.querySelector("#btn-footer");
validInputFooter.addEventListener("click", (e) => {
  validInput("#input-footer", "#email-error-footer");
});
