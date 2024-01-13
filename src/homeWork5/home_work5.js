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
    return Shape;
}());
var Conclusion = /** @class */ (function (_super) {
    __extends(Conclusion, _super);
    function Conclusion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Conclusion;
}(Shape));
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
    function Triangle(color, name, base, height) {
        var _this = _super.call(this, color, name) || this;
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
}(Conclusion));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(color, name, sideLength) {
        var _this = _super.call(this, color, name) || this;
        _this.sideLength = sideLength;
        return _this;
    }
    Square.prototype.calculateArea = function () {
        return this.sideLength * 2;
    };
    Square.prototype.print = function () {
        console.log("Area of ".concat(this.name, " (").concat(this.color, "): ").concat(this.sideLength, " * 2"));
    };
    return Square;
}(Conclusion));
//Example
var square = new Triangle('black', 'triangle', 26, 26);
var methodSquare = square.calculateArea();
console.log(methodSquare);
