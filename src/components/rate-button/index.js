import './style.scss';
import {createSomeElement} from "../../utils/render.js";
import AbstractComponent from "../abstract-component";

const createTemplate = () => {
  return (
    `<ul class="rate-button">
      <li class="rate-button__item">
        <input class="visually-hidden" id="1-star" type="checkbox" name="rate" value="1">
        <label class="rate-button__star" for="1-star">
          <span class="visually-hidden">1 звезда</span>
        </label>
      </li>
      <li class="rate-button__item">
        <input class="visually-hidden" id="2-star" type="checkbox" name="rate" value="2">
        <label class="rate-button__star" for="2-star">
          <span class="visually-hidden">2 звезды</span>
        </label>
      </li>
      <li class="rate-button__item">
        <input class="visually-hidden" id="3-star" type="checkbox" name="rate" value="3">
        <label class="rate-button__star" for="3-star">
          <span class="visually-hidden">3 звезды</span>
        </label>
      </li>
      <li class="rate-button__item">
        <input class="visually-hidden" id="4-star" type="checkbox" name="rate" value="4">
        <label class="rate-button__star" for="4-star">
          <span class="visually-hidden">4 звезды</span>
        </label>
      </li>
      <li class="rate-button__item">
        <input class="visually-hidden" id="5-star" type="checkbox" name="rate" value="5">
        <label class="rate-button__star" for="5-star">
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
  constructor() {
    super();
  }

  getTemplate() {
    return createTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = createSomeElement(this.getTemplate());
    }
    setHandlers(this._element);
    return this._element;
  }
}
