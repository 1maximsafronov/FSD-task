import './style.scss';
import AbstractComponent from "../abstract-component";
import img from './img/logo.svg';
const createTemplate = (link) => {

  return (
    `<a class="logotype" href="${link ? link : ``}">
    <img src="${img}" width="105.69" height="40">
    </a>`
  );
};

export default class extends AbstractComponent {
  constructor(link = ``) {
    super();
    this._link = link;
  }

  getTemplate() {
    return createTemplate(this._link);
  }

}
