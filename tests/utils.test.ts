import { describe, expect, test } from '@jest/globals';
import { validateFormat, validateOptions } from '../modules/utils';

describe('validateFormat:', () => {
  test('providing no argument should return true', () => {
    const res = validateFormat();
    expect(res).toBeTruthy();
  });
  test('"json" should return true', () => {
    const res = validateFormat('json');
    expect(res).toBeTruthy();
  });
  test('"xml" should return true', () => {
    const res = validateFormat('xml');
    expect(res).toBeTruthy();
  });
  test('passing any other value should return false', () => {
    const res = validateFormat('abcde');
    expect(res).toBeFalsy();
  });
});

describe('validateOptions testing arguments:', () => {
  test('passing an argument for options should return false', () => {
    const res = validateOptions(['fields'], { option: 'test' });
    expect(res).toBeFalsy();
  });
  test('not passing an argument for options should return true', () => {
    const res = validateOptions(['fields']);
    expect(res).toBeTruthy();
  });
});
describe('validateOptions with different options configuration:', () => {
  test('passing an Options object with a key that is the defaultAttributes array should return true', () => {
    const res = validateOptions([], { pagina: true });
    expect(res).toBeTruthy();
  });
  test('passing an Options object with a key that is NOT the defaultAttributes array should return false', () => {
    const res = validateOptions([], { error: true });
    expect(res).toBeFalsy();
  });
  test('passing an Options object with 2 keys, one of which is NOT in attributes should return false', () => {
    const res = validateOptions([], {
      error: true,
      pagina: true,
      format: 'json',
    });
    expect(res).toBeFalsy();
  });
  test('passing an invalid format in the options object should return false', () => {
    const res = validateOptions(
      ['name'],
      { pagina: true, format: 'asd', ordenarPor: 'name', test: true },
      ['test']
    );
    expect(res).toBeFalsy();
  });
});
describe('validateOptions testing availableOrderFields and moreAttributes:', () => {
  test('passing valid availableOrderFields and options should return true', () => {
    const res = validateOptions(['name'], {
      pagina: true,
      format: 'json',
      ordenarPor: 'name',
    });
    expect(res).toBeTruthy();
  });
  test('passing an ordenarPor property with a custom option with no matching attribute should return false', () => {
    const res = validateOptions([], {
      pagina: true,
      format: 'json',
      ordenarPor: 'name',
    });
    expect(res).toBeFalsy();
  });
  test('including moreAttributes should return true', () => {
    const res = validateOptions(
      ['name'],
      { pagina: true, format: 'json', ordenarPor: 'name', test: true },
      ['test']
    );
    expect(res).toBeTruthy();
  });
});
