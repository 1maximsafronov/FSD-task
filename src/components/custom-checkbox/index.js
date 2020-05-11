import AbstractComponent from "../abstract-component";

const createTemplate = (label, name, id) => {
  return (
    `<p class="custom-checkbox">
      <input class="visually-hidden" type="checkbox" name="${name}" id="${id}">
      <label for="${id}">${label}</label>
    </p>`
  );
};

export default class extends AbstractComponent {
  constructor(label, name, id) {
    super();
    this._label = label;
    this._name = name;
    this._id = id;
  }

  getTemplate() {
    return createTemplate(this._label, this._name, this._id);
  }

}
