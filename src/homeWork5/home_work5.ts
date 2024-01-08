//Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
//У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі.

class Shape {
  //базовий клас який має захищенні поля та базовий метод розрахунку calculateArea().
  protected readonly color: string;
  protected readonly name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }

  public calculateArea(): number {
    throw new Error('calculateArea method must be implemented');
  }
}

class Circle extends Shape {
  //наслідується від базового класу Shape та маэ власне приватне поле radius
  private readonly radius: number;

  constructor(color: string, name: string, radius: number) {
    super(color, name);
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Triangle extends Shape {
  //також наслідується від базового класу Shape.
  private readonly base: number;
  private readonly height: number;

  constructor(color: string, base: number, height: number) {
    super(color, 'Triangle');
    this.base = base;
    this.height = height;
  }

  public calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

class Rectangle extends Shape {
  //також наслідується від базового классу та має власні приватні поля та додатковий власний метод print()
  private readonly width: number;
  private readonly height: number;

  constructor(color: string, name: string, width: number, height: number) {
    super(color, name);
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public print(): void {
    console.log(`Area of ${this.name} (${this.color}): ${this.width} * ${this.height}`);
  }
}

class Square extends Rectangle {
  //повністю дублює клас Rectangle тож наслідується від нього, йому доступні обидва методи класу
  constructor(color: string, sideLength: number) {
    super(color, 'Square', sideLength, sideLength);
  }
}





