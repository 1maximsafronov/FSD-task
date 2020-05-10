import './style.scss';
import AbstractComponent from "../abstract-component";

const createTemplate = (text) => {
  return (
    `<h1>${text}</h1>`
  );
};

export default class extends AbstractComponent {
  constructor(text) {
    super();
    this._text = text;
  }

  getTemplate() {
    return createTemplate(this._text);
  }

}
