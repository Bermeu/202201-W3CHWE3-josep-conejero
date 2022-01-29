import Component from "../components/Component.js";

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
