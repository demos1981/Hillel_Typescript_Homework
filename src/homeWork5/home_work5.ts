//Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
//У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі.

class Shape {
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
  private readonly radius: number;

  constructor(color: string, name: string, radius: number) {
    super(color, name);
    this.radius = radius;
  }

  public calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
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
  constructor(color: string, sideLength: number) {
    super(color, 'Square', sideLength, sideLength);
  }
}

class Triangle extends Shape {
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
