const { sum, callMyName } = require('./functions');

describe('sum()', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
  });
})


describe('callMyName()', () => {
  test('returns a string with the correct name', () => {
    expect(callMyName('Carolina')).toBe('Hello Carolina!');
  })
})