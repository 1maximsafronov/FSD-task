import {createSomeElement, render, RenderPosition} from "../../utils/render.js";
import AbstractComponent from "../abstract-component";
import CustomTextFieldComponent from "../custom-text-field";
const createTemplate = () => {
  return (
    `<form class="subscribe" action="#" method="post">
      <h3 class="subscribe__title custom-title-h3">Subscribe to our newsletter</h3>
      <p class="subscribe__text">Receive our latest news and promotions in your inbox!</p>
    </form>`
  );
};
const renderSubscribeContent = (container) => {
  const subscribeField = new CustomTextFieldComponent({
    label: `Subscribe to our newsletter`,
    isLabelShown: 0,
    name: `subscribe`,
    id: `subscribe`,
    type: `email`,
    placeholder: `Your email address`,
    modifier: `button`
  });
  subscribeField.addClass(`subscribe__field`);
  render(container, subscribeField.getElement(), RenderPosition.BEFOREEND);
};


export default class extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return createTemplate();
  }

  getElement() {
    if (!this._element) {
      this._renderContent();
    }

    return this._element;
  }

  _renderContent() {
    this._element = createSomeElement(this.getTemplate());
    renderSubscribeContent(this._element);
  }

}
