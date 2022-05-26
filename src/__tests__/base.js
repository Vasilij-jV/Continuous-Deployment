import demo, { unusedVariable } from '../js/app';

test('demo test', () => {
  expect(demo(unusedVariable)).toBe('variable');
});
