import './style.scss';
import {createSomeElement, render, RenderPosition} from "../../utils/render.js";
import AbstractComponent from "../abstract-component";
import SocialComponent from "../social";

const createTemplate = () => {
  return (
    `<div class="copyright">
      <div class="copyright__wrapper container">
        <p class="copyright__text">Copyright © 2018 Toxin UI Kit. All rights reserved.</p>
      </div>
    </div>`
  );
};
const renderCopyrightContent = (container) => {
  const innerContainer = container.querySelector(`.container`);
  const socialMenu = new SocialComponent();
  socialMenu.addClass(`copyright__social`);
  render(innerContainer, socialMenu.getElement(), RenderPosition.BEFOREEND);
};


export default class extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return createTemplate();
  }

  getElement() {
    if (!this._element) {
      this._renderContent();
    }

    return this._element;
  }

  _renderContent() {
    this._element = createSomeElement(this.getTemplate());
    renderCopyrightContent(this._element);
  }

}
