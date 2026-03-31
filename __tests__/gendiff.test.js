import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

describe('gendiff', () => {
  test('compare two flat json files', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    
    const expected = readFixture('expected.txt');
    const result = gendiff(filepath1, filepath2);
    
    expect(result).toEqual(expected);
  });

  test('compare two flat yaml files', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    
    const expected = readFixture('expected.txt');
    const result = gendiff(filepath1, filepath2);
    
    expect(result).toEqual(expected);
  });

  test('compare json and yaml files', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.yml');
    
    const expected = readFixture('expected.txt');
    const result = gendiff(filepath1, filepath2);
    
    expect(result).toEqual(expected);
  });
});