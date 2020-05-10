import './style.scss';
import AbstractComponent from "../abstract-component";

const createTemplate = (title) => {
  return (
    `<h1 class="custom-title-h1">${title}</h1>`
  );
};

export default class extends AbstractComponent {
  constructor(title) {
    super();
    this._title = title;
  }

  getTemplate() {
    return createTemplate(this._title);
  }

}
