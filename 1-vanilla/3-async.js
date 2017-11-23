const __ = 'Replace this with a concrete value so that the test is passing!';
describe('Timers and asynchronous specs', function () {
  it('0 - should understand why we need asynchronous specs (so that this spec doesnt just pass)', function () {
    setTimeout(function () {
      expect(1).toBe(2);
    }, 100);
  });
  it('1 - should understand timers', function (done) {
    let i = 0;
    setTimeout(function () {
      i = 1;
    }, 200);
    setTimeout(function () {
      expect(i).toBe(__);
    }, 100);
    setTimeout(function () {
      expect(i).toBe(__);
      done();
    }, 300);
    expect(i).toBe(__);
  });
  it('2 - should understand timers', function (done) {
    let i = 0;
    expect(i).toBe(__);
    setTimeout(function () {
      i = 1;
    }, 0);
    expect(i).toBe(__);
    setTimeout(function () {
      expect(i).toBe(__);
      done();
    }, 1);
    expect(i).toBe(__);
  });
  it('3 - should understand timers', function (done) {
    let i = 0, loopDueTime = Date.now() + 1000;
    setTimeout(function () {
      i = 1;
    }, 300);
    while (new Date().getTime() <= loopDueTime) {
    }
    expect(i).toBe(__);
    setTimeout(function () {
      expect(i).toBe(__);
      done();
    }, 0);
    expect(i).toBe(__);
  });
});
