//TODO: Modify ObservableGameOfLife so that the tests are passing
class ObservableGameOfLife {
  constructor() {
    this.isAlive = {};
  }
  cellKey(row, column) {
    return `${row}_${column}`;
  }
  isCellAlive(row, column) {
    return this.isAlive[this.cellKey(row, column)] || false;
  }
  toggleCellState(row, column) {
    var key = this.cellKey(row, column);
    if (this.isAlive[key]) {
      delete this.isAlive[key];
    } else {
      this.isAlive[key] = true;
    }
    return this;
  }
  tick() {
    var key, parts, row, column, numberOfNeighbours = {}, neighbourKey;
    for (key in this.isAlive) {
      parts = key.split('_');
      row = parseInt(parts[0], 10);
      column = parseInt(parts[1], 10);
      numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
      [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(function (offset) {
        neighbourKey = this.cellKey(row + offset[0], column + offset[1]);
        numberOfNeighbours[neighbourKey] = (numberOfNeighbours[neighbourKey] || 0) + 1;
      }, this);
    }
    for (key in numberOfNeighbours) {
      if (this.isAlive[key] && (numberOfNeighbours[key] < 2 || numberOfNeighbours[key] > 3) || !this.isAlive[key] && numberOfNeighbours[key] === 3) {
        parts = key.split('_');
        row = parseInt(parts[0], 10);
        column = parseInt(parts[1], 10);
        this.toggleCellState(row, column);
      }
    }
  }
}

describe('6 - Game of Life', function () {
  var gameOfLife, cellStateChangedListener;
  beforeEach(function () {
    gameOfLife = new ObservableGameOfLife();
    cellStateChangedListener = jasmine.createSpy('cellStateChangedListener');
    gameOfLife.addEventListener('cellStateChanged', cellStateChangedListener);
  });
  it('1 - should dispatch cellStateChanged event when dead cell becomes alive', function () {
    gameOfLife.toggleCellState(2, 3);

    expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, true);
  });
  it('2 - should dispatch cellStateChanged event when alive cell dies', function () {
    gameOfLife.toggleCellState(2, 3);

    gameOfLife.toggleCellState(2, 3);

    expect(cellStateChangedListener).toHaveBeenCalledWith(2, 3, false);
  });
});
