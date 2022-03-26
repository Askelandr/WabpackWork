//Slider using the constructor function
/**
 * @constructor
 * @param {array} array - array of links to the photo@
 */
export default class SliderFactory {
  constructor(array) {
    this.imgSliderArray = array;
    this.leftButton = null;
    this.rightButton = null;
    this.imgSlider = null;
    this.a = 0;
  }

  /**
   * The method launches a slider with the necessary data
   * @param {string} id - id DIV element slider
   * @param {string} url - url for the initial image in the slider
   */
  start = function (id, url) {
    let elemId = document.querySelector("#" + id);
    this.leftButton = elemId.querySelector("#left-button");
    this.rightButton = elemId.querySelector("#right-button");
    this.imgSlider = elemId.querySelector(".img-slider");
    this.imgSlider.src = url;
    elemId.addEventListener("click", (e) => {
      this.putButtonSlider(e);
    });

    this.leftButton.disabled = true;
    this.leftButton.style.opacity = 0.3;
  };
  /**
   * The function handles the event of pressing the left or right button
   * @param {event} event
   */

  putButtonSlider = function (event) {
    if (event.target.value === "left") {
      this.a--;
      this.imgSlider.src = this.imgSliderArray[this.a];
      this.rightButton.disabled = false;
      this.rightButton.style.opacity = 1;

      if (this.a === 0) {
        this.leftButton.disabled = true;
        this.leftButton.style.opacity = 0.3;
        this.imgSlider.src = this.imgSliderArray[this.a];
      }
    } else if (event.target.value === "right") {
      this.imgSlider.src = this.imgSliderArray[this.a];
      this.a++;
      this.leftButton.disabled = false;
      this.leftButton.style.opacity = 1;
      if (this.a === this.imgSliderArray.length - 1) {
        this.rightButton.disabled = true;
        this.rightButton.style.opacity = 0.3;
        this.imgSlider.src = this.imgSliderArray[this.a];
      }
    }
  };
}
