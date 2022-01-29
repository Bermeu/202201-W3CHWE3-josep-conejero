import Component from "../components/Component.js";
/* import Card from "../components/Card.js"; */

/* describe("Given a Card class' constructor", () => {
  describe("When it's invoked with body, '' and pokemon", () => {
    test("Then it returns not null", () => {
      const pokemon = {};
      const parentElementConstructor = document.querySelector("body");
      const classNameConstructor = "";

      const card = new Card(
        parentElementConstructor,
        classNameConstructor,
        pokemon
      );

      const cardP = document.querySelector("body div");

      expect(cardP).not.toBeNull();
    });
  });

  describe("When it's invoked with body, '' and serie with a name", () => {
    test("Then it returns an alt = The Sopranos poster", () => {
      const pokemon = { name: "nombre" };
      const parentElementConstructor = document.querySelector("body");
      const classNameConstructor = "";
      const expectedValue = "nombre";

      const card = new Card(
        parentElementConstructor,
        classNameConstructor,
        pokemon
      );
      const obtainedValue = document.querySelector("body").pokemon.name;

      expect(obtainedValue).toBe(expectedValue);
    });
  });
}); */

describe("Given a Component class' constructor", () => {
  describe("When it's invoked with body, '' and p", () => {
    test("Then it returns not null", () => {
      const parentElementConstructor = document.querySelector("body");
      const classNameConstructor = "";
      const htmlTagConstructor = "p";

      const component = new Component(
        parentElementConstructor,
        classNameConstructor,
        htmlTagConstructor
      );
      const componentP = document.querySelector("body p");

      expect(componentP).not.toBeNull();
    });
  });
});
