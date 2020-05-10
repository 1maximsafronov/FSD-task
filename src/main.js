import './sass/style.scss';
import {disableForm} from "./utils/form-actions.js";
import {RenderPosition, render} from "./utils/render.js";
import LoginFormComponent from "./components/login-form";
import ButtonComponent from "./components/button";
import CustomTextFieldComponent from "./components/custom-text-field";
import CustomRangeSliderComponent from "./components/custom-range-slider";

const main = document.querySelector(`.main`);
const loginForm = new LoginFormComponent();
const loginBtn = new ButtonComponent(`button`, `Войти`);
const loginField = new CustomTextFieldComponent(`Логин`, `login`, `login`);
const range = new CustomRangeSliderComponent(`Фильтр цены`, `5 000₽ - 10 000₽`);

loginField.getElement().classList.add(`login-form__text-field`);
loginBtn.getElement().classList.add(`login-form__btn`);

loginBtn.setClickHandler(()=>{
  disableForm(loginForm.getElement());
});
render(loginForm.getElement(), loginField.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), range.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), loginBtn.getElement(), RenderPosition.BEFOREEND);

render(main, loginForm.getElement(), RenderPosition.BEFOREEND);
