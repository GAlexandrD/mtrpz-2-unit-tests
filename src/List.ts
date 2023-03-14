import { Character } from './types/IChar';

export class List {
  private elements: Character[] = [];

  constructor(...elements: Character[]) {
    this.elements = [...elements];
  }

  length(): number {
    return this.elements.length;
  }

  append(element: Character): void {
    this.elements.push(element);
  }

  insert(element: Character, index: number): void {
    this.validateIndex(index);
    this.elements.splice(index, 0, element);
  }

  delete(index: number): Character {
    this.validateIndex(index);
    const returnValue = this.elements[index];
    this.elements.splice(index, 1);
    return returnValue;
  }

  deleteAll(element: Character): void {
    let index: number = 0;
    while (index !== -1) {
      index = this.elements.indexOf(element);
      if (index !== -1) this.delete(index);
    }
  }

  get(index: number): Character {
    this.validateIndex(index);
    return this.elements[index];
  }

  clone(): List {
    return new List(...this.elements);
  }

  reverse(): void {
    this.elements.reverse();
  }

  findFirst(element: Character): number {
    return this.elements.indexOf(element);
  }

  findLast(element: Character): number {
    return this.elements.lastIndexOf(element);
  }

  clear(): void {
    this.elements = [];
  }

  extend(list: List): void {
    this.elements.push(...list.elements);
  }

  private validateIndex(index: number) {
    if (index < 0) {
      throw new Error('index cannot be less than 0');
    }
    if (index >= this.elements.length) {
      throw new Error('index cannot be more than list lenght');
    }
  }
}
