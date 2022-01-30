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
    <div class="pokemon pokemon__avatar-container">
        <!-- <img 
          class="pokemon__avatar"
           src="img/${this.pokemon.picture}" 
          alt="Pokemon ${this.pokemon.count}"
        /> -->
    </div>
    <div class="pokemon pokemon__data-container">
      <h2 class="pokemon__name">${this.pokemon.count}</h2>
        <ul class="pokemon__data-list">
           <li class="pokemon__data">
              <span class="pokemon__data-label"> algún dato</span>${this.pokemon.count}
           </li>
        </ul>        
    </div>
    `;
  }

  addListeners() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}
