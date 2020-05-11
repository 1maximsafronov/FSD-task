// import {disableForm} from "./utils/form-actions.js";
import {createSomeElement, render, RenderPosition} from "../../utils/render.js";
import LogotypeComponent from "../logotype";
import SiteNavComponent from "../site-nav";
import UserNavComponent from "../user-nav";

const createTemplate = () => {
  return (
    `<nav class="main-nav">
      <div class="main-nav__wrapper container"></div>
    </nav>`
  );
};

const renderMainNav = (container, status) =>{
  let innerContainer = container.querySelector(`.main-nav__wrapper`);
  const logotype = new LogotypeComponent(`#`);
  const siteNav = new SiteNavComponent();
  const userNav = new UserNavComponent(status);

  logotype.addClass(`main-nav__logo`);
  siteNav.addClass(`main-nav__site-nav`);
  userNav.addClass(`main-nav__user-nav`);
  render(innerContainer, logotype.getElement(), RenderPosition.BEFOREEND);
  render(innerContainer, siteNav.getElement(), RenderPosition.BEFOREEND);
  render(innerContainer, userNav.getElement(), RenderPosition.BEFOREEND);

};

export default class {
  constructor(status) {
    this._element = null;
    this._status = status;
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
    renderMainNav(this._element, this._status);
  }

  removeElement() {
    this._element = null;
  }
}
