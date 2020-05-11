import AbstractComponent from "../abstract-component";

const createTemplate = (label, name, id, value) => {
  return (
    `<p class="custom-toggler">
      <input class="visually-hidden" type="checkbox" name="${name}" id="${id}" value="${value}">
      <label for="${id}">${label}</label>
    </p>`
  );
};

export default class extends AbstractComponent {
  constructor(label, name, id, value = ``) {
    super();
    this._label = label;
    this._name = name;
    this._id = id;
    this._value = value;
  }

  getTemplate() {
    return createTemplate(this._label, this._name, this._id, this._value);
  }

}
