import './sass/style.scss';
import {RenderPosition, render} from "./utils/render.js";
// import SiteNavComponent from "./components/site-nav";
// import UserNavComponent from "./components/user-nav";
import MainNavComponent from "./components/main-nav";
const main = document.querySelector(`.main`);
const mainNav = new MainNavComponent(`logined`);
render(main, mainNav.getElement(), RenderPosition.BEFOREEND);
