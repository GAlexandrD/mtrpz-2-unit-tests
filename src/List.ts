import { Character } from './types/IChar';

class Node {
  next: Node;
  value: Character;
  constructor(value: Character, next?: Node) {
    this.next = next || this;
    this.value = value;
  }
}

export class List {
  private head: Node | null = null;
  private tail: Node | null = null;
  private _length: number = 0;
  constructor(...elements: Character[]) {
    for (const e of elements) {
      this.append(e);
    }
  }

  length(): number {
    return this._length;
  }

  append(element: Character): void {
    const node = new Node(element);
    if (!this.tail || !this.head || !this.length()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      node.next = this.head;
    }
    this._length++;
  }

  insert(element: Character, index: number): void {
    if (index < 0 || index > this.length()) {
      throw new Error('invalid index');
    }
    if (!this.length() || index === this.length()) {
      this.append(element);
      return;
    }
    const newNode = new Node(element);
    let node: any = this.head;
    for (let i = 0; i < index; i++) {
      if (i === index - 1) {
        newNode.next = node.next;
        node.next = newNode;
      }
      node = node.next;
    }
    this._length++;
  }

  delete(index: number): Character {
    if (index < 0 || index >= this.length()) {
      throw new Error('invalid index');
    }
    let returnValue: any;
    if (index === 0 && this.tail && this.head) {
      returnValue = this.head.value;
      this.tail.next = this.head.next;
      this.head = this.tail.next;
    }
    let node: any;
    for (let i = 0; i < index; i++) {
      if (i === 0) node = this.head;
      else node = node.next;
      if (i === index - 1) {
        returnValue = node.next.value;
        node.next = node.next.next;
      }
    }
    this._length--;
    return returnValue;
  }

  deleteAll(element: Character): void {
    for (let i = 0; i < this.length(); i++) {
      if (this.get(i) !== element) continue;
      this.delete(i);
      i--;
    }
  }

  get(index: number): Character {
    if (index < 0 || index >= this.length()) {
      throw new Error('invalid index');
    }
    let node: any;
    for (let i = 0; i <= index - 1; i++) {
      if (i === 0) {
        node = this.head;
      } else node = node.next;
    }
    return node.value;
  }

  clone(): List {
    const clone = new List();
    let node: any;
    for (let i = 0; i < this.length(); i++) {
      if (i === 0) node = this.head;
      else node = node.next;
      clone.append(node.value);
    }
    return clone;
  }

  reverse(): void {
    if (!this.head || !this.tail) return;
    let node: Node = this.head;
    let tmp: Node;
    let prev: Node = this.tail;
    this.head = this.tail;
    this.tail = node;
    for (let i = 0; i < this.length(); i++) {
      tmp = node.next;
      node.next = prev;
      prev = node;
      node = tmp;
    }
    console.dir(this, { depth: 2 });
  }

  findFirst(element: Character): number {
    if (!this.head || !this.tail) return -1;
    let node: Node = this.head;
    for (let i = 0; i < this.length(); i++) {
      if (i === 0) node = this.head;
      else node = node.next;
      if (node.value === element) return i;
    }
    return -1;
  }

  findLast(element: Character): number {
    if (!this.head || !this.tail) return -1;
    let node: Node = this.head;
    let index = -1;
    for (let i = 0; i < this.length(); i++) {
      if (i === 0) node = this.head;
      else node = node.next;
      if (node.value === element) index = i;
    }
    return index;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  extend(list: List): void {
    if(!list.head || !list.tail) return;
    let node: Node = list.head;
    for (let i = 0; i < list.length(); i++) {
      if(i === 0) node = list.head;
      else node = node.next;
      this.append(node.value);
    }
  }
}
