export default class Component {
  element;
  constructor(parentElement, className, htmlTag) {
    this.element = document.createElement(htmlTag);
    this.element.classList = className;
    parentElement.append(this.element);
  }
}
