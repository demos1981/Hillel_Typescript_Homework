//Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
//У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі.

abstract class Shape {
  protected constructor(readonly color: string, readonly name: string) {}

  abstract calculateArea(): number;
}

abstract class Conclusion extends Shape {
  abstract print(): void;
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

class Triangle extends Shape {
  private readonly base: number;
  private readonly height: number;

  constructor(color: string, name: string, base: number, height: number) {
    super(color, name);
    this.base = base;
    this.height = height;
  }

  public calculateArea(): number {
    return 0.5 * this.base * this.height;
  }
}

class Rectangle extends Conclusion {
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

class Square extends Conclusion {
  private readonly sideLength: number;

  constructor(color: string, name: string, sideLength: number) {
    super(color, name);
    this.sideLength = sideLength;
  }

  public calculateArea(): number {
    return this.sideLength * 2;
  }

  public print(): void {
    console.log(`Area of ${this.name} (${this.color}): ${this.sideLength} * 2`);
  }
}

//Example
const square = new Triangle('black', 'triangle', 26, 26);
const methodSquare = square.calculateArea();
console.log(methodSquare);

