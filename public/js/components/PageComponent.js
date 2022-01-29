import Component from "./Component.js";

export default class PageComponent extends Component {
  itemsList;

  constructor(parentElement, itemsList) {
    super(parentElement, "container", "div");

    this.itemsList = itemsList;

    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `
    <header><h1>Página de Pokémons</h1></header>
    <nav></nav>
    <main></main>
    <footer></footer>
    `;
  }
}
