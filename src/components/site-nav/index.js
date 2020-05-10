import './style.scss';
import AbstractComponent from "../abstract-component";
const createTemplate = () => {

  return (
    `<ul class="site-nav">
      <li class="site-nav__item">
        <a class="site-nav__link site-nav__link--active" href="#">Home</a>
      </li>
      <li class="site-nav__item">
        <a class="site-nav__link" href="#">About Us</a>
      </li>
      <li class="site-nav__item site-nav__item--sub-nav">
        <a class="site-nav__link" href="#">Services</a>
      </li>
      <li class="site-nav__item">
        <a class="site-nav__link" href="#">Careers</a>
      </li>
      <li class="site-nav__item">
        <a class="site-nav__link" href="#">News</a>
      </li>
      <li class="site-nav__item">
        <a class="site-nav__link" href="#">Documentation</a>
      </li>
    </ul>`
  );
};

export default class extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return createTemplate();
  }

}
