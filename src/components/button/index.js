import AbstractComponent from "../abstract-component";

const createTemplate = (type, text, classModifyer, link) => {
  if (type === `link`) {
    return (
      `<a href="${link}" class="btn ${classModifyer ? `btn--${classModifyer}` : ``}">${text}</a>`
    );
  }
  return (
    `<button class="btn ${classModifyer ? `btn--${classModifyer}` : ``}" type="${type}">${text}</button>`
  );
};

export default class extends AbstractComponent {
  constructor(type, text, classModifyer = ``, link = `#`) {
    super();
    this._type = type;
    this._text = text;
    this._link = link;
    this._classModifyer = classModifyer;
  }

  getTemplate() {
    return createTemplate(this._type, this._text, this._classModifyer, this._link);
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
