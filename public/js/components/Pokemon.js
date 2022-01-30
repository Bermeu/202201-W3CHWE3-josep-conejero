import Component from "./Component.js";

export default class Pokemon extends Component {
  pokemon;

  constructor(parentElement, className, pokemon) {
    super(parentElement, className, "li");
    this.pokemon = pokemon;
  }
}
