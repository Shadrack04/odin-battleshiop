const Ship = require("../JS/ship");

describe("Ship", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship("cruise", 5);
  });

  test("return the ship length", () => {
    expect(ship.getLength()).toEqual(5);
  });

  test("display direction, default is horizontal", () => {
    expect(ship.getDirection()).toEqual("horizontal");
  });

  test("display the new direction, vertical", () => {
    ship.setDirection(); // change the direction
    expect(ship.getDirection()).toEqual("vertical");
  });

  test("should increase hits by 1", () => {
    expect(ship.gotHit()).toEqual(1);
  });

  test("Checks if hits is equal to length", () => {
    expect(ship.isSunk()).toEqual(false);
  });
});
