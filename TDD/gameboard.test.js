const Gameboard = require("../JS/gameboard");

describe("Game board", () => {
  const gameboard = new Gameboard();
  test("Receive an attack", () => {
    expect(gameboard.receiveAttack(1)).toEqual(1);
  });
});
