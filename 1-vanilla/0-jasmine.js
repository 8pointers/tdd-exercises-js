describe('Jasmine', function () {
  it('should understand toBe matcher', function () {
    const add = (a, b) => a + b;
    expect(add(1, 2)).toBe(3);
  });
  it('should understand not', function () {
    expect([1, 2, 3]).not.toBe([1, 2, 3]);
    expect({name: 'Myamoto'}).not.toBe({name: 'Myamoto'});
  });
  it('should understand toEqual matcher', function () {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect({name: 'Myamoto'}).toEqual({name: 'Myamoto'});
  });
});
