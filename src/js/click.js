/**
 *Функция исполняемая по клику на объект
 * @param {object} elem
 * @param {function} func
 */
export default function click(elem, func) {
  elem.addEventListener("click", (e) => {
    func(e);
  });
}
