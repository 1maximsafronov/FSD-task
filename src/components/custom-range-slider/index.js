import AbstractComponent from "../abstract-component";

const createTemplate = (title, value) => {

  return (
    `<div class="custom-range-slider">
      <div class="custom-range-slider__header">
        <h3 class="custom-range-slider__title">${title}</h3>
        <p class="custom-range-slider__value">${value}</p>
      </div>
      <div class="custom-range-slider__scale">
        <div class="custom-range-slider__bar"></div>
        <button class="custom-range-slider__toggler custom-range-slider__toggler--min" type="button"></button>
        <button class="custom-range-slider__toggler custom-range-slider__toggler--max" type="button"></button>
      </div>
    </div>`
  );
};

export default class extends AbstractComponent {
  constructor(title = ``, value = ``) {
    super();
    this._label = title;
    this._value = value;
  }

  getTemplate() {
    return createTemplate(this._label, this._value);
  }
}
