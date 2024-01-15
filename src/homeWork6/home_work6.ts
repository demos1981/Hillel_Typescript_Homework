//https://www.sharooq.com/what-is-index-signature-key-string-any-type-in-typescript

//Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
//Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
//Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
//Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
//Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
//Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

//Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.

interface IUserInterface {
  [index: string]: number | string;
}

const user: IUserInterface = {
  key1: 1,
  key: 23,
  key3: 'Surname',
};

//Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.

interface IFunctionObject {
  [key: string]: (...args: string[]) => string;
}

const userObject: IFunctionObject = {
  concat: (str1: string, str2: string) => str1 + str2,
};

//Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.

interface IArrayLikeObject {
  [index: number]: string;
  length: number;
}

const myArrayLikeObject: IArrayLikeObject = {
  0: 'first',
  1: 'second',
  2: 'third',
  length: 3,
};

//Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.

interface ICustomObject {
  name: string;
  [key: string]: string;
}

const myCustomObject: ICustomObject = {
  name: 'Object',
  profession: 'Worker',
};

//Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивост
interface IBaseInterface {
  [key: string]: string;
}

interface IExtendedInterface extends IBaseInterface {
  newField: string;
}

const newObject: IExtendedInterface = {
  key1: 'name',
  key2: 'surname',
  newField: 'Додаткова властивість',
};

//Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

function checkValues(obj: { [key: string]: number | string }, keys: string[]): boolean {
  for (const key of keys) {
    if (typeof obj[key] !== 'number') {
      return false;
    }
  }
  return true;
}

const myObject = {
  age: 25,
  score: 95,
  name: 'John',
};

const keysToCheck = ['age', 'score'];
const result = checkValues(myObject, keysToCheck);
console.log(result);
