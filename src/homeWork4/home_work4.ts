//задание1

interface Calculator {
  result: number;
  add: (number: number) => void;
  subtract: (number: number) => void;
  multiply: (number: number) => void;
  divide: (number: number) => void;
}

function calculate(calculator: Calculator, operation: string, number: number): number | null {
  switch (operation) {
    case 'add':
      calculator.add(number);
      break;
    case 'subtract':
      calculator.subtract(number);
      break;
    case 'multiply':
      calculator.multiply(number);
      break;
    case 'divide':
      calculator.divide(number);
      break;
    default:
      console.error('Error: Unknown operation');
      return null;
  }

  return calculator.result;
}

const myCalculator: Calculator = {
  result: 10,
  add: function (number: number): void {
    this.result += number;
  },
  subtract: function (number: number): void {
    this.result -= number;
  },
  multiply: function (number: number): void {
    this.result *= number;
  },
  divide: function (number: number): void {
    if (number !== 0) {
      this.result /= number;
    } else {
      console.error('Error: Cannot divide by zero!');
    }
  },
};

//задание 2

interface IAuthor {
  id: number;
  name: string;
  birthDate: string;
}

interface IBook {
  id: number;
  title: string;
  authorId: number;
  publicationDate: string;
}

interface IBookService {
  getBookById: (id: number) => IBook | undefined;
  getBooksByAuthor: (authorId: number) => IBook[];
  getAllAuthors: () => IAuthor[];
}

const bookService: IBookService = {
  getBookById: function (id: number): IBook | undefined {
    const book: IBook | undefined = bookService.getBookById(id);
    return book;
  },
  getBooksByAuthor: function (authorId: number): IBook[] {
    const booksByAuthor: IBook[] = bookService.getBooksByAuthor(authorId);
    return booksByAuthor;
  },
  getAllAuthors: function (): IAuthor[] {
    const allAuthors: IAuthor[] = bookService.getAllAuthors();
    return allAuthors;
  },
};
