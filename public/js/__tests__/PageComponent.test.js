import PageComponent from "../components/PageComponent";

describe("Given a PageComponent", () => {
  describe("When it's invoked with body and []", () => {
    test("Then it returns a page component", () => {
      const parentElementConstructor = document.querySelector("body");
      const listItems = [];
      const expectedHTML = `
    <header><h1>Página de Pokémons</h1></header>
    <nav></nav>
    <main></main>
    <footer></footer>
    `;

      const pageComponent = new PageComponent(
        parentElementConstructor,
        listItems
      );
      const pageComponentPokemon = document.querySelector(".container");

      expect(pageComponentPokemon.innerHTML).toBe(expectedHTML);
      // expect(pageComponentPokemon).not.toBeNull();
    });
  });
});
