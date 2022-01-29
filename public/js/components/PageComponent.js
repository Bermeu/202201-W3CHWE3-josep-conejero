import Component from "./Component.js";

export default class PageComponent extends Component {
  pokemon;

  constructor(parentElement, className, pokemon) {
    super(parentElement, className, "div");
    this.pokemon = pokemon;

    // this.element.innerHTML = this.generateHTML();
  }

  /* generateHTML() {
     código que todavía no sé
  } */
}
