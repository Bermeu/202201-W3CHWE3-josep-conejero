import Component from "./Component.js";

export default class Card extends Component {
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
