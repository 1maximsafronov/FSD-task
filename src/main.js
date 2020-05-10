import './sass/style.scss';
import {disableForm} from "./utils/form-actions.js";
import {RenderPosition, render} from "./utils/render.js";
import LoginFormComponent from "./components/login-form";
import ButtonComponent from "./components/button";
import CustomTextFieldComponent from "./components/custom-text-field";
import CustomTitleH1Component from "./components/custom-title-h1";
import SiteNavComponent from "./components/site-nav";
import UserNavComponent from "./components/user-nav";
const main = document.querySelector(`.main`);
const pageHeader = document.querySelector(`header`);

const siteNav = new SiteNavComponent();
const userNav = new UserNavComponent(`logined`);
const loginForm = new LoginFormComponent();
const title = new CustomTitleH1Component(`Войти`);
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
const loginBtn = new ButtonComponent(`button`, `Войти`, `arrow`);

title.addClass(`login-form__title`);
loginField.addClass(`login-form__text-field`);
passField.addClass(`login-form__text-field`);
loginBtn.addClass(`login-form__btn`);

loginBtn.setClickHandler(()=>{
  disableForm(loginForm.getElement());
});
render(pageHeader, siteNav.getElement(), RenderPosition.BEFOREEND);
render(pageHeader, userNav.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), title.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), loginField.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), passField.getElement(), RenderPosition.BEFOREEND);
render(loginForm.getElement(), loginBtn.getElement(), RenderPosition.BEFOREEND);

render(main, loginForm.getElement(), RenderPosition.BEFOREEND);
