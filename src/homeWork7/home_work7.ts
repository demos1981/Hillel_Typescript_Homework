//1-Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.

function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
  return array.filter(element => condition(element));
}

const myArrayNumbers = [1, 2, 3, 4, 5, 6, 7];
const filteredNumbers = filterArray(myArrayNumbers, num => num > 2);

console.log(filteredNumbers);

//2-Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.

class Stack<T> {
  private elements: T[] = [];

  push(item: T): void {
    this.elements.push(item);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  peek(): T | undefined {
    return this.elements.length > 0 ? this.elements[this.elements.length - 1] : undefined;
  }
}

const stringStack = new Stack<string>();
stringStack.push('First');
stringStack.push('Second');
stringStack.push('Third');

console.log(stringStack.peek());
console.log(stringStack.pop());
console.log(stringStack.pop());

//3-Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта
class Dictionary<K extends string | number, V> {
  private data: Record<K, V> = {} as Record<K, V>;

  set(key: K, value: V): void {
    this.data[key] = value;
  }

  get(key: K): V | undefined {
    return this.data[key];
  }

  has(key: K): boolean {
    return key in this.data;
  }
}

const myDictionary = new Dictionary<string, number>();

myDictionary.set('one', 1);
myDictionary.set('two', 2);
myDictionary.set('three', 3);

console.log(myDictionary.get('two'));
console.log(myDictionary.has('three'));
