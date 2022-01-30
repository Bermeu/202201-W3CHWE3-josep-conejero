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
    <header class="header"><h1 class="mainTitle">Página de Pokémons</h1></header>
    <nav class="nav"></nav>
    <main class="main"></main>
    <footer class="footer"></footer>
    `;
  }
}
