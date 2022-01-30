import Component from "./Component.js";

export default class Pokemon extends Component {
  pokemon;
  actionOnClick;

  constructor(parentElement, pokemon, actionOnClick) {
    super(parentElement, "pokemon", "li");
    this.pokemon = pokemon;
    this.actionOnClick = actionOnClick;
    this.generateHTML();
    this.addListeners();
  }

  generateHTML() {
    this.element.innerHTML = `
      <img 
          class="pokemon__avatar"
           src="${this.pokemon.picture}" 
          alt="Pokemon ${this.pokemon.name}"
        />
      <div class="pokemon-data">  
        <h2 class="pokemon__name">${this.pokemon.name}</h2>
        <p class="pokemon__data-label">Weight: ${this.pokemon.weight}</p>
        <p class="pokemon__data-label">Height: ${this.pokemon.height}</p>
      <div>
    `;
  }

  addListeners() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}
