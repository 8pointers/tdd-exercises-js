const throttle = function (fn, timeInMillis) {
  //TODO: Implement this so that the tests are passing
};
describe('Throttle', function () {
  var priceOnScreen, showPrice, throttledShowPrice;
  beforeEach(function () {
    priceOnScreen = undefined;
    showPrice = function (currentPrice) {
      priceOnScreen = currentPrice;
    };
    throttledShowPrice = throttle(showPrice, 1000);
  });
  it('1 - should invoke the specified function when throttled function invoked first time', function () {
    throttledShowPrice(100);

    expect(priceOnScreen).toBe(100);
  });
  it('2 - should never invoke the specified function twice within specified time interval', function () {
    throttledShowPrice(100);
    throttledShowPrice(200);

    expect(priceOnScreen).toBe(100);
  });
  it('3 - should invoke the specified function after specified interval lapsed, with last', function (done) {
    throttledShowPrice(100);
    setTimeout(function () {
      throttledShowPrice(200);
      expect(priceOnScreen).toBe(100);
    }, 250);

    setTimeout(function () {
      throttledShowPrice(300);
      expect(priceOnScreen).toBe(100);
    }, 500);

    setTimeout(function () {
      expect(priceOnScreen).toBe(300);
      done();
    }, 1001);
  });
  it('4 - should embrace jasmine.clock() (it will make your life easier)', function () {
    jasmine.clock().install();
    let wasCalled = false;
    setTimeout(() => wasCalled = true, 1000);
    expect(wasCalled).toBe(false);

    jasmine.clock().tick(1001);

    expect(wasCalled).toBe(true);
    jasmine.clock().uninstall();
  });
});
