import {createSomeElement} from "../../utils/render.js";

export default class AbstractComponent {
  constructor() {
    if (new.target === AbstractComponent) {
      throw new Error(
          `Can't instantiate AbstractComponent, only concrete one.`
      );
    }
    this._element = null;
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
  }

  getElement() {
    if (!this._element) {
      this._element = createSomeElement(this.getTemplate());
    }

    return this._element;
  }
  addClass(addedClass) {
    this.getElement().classList.add(addedClass);
  }

  removeClass(removedClass) {
    this.getElement().classList.add(removedClass);
  }

  removeElement() {
    this._element = null;
  }
}
