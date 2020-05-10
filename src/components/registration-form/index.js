import './style.scss';
// import {disableForm} from "./utils/form-actions.js";
import {createSomeElement, render, RenderPosition} from "../../utils/render.js";
import CustomTextFieldComponent from "../custom-text-field";
import CustomTitleH1Component from "../custom-title-h1";
import CustomTogglerComponent from "../custom-toggler";
import CustomRadiobuttonComponent from "../custom-radiobutton";
import ButtonComponent from "../button";

const createTemplate = () => {
  return (
    `<form class="registration-form">
      <div class="registration-form__gender"></div>
      <div class="registration-form__isRegistered">
        <p class="registration-form__question">Нет аккаунта на Toxin?</>
      </div>
    </form>`
  );
};

const renderLoginFormContent = (container) =>{
  const registrFormTitl = new CustomTitleH1Component(`Регистрация аккаунта`);
  const nameField = new CustomTextFieldComponent({
    label: `Имя пользователя`,
    isLabelShown: 0,
    name: `user-name`,
    id: `user-name`,
    placeholder: `Имя`
  });

  const surnameField = new CustomTextFieldComponent({
    label: `Фамилия Пользователя`,
    isLabelShown: 0,
    name: `user-surname`,
    id: `user-surname`,
    placeholder: `Фамилия`
  });
  const maleRadio = new CustomRadiobuttonComponent(`Мужчина`, `gender`, `male-gender`);
  const femaleRadio = new CustomRadiobuttonComponent(`Женщина`, `gender`, `female-gender`);

  const birthdayField = new CustomTextFieldComponent({
    label: `Дата рождения`,
    isLabelShown: 1,
    name: `user-birthday`,
    id: `user-birthday`,
    placeholder: `ДД.ММ.ГГГГ`
  });

  const loginField = new CustomTextFieldComponent({
    label: `данные для входа в сервис`,
    isLabelShown: 1,
    name: `user-email`,
    id: `user-email`,
    placeholder: `Emain`
  });

  const passField = new CustomTextFieldComponent({
    label: `Введите пароль`,
    isLabelShown: 0,
    name: `user-password`,
    id: `user-password`,
    type: `password`,
    placeholder: `Пароль`
  });

  const subToggler = new CustomTogglerComponent(`Получать спецпредложения`, `subscribe`, `subscribe`);

  const payBtn = new ButtonComponent(`submite`, `перейти к оплате`, `arrow`);
  const loginBtn = new ButtonComponent(`link`, `войти`, `border`, `login.html`);

  maleRadio.addClass(`registration-form__gender-item`);
  maleRadio.setChecked();
  femaleRadio.addClass(`registration-form__gender-item`);

  registrFormTitl.addClass(`registration-form__title`);
  nameField.addClass(`registration-form__text-field`);
  surnameField.addClass(`registration-form__text-field`);
  birthdayField.addClass(`registration-form__text-field`);
  loginField.addClass(`registration-form__text-field`);
  passField.addClass(`registration-form__text-field`);
  payBtn.addClass(`registration-form__btn`);
  loginBtn.addClass(`registration-form__loginBtn`);

  const genderContainer = container.querySelector(`.registration-form__gender`);
  render(genderContainer, maleRadio.getElement(), RenderPosition.BEFOREEND);
  render(genderContainer, femaleRadio.getElement(), RenderPosition.BEFOREEND);

  render(genderContainer, payBtn.getElement(), RenderPosition.AFTER);
  render(genderContainer, subToggler.getElement(), RenderPosition.AFTER);
  render(genderContainer, passField.getElement(), RenderPosition.AFTER);
  render(genderContainer, loginField.getElement(), RenderPosition.AFTER);
  render(genderContainer, birthdayField.getElement(), RenderPosition.AFTER);

  render(container, surnameField.getElement(), RenderPosition.AFTERBEGIN);
  render(container, nameField.getElement(), RenderPosition.AFTERBEGIN);
  render(container, registrFormTitl.getElement(), RenderPosition.AFTERBEGIN);

  const bottomContainer = container.querySelector(`.registration-form__isRegistered`);
  render(bottomContainer, loginBtn.getElement(), RenderPosition.BEFOREEND);
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
