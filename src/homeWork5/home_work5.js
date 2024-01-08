//Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний метод calculateArea.
// У кожної фігури є загальнодоступні властивості - колір і назва, які не можна змінювати після створення.
//У Square і Rectangle зі свого боку є ще додатковий метод print, який виводить рядок із формулою розрахунку площі.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(color, name) {
        this.color = color;
        this.name = name;
    }
    Shape.prototype.calculateArea = function () {
        throw new Error('calculateArea method must be implemented');
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, name, radius) {
        var _this = _super.call(this, color, name) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color, base, height) {
        var _this = _super.call(this, color, 'Triangle') || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    Triangle.prototype.calculateArea = function () {
        return 0.5 * this.base * this.height;
    };
    return Triangle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, name, width, height) {
        var _this = _super.call(this, color, name) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.print = function () {
        console.log("Area of ".concat(this.name, " (").concat(this.color, "): ").concat(this.width, " * ").concat(this.height));
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    //повністю дублює клас Rectangle тож наслідується від нього, йому доступні обидва методи класу
    function Square(color, sideLength) {
        return _super.call(this, color, 'Square', sideLength, sideLength) || this;
    }
    return Square;
}(Rectangle));
