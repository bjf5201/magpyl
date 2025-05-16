import { describe, expect, it } from 'vitest';
import { utils } from '../../src/lib/utils';

describe('merge function', () => {
  it('merges objects', () => {
    const defaultOptions = { foo: '', bar: '' };
    const options = { bar: 'overwritten' };
    const mergedOptions = utils.merge(defaultOptions, options);
    // @ts-ignore
    expect(mergedOptions.foo).toBe(defaultOptions.foo);
    // @ts-ignore
    expect(mergedOptions.bar).toBe(options.bar);
    expect(mergedOptions).toEqual({ foo: '', bar: 'overwritten' });
  });
});

describe('isJSON function', () => {
  it('returns true if it is a JSON object', () => {
    expect(utils.isJSON({ foo: 'bar' })).toBe(true);
    expect(utils.isJSON('{"foo": "bar"}')).toBe(true);
  });

  it('returns false if it is not a JSON object', () => {
    expect(utils.isJSON('foo: bar')).toBe(false);
    expect(utils.isJSON(123)).toBe(false);
    expect(utils.isJSON(undefined)).toBe(false);
  });
});
