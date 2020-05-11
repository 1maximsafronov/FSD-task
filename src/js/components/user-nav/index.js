import AbstractComponent from "../abstract-component";
import {createSomeElement, render, RenderPosition} from "../../utils/render.js";
import ButtonComponent from "../button";

const createUserLinkTemplate = () => {
  return `<a class="user-nav__username" href="#">Cosmin Negoita</a>`;
};
const createTemplate = (isLogined) => {

  return (
    `<div class="user-nav ${isLogined ? `user-nav--logined` : `123`}">

    </div>`
  );
};

const renderUserNav = (container, status)=>{
  if (status) {
    const username = createSomeElement(createUserLinkTemplate());
    render(container, username, RenderPosition.BEFOREEND);
  } else {
    const loginBtn = new ButtonComponent(`link`, `login`, `border`, `login.html`);
    const regBtn = new ButtonComponent(`link`, `REGISTER`, ``, `registration.html`);
    loginBtn.addClass(`user-nav__btn`);
    regBtn.addClass(`user-nav__btn`);
    render(container, loginBtn.getElement(), RenderPosition.BEFOREEND);
    render(container, regBtn.getElement(), RenderPosition.BEFOREEND);
  }
};

const checkStatus = (status) =>{
  if (status === `logined`) {
    return true;
  }
  return false;
};

export default class extends AbstractComponent {
  constructor(status) {
    super();
    this._status = status;
  }

  getTemplate() {
    return createTemplate(checkStatus(this._status));
  }

  getElement() {
    if (!this._element) {
      this._renderContent();
    }

    return this._element;
  }

  _renderContent() {
    this._element = createSomeElement(this.getTemplate());
    renderUserNav(this._element, checkStatus(this._status));
  }
}
