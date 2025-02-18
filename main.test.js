import { describe, test, expect } from "vitest";
import { Cupcake, Cookie, Chocolate, Nut, displayCakeInformation } from "./main";

describe("displayCakeInformation function", () => {
  describe("Given a cupcake", () => {
    describe("When there is no topping", () => {
      test('Then it displays "Cupcake à 1€"', () => {
        const myCupcake = new Cupcake();

        expect(displayCakeInformation(myCupcake)).toBe("Cupcake à 1€");
      });
    });

    describe("When there is 1 chocolate topping", () => {
      test('Then it displays "Cupcake avec chocolat noir à 1.1€"', () => {
        const myCupcakeWithChocolate = new Chocolate(new Cupcake());

        expect(displayCakeInformation(myCupcakeWithChocolate)).toBe("Cupcake avec chocolat noir à 1.1€");
      });
    });

    describe("When there is 2 topping, chocolate and nut", () => {
        test('Then it displays "Cupcake avec chocolat noir et noix à 1.3€"', () => {
          const myCupcakeWithToppings = new Nut(new Chocolate(new Cupcake()));
  
          expect(displayCakeInformation(myCupcakeWithToppings)).toBe("Cupcake avec chocolat noir et noix à 1.3€");
        });
      });
  });

  describe("Given a cookie", () => {
    describe("When there is no topping", () => {
      test('Then it displays "Cookie à 2€"', () => {
        const myCookie = new Cookie();

        expect(displayCakeInformation(myCookie)).toBe("Cookie à 2€");
      });
    });
  });
});
