export default function showSlides(n, array) {
  let slideIndex = n;

  /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
  // let slides = document.getElementsByClassName("item");

  /* Проходим по каждому слайду в цикле for: */
  for (let slide of array) {
    slide.style.display = "none";
  }
  /* Делаем элемент блочным: */
  array[slideIndex].style.display = "block";
}
