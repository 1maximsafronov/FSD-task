import './sass/style.scss';
import {disableForm} from "./utils/form-actions.js";
import {RenderPosition, render} from "./utils/render.js";
import LoginFormComponent from "./components/login-form";
import ButtonComponent from "./components/button";
import CustomTextFieldComponent from "./components/custom-text-field";
import CustomBulletListComponent from "./components/custom-bullet-list";

const main = document.querySelector(`.main`);
const loginForm = new LoginFormComponent();
const loginBtn = new ButtonComponent(`button`, `Войти`);
const loginField = new CustomTextFieldComponent(`Логин`, `login`, `login`);
const list = new CustomBulletListComponent([`Нельзя с питомцами`, `Без вечеринок и мероприятий`, `Время прибытия — после 13:00,
а выезд до 12:00`]);


loginField.getElement().classList.add(`login-form__text-field`);
loginBtn.getElement().classList.add(`login-form__btn`);

loginBtn.setClickHandler(()=>{
  disableForm(loginForm.getElement());
});
render(loginForm.getElement(), loginField.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), list.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), loginBtn.getElement(), RenderPosition.BEFOREEND);

render(main, loginForm.getElement(), RenderPosition.BEFOREEND);
