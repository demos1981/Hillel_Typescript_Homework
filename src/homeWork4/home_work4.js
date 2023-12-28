//задание1
function calculate(calculator, operation, number) {
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
var myCalculator = {
    result: 10,
    add: function (number) {
        this.result += number;
    },
    subtract: function (number) {
        this.result -= number;
    },
    multiply: function (number) {
        this.result *= number;
    },
    divide: function (number) {
        if (number !== 0) {
            this.result /= number;
        }
        else {
            console.error('Error: Cannot divide by zero!');
        }
    },
};
var bookService = {
    getBookById: function (id) {
        var book = bookService.getBookById(id);
        return book;
    },
    getBooksByAuthor: function (authorId) {
        var booksByAuthor = bookService.getBooksByAuthor(authorId);
        return booksByAuthor;
    },
    getAllAuthors: function () {
        var allAuthors = bookService.getAllAuthors();
        return allAuthors;
    },
};
