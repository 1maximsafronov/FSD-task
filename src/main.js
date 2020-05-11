import './sass/style.scss';
import {RenderPosition, render} from "./utils/render.js";
// import SiteNavComponent from "./components/site-nav";
// import UserNavComponent from "./components/user-nav";
import SocialComponent from "./components/social";
const main = document.querySelector(`.main`);
const block = new SocialComponent();
render(main, block.getElement(), RenderPosition.BEFOREEND);
