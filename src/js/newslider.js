export default function showSlides(n) {
  let slideIndex = n;

  /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
  let slides = document.getElementsByClassName("item");

  /* Проверяем количество слайдов: */
  if (n > slides.length) {
    slideIndex = slides.length;
  }
  if (n < 1) {
    slideIndex = 1;
  }

  /* Проходим по каждому слайду в цикле for: */
  for (let slide of slides) {
    slide.style.display = "none";
  }
  /* Делаем элемент блочным: */
  slides[slideIndex - 1].style.display = "block";
}
