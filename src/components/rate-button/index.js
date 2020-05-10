import './style.scss';
import {createSomeElement} from "../../utils/render.js";
import AbstractComponent from "../abstract-component";

const createTemplate = (setNumber) => {
  return (
    `<ul class="rate-button">
      <li class="rate-button__item">
        <input class="visually-hidden" id="set-number-${setNumber}-star-1" type="checkbox" name="rate" value="1">
        <label class="rate-button__star" for="set-number-${setNumber}-star-1">
          <span class="visually-hidden">1 звезда</span>
        </label>
      </li>
      <li class="rate-button__item">
        <input class="visually-hidden" id="set-number-${setNumber}-star-2" type="checkbox" name="rate" value="2">
        <label class="rate-button__star" for="set-number-${setNumber}-star-2">
          <span class="visually-hidden">2 звезды</span>
        </label>
      </li>
      <li class="rate-button__item">
        <input class="visually-hidden" id="set-number-${setNumber}-star-3" type="checkbox" name="rate" value="3">
        <label class="rate-button__star" for="set-number-${setNumber}-star-3">
          <span class="visually-hidden">3 звезды</span>
        </label>
      </li>
      <li class="rate-button__item">
        <input class="visually-hidden" id="set-number-${setNumber}-star-4" type="checkbox" name="rate" value="4">
        <label class="rate-button__star" for="set-number-${setNumber}-star-4">
          <span class="visually-hidden">4 звезды</span>
        </label>
      </li>
      <li class="rate-button__item">
        <input class="visually-hidden" id="set-number-${setNumber}-star-5" type="checkbox" name="rate" value="5">
        <label class="rate-button__star" for="set-number-${setNumber}-star-5">
          <span class="visually-hidden">5 звезд</span>
        </label>
      </li>
    </ul>`
  );
};

const setHandlers = (rateBtn)=>{
  const inputs = rateBtn.querySelectorAll(`input[type="checkbox"]`);
  const stars = rateBtn.querySelectorAll(`.rate-button__star`);
  const setOnClickHandler = (element) => {
    element.addEventListener(`click`, ()=>{
      inputs.forEach((item) => {
        item.checked = false;
      });

      for (let i = 0; i < stars.length; i++) {
        if (stars[i] === element) {
          break;
        }
        inputs[i].checked = true;
      }

    });
  };

  stars.forEach((star) => {
    setOnClickHandler(star);
  });

};

export default class extends AbstractComponent {
  constructor(setNumber) {
    super();
    this._setNumber = setNumber;
  }

  getTemplate() {
    return createTemplate(this._setNumber);
  }
  getElement() {
    if (!this._element) {
      this._element = createSomeElement(this.getTemplate());
    }
    setHandlers(this._element);
    return this._element;
  }
}
