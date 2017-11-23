jQuery.fn.gameOfLifeWidget = function (gameOfLife, rows, columns, animationDuration) {
  return this.each(function () {
    var self = jQuery(this);
    self.find('.tick').click(gameOfLife.tick);
    self.find('.grid td').each(function (index) {
      jQuery(this).click(gameOfLife.toggleCellState.bind(gameOfLife, Math.floor(index / columns), index % columns));
    });
    gameOfLife.addEventListener('cellStateChanged', function (row, column) {
      self.find(`tr:nth-child(${row + 1}) td:nth-child(${column + 1})`).toggleClass('alive', animationDuration);
    });
  });
};
describe('7 - Game of Life Widget', function () {
  var gameOfLife, widget;
  beforeEach(function () {
    gameOfLife = SAMURAIPRINCIPLE.eventDispatcher(jasmine.createSpyObj('gameOfLife', ['tick', 'toggleCellState']));
    widget = jQuery('#gameOfLifeWidget').clone().appendTo('body').gameOfLifeWidget(gameOfLife, 10, 10);
  });
  it('1 - should call toggleCellState method when a table cell is clicked', function () {
    widget.find('.grid tr:nth-child(4) td:nth-child(5)').click();

    expect(gameOfLife.toggleCellState).toHaveBeenCalledWith(3, 4, jasmine.any(Object));
  });
  it('2 - should call tick method when tick button is clicked', function () {
    widget.find('.tick').click();

    expect(gameOfLife.tick).toHaveBeenCalled();
  });
  it('3 - should add class alive when cell becomes alive', function () {
    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(true);
  });
  it('4 - should remove class alive when cell dies', function () {
    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, true);

    gameOfLife.dispatchEvent('cellStateChanged', 3, 4, false);

    expect(widget.find('.grid tr:nth-child(4) td:nth-child(5)').hasClass('alive')).toBe(false);
  });
});
