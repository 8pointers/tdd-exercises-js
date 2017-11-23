const observable = function (base) {
};

describe('observable', function () {
  it('1 - should use it as a mixin', function () {
    var base = {}, result;

    result = observable(base);

    expect(result).toBe(base);
  });
  it('2 - should use addEventListener method to add event listener', function () {
    var underTest = observable({}),
      listener = function () {};

    underTest.addEventListener(listener);

    expect(underTest.listener()).toEqual(listener);
  });
  it('3 - should use dispatchEvent to invoke registered listener', function () {
    var underTest = observable({}),
      result,
      listener = function (argument) {
        result = `listenerInvoked with ${argument}`;
      };
    underTest.addEventListener(listener);

    underTest.dispatchEvent('argument');

    expect(result).toBe('listenerInvoked with argument');
  });
  //Same test, but using a Jasmine spy
  it('4 - should use dispatchEvent to invoke registered listener', function () {
    var underTest = observable({}),
      listener = jasmine.createSpy();
    underTest.addEventListener(listener);
    underTest.dispatchEvent('argument');
    expect(listener).toHaveBeenCalledWith('argument');
  });
  it('5 - should be able to add listener for an event type', function () {
    var underTest = observable({}),
      listenerOnTypeA = jasmine.createSpy(),
      listenerOnTypeB = jasmine.createSpy();
    underTest.addEventListener('TypeA', listenerOnTypeA);
    underTest.addEventListener('TypeB', listenerOnTypeB);

    underTest.dispatchEvent('TypeA', 'argument');

    expect(listenerOnTypeA).toHaveBeenCalledWith('argument');
    expect(listenerOnTypeB).not.toHaveBeenCalled();
  });
  it('6 - should be able to specify the order in which listeners are invoked, by setting priority', function () {
    var underTest = observable({}),
      result = ':',
      lowPriorityListener = function () { result += 'first:'; },
      highPriorityListener = function () { result += 'second:'; };
    underTest.addEventListener('EventType', lowPriorityListener, 1);
    underTest.addEventListener('EventType', highPriorityListener, 2);

    underTest.dispatchEvent('EventType', 'argument');

    expect(result).toBe(':second:first:');
  });
  it('7 - should be able to specify observable properties', function () {
    var underTest = observable({}),
      listener = jasmine.createSpy();
    underTest.createObservableProperty('Balance');
    underTest.onBalanceChanged(listener);

    underTest.setBalance(123.45);

    expect(underTest.getBalance()).toBe(123.45);
    expect(listener).toHaveBeenCalledWith(123.45);
  });
  it('8 - should be able to dispatch variable number of arguments', function () {
    var underTest = observable({}),
      listener = jasmine.createSpy();
    underTest.addEventListener('EventType', listener);
    underTest.dispatchEvent('EventType', 'argument1', 'argument2', 'argument3');

    expect(listener).toHaveBeenCalledWith('argument1', 'argument2', 'argument3');
  });
});
