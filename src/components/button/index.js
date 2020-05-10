import './style.scss';
import AbstractComponent from "../abstract-component";

const createTemplate = (type, text) => {
  return (
    `<button class="btn" type="${type}">${text}</button>`
  );
};

export default class extends AbstractComponent {
  constructor(type, text) {
    super();
    this._type = type;
    this._text = text;
  }

  getTemplate() {
    return createTemplate(this._type, this._text);
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
