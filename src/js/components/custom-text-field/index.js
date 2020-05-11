import AbstractComponent from "../abstract-component";

const createTemplate = (label, isLabelShown, name, id, type, placeholder, modifier) => {

  let submiteButton = ``;
  if (modifier === `button`) {
    submiteButton = `<button class="custom-text-field__arrow-btn" type="submite"></button>`;
  }
  return (
    `<p class="custom-text-field">
    <label for="${id}" class="${isLabelShown ? `` : `visually-hidden`}">${label}</label>
    <input type="${type}" name="${name}" id="${id}" placeholder="${placeholder}">
      ${submiteButton}
    </p>`
  );
};

export default class extends AbstractComponent {
  constructor({label, isLabelShown, name, id, type = `text`, placeholder = ``, modifier = ``}) {
    super();
    this._label = label;
    this._isLabelShown = isLabelShown;
    this._name = name;
    this._id = id;
    this._type = type;
    this._placeholder = placeholder;
    this._modifier = modifier;
  }

  getTemplate() {
    return createTemplate(this._label, this._isLabelShown, this._name, this._id, this._type, this._placeholder, this._modifier);
  }
}
