import './sass/style.scss';
import {RenderPosition, render} from "./utils/render.js";
// import SiteNavComponent from "./components/site-nav";
// import UserNavComponent from "./components/user-nav";
import LoginFormComponent from "./components/login-form";
const main = document.querySelector(`.main`);

const loginForm = new LoginFormComponent();

render(main, loginForm.getElement(), RenderPosition.BEFOREEND);
