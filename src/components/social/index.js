import './style.scss';
import AbstractComponent from "../abstract-component";

const createTemplate = () => {
  return (
    `<ul class="social">
      <li class="social__item">
        <a class="social__link social__link--tw" href="#">
          <span class="visually-hidden">Мы в твиттере</span>
        </a>
      </li>
      <li class="social__item">
        <a class="social__link social__link--fb" href="#">
          <span class="visually-hidden">Мы в фейсбуке</span>
        </a>
      </li>
      <li class="social__item">
        <a class="social__link social__link--inst" href="#">
          <span class="visually-hidden">Мы в инстаграме</span>
        </a>
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
