/*
The goal of this koan is to become familiar with Jasmine unit testing framework.
You will have to use TDD to implement isCellAliveInNextGeneration function, according to the rules of the game (you canse use http://en.wikipedia.org/wiki/Conway's_Game_of_Life for reference).
*/
function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
}
describe('Game of Life', function () {
  it('should return false when a live cell has fewer than two live neighbours - under-population', function () {
  });
  it('should return true when a live cell has two or three live neighbours - survival', function () {
  });
  it('should return false when a live cell has more than three live neighbours - overcrowding', function () {
  });
  it('should return true when a dead cell has exactly three live neighbours - reproduction', function () {
  });
});
