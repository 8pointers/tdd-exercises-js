class GameOfLife {
  constructor() {
  }
  isCellAlive(row, column) {
  }
  toggleCellState(row, column) {
  }
  tick() {
  }
}

describe('2 - Game of Life', function () {
  let gameOfLife;
  beforeEach(function () {
    gameOfLife = new GameOfLife();
  });
  it('1 - should make sure all cells are initially dead', function () {
    expect(gameOfLife.isCellAlive(2, 3)).toBe(false);
  });
  it('2 - should be able to toggle the state of individual cells', function () {
    gameOfLife.toggleCellState(2, 3);

    expect(gameOfLife.isCellAlive(2, 3)).toBe(true);
  });
  it('3 - should set the cell state to dead in next generation if the cell is alive in current generation and has less than 2 neighbours', function () {
    gameOfLife.toggleCellState(2, 3);

    gameOfLife.tick();

    expect(gameOfLife.isCellAlive(2, 3)).toBe(false);
  });
});
