import AbstractComponent from "../abstract-component";

const createTemplate = (elements) => {
  let listElements = ``;

  elements.forEach((item) => {
    listElements += `<li class="custom-bullet-lis__item">${item}</li>`;
  });

  return (
    `<ul class="custom-bullet-lis">
      ${listElements}
    </ul>`
  );
};

export default class extends AbstractComponent {
  constructor(elements) {
    super();
    this._elements = elements;
  }

  getTemplate() {
    return createTemplate(this._elements);
  }
}
