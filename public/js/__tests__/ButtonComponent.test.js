/* eslint-disable no-unused-vars */
import ButtonComponent from "../components/ButtonComponent.js";

describe("Given a ButtonComponent component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a button", () => {
      const container = document.createElement("div");

      const button = new ButtonComponent(container);

      expect(container.querySelector("button")).not.toBeNull();
    });
  });

  describe("When it receives 'Do something' as text", () => {
    test("Then it should render a button with the text 'Do something' inside", () => {
      const container = document.createElement("div");
      const text = "Do something";

      const button = new ButtonComponent(container, "", text);

      expect(button.element.textContent).toBe(text);
    });
  });

  describe("When it receives an action", () => {
    test("Then the action should be invoked", () => {
      const container = document.createElement("div");
      const action = jest.fn();

      const button = new ButtonComponent(container, "", "", action);
      button.element.click();

      expect(action).toHaveBeenCalled();
    });
  });
});
