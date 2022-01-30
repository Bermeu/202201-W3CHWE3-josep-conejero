import Component from "./Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, text, actionOnClick) {
    super(parentElement, className, "button");

    this.generateHTML(text);

    this.addListeners(actionOnClick);
  }

  generateHTML(text) {
    this.element.textContent = text;
  }

  addListeners(actionOnClick) {
    this.element.addEventListener("click", actionOnClick);
  }
}

export default ButtonComponent;
