/* eslint-disable no-unused-vars */
import PageComponent from "../components/PageComponent";

describe("Given a PageComponent", () => {
  describe("When it's rendered", () => {
    test("Then it returns a page component", () => {
      const parentElementConstructor = document.querySelector("body");
      const title = "Pokemon";

      const pageComponent = new PageComponent(parentElementConstructor, title);
      const pageComponentPokemon = document.querySelector(".container");

      expect(pageComponentPokemon).not.toBeNull();
    });
  });
});
