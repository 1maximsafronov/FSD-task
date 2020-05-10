import './style.scss';
import AbstractComponent from "../abstract-component";

const createTemplate = (label, isLabelShown, name, id, type, placeholder) => {
  return (
    `<p class="custom-text-field">
    <label for="${id}" class="${isLabelShown ? `` : `visually-hidden`}">${label}</label>
    <input type="${type}" name="${name}" id="${id}" placeholder="${placeholder}">
    </p>`
  );
};

export default class extends AbstractComponent {
  constructor({label, isLabelShown, name, id, type = `text`, placeholder = ``}) {
    super();
    this._label = label;
    this._isLabelShown = isLabelShown;
    this._name = name;
    this._id = id;
    this._type = type;
    this._placeholder = placeholder;
  }

  getTemplate() {
    return createTemplate(this._label, this._isLabelShown, this._name, this._id, this._type, this._placeholder);
  }
}
