/* eslint-disable class-methods-use-this */
/* eslint-disable no-new */
import Component from "./Component.js";
import ButtonComponent from "./ButtonComponent.js";
import Pokemon from "./Pokemon.js";
import pokemonList from "../../data/pokemon-list.js";

export default class PageComponent extends Component {
  itemsList;
  title;
  navOptionsList;

  constructor(parentElement, title) {
    super(parentElement, "container", "div");
    this.title = title;

    this.getPokemonData();
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
    this.renderButtonComponent();
  }

  renderButtonComponent() {
    const controls = this.element.querySelector(".controls");
    controls.querySelector(".button")?.remove();
    new ButtonComponent(controls, "button button--show", "MOSTRAR", () =>
      this.renderPokemonList()
    );
  }

  getPokemonData() {
    (async function getPokeAPIList() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon"); // fetch resuelve a una promesa
      const pokemonInfoList = await response.json(); // (para extraer json de un body) el método json me devuelve una promesa

      pokemonInfoList.results.forEach((element) => {
        (async () => {
          const response2 = await fetch(element.url);
          const pokemonInfoItem = await response2.json();

          const item = {
            name: pokemonInfoItem.name,
            base_experience: pokemonInfoItem.base_experience,
            height: pokemonInfoItem.height,
            weight: pokemonInfoItem.weight,
            picture: pokemonInfoItem.sprites.other.home.front_default,
          };

          pokemonList.push(item);
        })();
      });
    })();
  }

  renderPokemonList() {
    pokemonList.forEach((item) => {
      const pokemonContainer = document.querySelector(".pokemon-list");
      const newPokemon = new Pokemon(pokemonContainer, item, () => {});
    });
  }
}
