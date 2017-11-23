class ObservableGameOfLife {
  //TODO
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
