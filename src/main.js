import './sass/style.scss';
import {disableForm} from "./utils/form-actions.js";
import {RenderPosition, render} from "./utils/render.js";
import LoginFormComponent from "./components/login-form";
import ButtonComponent from "./components/button";
import CustomTextFieldComponent from "./components/custom-text-field";
import CheckboxListComponent from "./components/expandable-checkbox-list";
import CustomTitleH1Component from "./components/custom-title-h1";
const main = document.querySelector(`.main`);
const loginForm = new LoginFormComponent();
const loginBtn = new ButtonComponent(`button`, `Войти`);
const loginField = new CustomTextFieldComponent(`Логин`, `login`, `login`);
const loginField2 = new CustomTextFieldComponent(`Пароль`, `password`, `password`, `password`);

const title = new CustomTitleH1Component(`Форма входа`);

const elements = [
  {
    label: `Wi-Fi`,
    name: `firs`,
    id: `firs`,
  },
  {
    label: `Холодильник`,
    name: `second`,
    id: `second`,
  }, {
    label: `Балкон`,
    name: `third`,
    id: `third`,
  }
];
const checkboxList = new CheckboxListComponent(`Выберете функции`, elements);
loginField.addClass(`login-form__text-field`);
loginField2.addClass(`login-form__text-field`);
loginBtn.addClass(`login-form__btn`);

loginBtn.setClickHandler(()=>{
  disableForm(loginForm.getElement());
});
render(loginForm.getElement(), title.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), loginField.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), loginField2.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), checkboxList.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), loginBtn.getElement(), RenderPosition.BEFOREEND);

render(main, loginForm.getElement(), RenderPosition.BEFOREEND);
