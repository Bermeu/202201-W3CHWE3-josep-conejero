/* eslint-disable no-unused-vars */
import PageComponent from "./components/PageComponent.js";

const mainPage = document.querySelector("body");
/* const optionsNav = [
  {
    title: "MOSTRAR",
    actionOnClick: () => {},
  },
]; */
// const page = new PageComponent(mainPage, [], "Página de Pokémons");
const page = new PageComponent(mainPage, "Pokemon");
