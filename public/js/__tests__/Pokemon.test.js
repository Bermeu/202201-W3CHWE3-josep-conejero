/* eslint-disable no-unused-vars */
import Pokemon from "../components/Pokemon.js";

describe("Given a Pokemon Component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Pokemon", () => {
      const parentElementConstructor = document.querySelector("body");
      const pokemonInfo = {};
      const action = jest.fn();

      const pokemonElement = new Pokemon(
        parentElementConstructor,
        pokemonInfo,
        action
      );
      const pokemonCard = document.querySelector(".pokemon");

      expect(pokemonCard).not.toBeNull();
    });
  });

  describe("When it receives an action", () => {
    test("Then the action should be invoked", () => {
      const container = document.createElement("div");
      const pokemonInfo = {};
      const action = jest.fn();

      const pokemonCard = new Pokemon(container, pokemonInfo, action);
      pokemonCard.element.click();

      expect(action).toHaveBeenCalled();
    });
  });

  describe("When it receives info", () => {
    test("Then the action should be invoked", () => {
      const container = document.createElement("div");
      const pokemonInfo = {
        picture: "picture",
        name: "name",
        weight: "weight",
        height: "height",
      };
      const expectedValue = "name";
      const action = jest.fn();

      const pokemonCard = new Pokemon(container, pokemonInfo, action);
      pokemonCard.element.click();

      expect(pokemonCard.pokemon.name).toBe(expectedValue);
    });
  });
});
