import './style.scss';
import AbstractComponent from "../abstract-component";

const createTemplate = (label, name, id, type) => {
  return (
    `<p class="custom-text-field">
    <label for="${id}">${label}</label>
    <input type="${type}" name="${name}" id="${id}">
    </p>`
  );
};

export default class extends AbstractComponent {
  constructor(label, name, id, type = `text`) {
    super();
    this._label = label;
    this._name = name;
    this._id = id;
    this._type = type;
  }

  getTemplate() {
    return createTemplate(this._label, this._name, this._id, this._type);
  }
}
