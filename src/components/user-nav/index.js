import './style.scss';
import AbstractComponent from "../abstract-component";
import {createSomeElement, render, RenderPosition} from "../../utils/render.js";
import ButtonComponent from "../button";

const createUserLinkTemplate = () => {
  return `<a class="user-nav__username" href="#">Cosmin Negoita</a>`;
};
const createTemplate = (isLogined) => {

  return (
    `<div class="user-nav ${isLogined ? `user-nav--logined` : ``}">

    </div>`
  );
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
    return createTemplate(false);
  }

  getElement() {
    if (checkStatus(this._status)) {
      this._element = createSomeElement(createTemplate(true));
      let userLink = createSomeElement(createUserLinkTemplate());
      render(this._element, userLink, RenderPosition.BEFOREEND);
    } else {
      this._element = createSomeElement(this.getTemplate());
      const login = new ButtonComponent(`link`, `Login`, `border`, `login.html`);
      login.addClass(`user-nav__btn`);
      register.addClass(`user-nav__btn`);
      const register = new ButtonComponent(`link`,
          `Register`, ``, `register.html`);

      login.addClass(`user-nav__btn`);
      register.addClass(`user-nav__btn`);

      render(this._element, login.getElement(), RenderPosition.BEFOREEND);
      render(this._element, register.getElement(), RenderPosition.BEFOREEND);
    }

    return this._element;
  }
}
