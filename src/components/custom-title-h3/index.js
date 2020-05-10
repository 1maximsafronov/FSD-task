import './style.scss';
import AbstractComponent from "../abstract-component";

const createTemplate = (title) => {
  return (
    `<h2 class="custom-title-h3">${title}</h2>`
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
