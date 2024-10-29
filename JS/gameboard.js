const Ship = require("./ship");

class Gameboard {
  #width = 10;

  createGameBoard = (user) => {
    const gameBoardDiv = document.createElement("div");
    gameBoardDiv.id = user;
    for (let i = 0; i < this.#width * this.#width; i++) {
      const div = document.createElement("div");
      div.id = i;
      gameBoardDiv.append(div);
    }
    return gameBoardDiv;
  };

  receiveAttack = (i) => {
    return i;
  };

  PlaceShip = (shipName, index) => {};
}

module.exports = Gameboard;
