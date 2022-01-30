/* eslint-disable no-new */
import Component from "./Component.js";
import ButtonComponent from "./ButtonComponent.js";

export default class PageComponent extends Component {
  itemsList;
  title;
  navOptionsList;

  constructor(parentElement, title) {
    super(parentElement, "container", "div");
    this.title = title;

    this.generateHTML();
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
    this.renderInfoComponent();
    this.renderButtonComponent();
  }

  renderButtonComponent() {
    const controls = this.element.querySelector(".controls");
    controls.querySelector(".button")?.remove();
    new ButtonComponent(controls, "button button--show", "MOSTRAR", () =>
      this.renderPokemonList()
    );
  }

  renderInfoComponent() {
    /* const controls = this.element.querySelector(".controls");
    controls.querySelector(".info")?.remove();
    const totalSelectedGentlemen = this.gentlemen.filter(
      (gentleman) => gentleman.selected
    ).length;

    new InfoComponent(controls, "p", totalSelectedGentlemen); */
  }

  renderPokemonList() {
    (async function getPokeAPI() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon"); // fetch resuelve a una promesa

      const pokemon = await response.json(); // (para extraer json de un body) el método json me devuelve una promesa
      // pokemon.count
    })();
    /* const pokemonContainer = this.element.querySelector(".items-list");
    pokemonContainer.innerHTML = "";
    this.gentlemen.forEach((gentleman) => {
      new GentlemanComponent(gentlemenContainer, "li", gentleman, () =>
        this.toggleGentleman(gentleman.id)
      );
    }); */
  }
}
