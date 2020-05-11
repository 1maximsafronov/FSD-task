// import {disableForm} from "./utils/form-actions.js";
import {createSomeElement, render, RenderPosition} from "../../utils/render.js";
import CustomTextFieldComponent from "../custom-text-field";
import CustomTitleH1Component from "../custom-title-h1";
import ButtonComponent from "../button";

const createTemplate = () => {
  return (
    `<form class="login-form">
      <div class="login-form__isRegistered">
        <p class="login-form__question">Нет аккаунта на Toxin?</>
      </div>
    </form>`
  );
};

const renderLoginFormContent = (container) =>{
  const loginFormTitl = new CustomTitleH1Component(`Войти`);
  const loginField = new CustomTextFieldComponent({
    label: `Логин`,
    isLabelShown: 0,
    name: `login`,
    id: `login`,
    placeholder: `Email`
  });
  const passField = new CustomTextFieldComponent({
    label: `Пароль`,
    isLabelShown: 0,
    name: `pass`,
    id: `pass`,
    type: `password`,
    placeholder: `Пароль`
  });
  const loginBtn = new ButtonComponent(`submite`, `Войти`, `arrow`);
  const createBtn = new ButtonComponent(`link`, `Создать`, `border`, `registration.html`);
  loginFormTitl.addClass(`login-form__title`);
  loginField.addClass(`login-form__text-field`);
  passField.addClass(`login-form__text-field`);
  loginBtn.addClass(`login-form__btn`);
  createBtn.addClass(`login-form__createBtn`);
  render(container, loginBtn.getElement(), RenderPosition.AFTERBEGIN);
  render(container, passField.getElement(), RenderPosition.AFTERBEGIN);
  render(container, loginField.getElement(), RenderPosition.AFTERBEGIN);
  render(container, loginFormTitl.getElement(), RenderPosition.AFTERBEGIN);
  const bottomContainer = container.querySelector(`.login-form__isRegistered`);
  render(bottomContainer, createBtn.getElement(), RenderPosition.BEFOREEND);
};

export default class {
  constructor() {
    this._element = null;
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
    renderLoginFormContent(this._element);
  }

  removeElement() {
    this._element = null;
  }
}
