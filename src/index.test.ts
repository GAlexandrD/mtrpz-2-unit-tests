import { List } from './List';
import { Character } from './types/IChar';

describe('List tests', () => {
  test('length', () => {
    let list = new List();
    expect(list.length()).toBe(0);
    list = new List('B', 'C', 'F');
    expect(list.length()).toBe(3);
  });

  test('get', () => {
    const list = new List('A', 'B');
    expect(() => list.get(-1)).toThrow();
    expect(() => list.get(2)).toThrow();
    expect(list.get(1)).toBe('B');
  });

  test('append', () => {
    const list = new List('C', 'E', 'd');
    list.append('B');
    expect(list.length()).toBe(4);
    expect(list.get(3)).toBe('B');
  });

  test('insert', () => {
    const list = new List('D', 'D', 'A', 'B');
    list.insert('H', 2);
    expect(list.length()).toBe(5);
    expect(list.get(2)).toBe('H');
    expect(() => list.insert('C', 6)).toThrow();
    expect(() => list.insert('C', -1)).toThrow();
  })

  test('delete', () => {
    const list = new List('D', 'D', 'A', 'B');
    list.delete(2);
    expect(list.length()).toBe(3);
    expect(list.get(2)).toBe('B');
    expect(() => list.delete(3)).toThrow();
    expect(() => list.delete(-1)).toThrow();
  })

  test('deleteAll', () => {
    const list = new List('D', 'D', 'A', 'B', 'D');
    list.deleteAll('D');
    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe('A');
    expect(list.get(1)).toBe('B');
    list.deleteAll('F');
    expect(list.length()).toBe(2);
  })

  test('clone', () => {
    const list = new List('A', 'B', 'C');
    const clone = list.clone();
    expect(list).toEqual(clone);
  })

  test('revert', () => {
    const list = new List('A', 'B', 'C', 'D', 'F', 'G');
    list.reverse();
    expect(list.get(0)).toBe('G');
    expect(list.get(1)).toBe('F');
    expect(list.get(2)).toBe('D');
    expect(list.get(3)).toBe('C');
    expect(list.get(4)).toBe('B');
    expect(list.get(5)).toBe('A');
  })

  test('findFirst', () => {
    const list = new List('A', 'B', 'C', 'D', 'F', 'C', 'G');
    expect(list.findFirst('K')).toBe(-1);
    expect(list.findFirst('C')).toBe(2);
  })

  test('findLast', () => {
    const list = new List('A', 'B', 'C', 'D', 'F', 'C', 'G');
    expect(list.findLast('K')).toBe(-1);
    expect(list.findLast('C')).toBe(5);
  })

  test('clear', () => {
    const list = new List('A', 'B', 'C');
    list.clear();
    expect(list.length()).toBe(0);
    expect(() => list.get(0)).toThrow()
    expect(() => list.get(1)).toThrow()
    expect(() => list.get(2)).toThrow()
  })

  test('extend', () => {
    const list = new List('A', 'B', 'C');
    const extention = new List('C', 'f', 'k');
    list.extend(extention);
    expect(list.length()).toBe(6);
    expect(list.get(3)).toBe('C');
    expect(list.get(4)).toBe('f');
    expect(list.get(5)).toBe('k');
  })
});
