import {render, createSomeElement, RenderPosition} from "../../utils/render.js";

import AbstractComponent from "../abstract-component";
import CustomCheckboxComponent from "../custom-checkbox";

const createItemTemplate = () => {
  return (
    `<li class="expandable-checkbox-list__item"></li>`
  );
};

const createListElements = (elements, container) => {
  const listContainer = container.querySelector(`.expandable-checkbox-list__list`);
  elements.forEach((item) => {
    let listItem = createSomeElement(createItemTemplate());
    const newCheckbox = new CustomCheckboxComponent(item.label, item.name, item.id);
    render(listItem, newCheckbox.getElement(), RenderPosition.BEFOREEND);
    render(listContainer, listItem, RenderPosition.BEFOREEND);
  });

  container.querySelector(`.expandable-checkbox-list__toggler`).addEventListener(`click`, ()=>{
    container.classList.toggle(`expandable-checkbox-list--closed`);
  });

  return container;


};

const createTemplate = (title) => {


  return (
    `<div class="expandable-checkbox-list expandable-checkbox-list--closed">
      <div class="expandable-checkbox-list__toggler" type="button">${title}</div>
      <ul class="expandable-checkbox-list__list">
      </ul>
    </dvi>`
  );
};

export default class extends AbstractComponent {
  constructor(title, elements) {
    super();
    this._title = title;
    this._elements = elements;
  }

  getTemplate() {
    return createTemplate(this._title);
  }

  getElement() {
    this._element = createSomeElement(this.getTemplate());
    this.renderList();
    return this._element;
  }

  renderList() {
    this._element = createListElements(this._elements, this._element);
  }
}
