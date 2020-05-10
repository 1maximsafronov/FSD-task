import './style.scss';
import {createSomeElement} from "../../utils/render.js";

const createTemplate = () => {
  return (
    `<form class="login-form"></form>`
  );
};

export default class {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createSomeElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
