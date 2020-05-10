import './sass/style.scss';
import {disableForm} from "./utils/form-actions.js";
import {RenderPosition, render} from "./utils/render.js";
import LoginFormComponent from "./components/login-form";
import ButtonComponent from "./components/button";
import CustomTextFieldComponent from "./components/custom-text-field";
import CustomRadiobuttonComponent from "./components/like-button";


const main = document.querySelector(`.main`);
const loginForm = new LoginFormComponent();
const loginBtn = new ButtonComponent(`button`, `Войти`);
const loginField = new CustomTextFieldComponent(`Логин`, `login`, `login`);
const passField = new CustomTextFieldComponent(`Пароль`, `password`, `password`, `password`, ``);
const rememberPass = new CustomRadiobuttonComponent(`12`, `remember-pass`, `remember-pass`);

loginField.getElement().classList.add(`login-form__text-field`);
passField.getElement().classList.add(`login-form__text-field`);
loginBtn.getElement().classList.add(`login-form__btn`);
rememberPass.getElement().classList.add(`login-form__remember-pass`);

loginBtn.setClickHandler(()=>{
  disableForm(loginForm.getElement());
});
render(loginForm.getElement(), loginField.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), passField.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), rememberPass.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), loginBtn.getElement(), RenderPosition.BEFOREEND);

render(main, loginForm.getElement(), RenderPosition.BEFOREEND);
