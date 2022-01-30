/* eslint-disable no-new */
import Component from "./Component.js";
import ButtonComponent from "./ButtonComponent.js";
import Pokemon from "./Pokemon.js";

export default class PageComponent extends Component {
  itemsList;
  title;
  navOptionsList;

  constructor(parentElement, title) {
    super(parentElement, "container", "div");
    this.title = title;

    this.generateHTML();
  }

  renderPokemonList() {
    (async function getPokeAPI() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon"); // fetch resuelve a una promesa

      const pokemonInfo = await response.json(); // (para extraer json de un body) el método json me devuelve una promesa
      // pokemon.count
      const pokemonContainer = document.querySelector(".pokemon-list");
      pokemonContainer.innerHTML = "";
      new Pokemon(pokemonContainer, pokemonInfo, () => {});
    })();
  }

  generateHTML() {
    this.element.innerHTML = `
    <header class="header"><h1 class="mainTitle">${this.title}</h1></header>
    <nav class="controls"></nav>
    <main class="main">
      <ul class="pokemon-list"></ul>
    </main>
    `;

    this.renderControlsContainer();
    this.renderPokemonList();
  }

  renderControlsContainer() {
    this.renderButtonComponent();
  }

  renderButtonComponent() {
    const controls = this.element.querySelector(".controls");
    controls.querySelector(".button")?.remove();
    new ButtonComponent(controls, "button button--show", "MOSTRAR", () =>
      this.renderPokemonList()
    );
  }
}
