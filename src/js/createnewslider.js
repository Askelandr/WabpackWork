import json from "../json/json.json";
export default function createNewSlider() {
  /* Отрисовка необходимого количесва слайдов*/
  let imageForNewSlider = json[2].newSlider;
  /*Находим элемент перед которым будут вставлены слайды*/
  let container = document.getElementById("newSlider");
  /*Создем новые слайды и вставляем их в нужное место документа */

  for (let item of imageForNewSlider) {
    let slideConteiner = document.createElement(`div`);
    slideConteiner.className = "item";
    let putSlide = document.createElement(`img`);
    putSlide.src = item;
    slideConteiner.prepend(putSlide);
    container.prepend(slideConteiner);
  }
}
