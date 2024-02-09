"use strict";
//1-Напишіть узагальнену функцію filterArray(array, condition), яка фільтрує масив елементів на основі наданої умови.
function filterArray(array, condition) {
    return array.filter(function (element) { return condition(element); });
}
var myArrayNumbers = [1, 2, 3, 4, 5, 6, 7];
var filteredNumbers = filterArray(myArrayNumbers, function (num) { return num > 2; });
console.log(filteredNumbers);
//2-Створіть узагальнений клас Stack, який являє собою стек елементів з методами push, pop і peek.
var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.push = function (item) {
        this.elements.push(item);
    };
    Stack.prototype.pop = function () {
        return this.elements.pop();
    };
    Stack.prototype.peek = function () {
        return this.elements.length > 0 ? this.elements[this.elements.length - 1] : undefined;
    };
    return Stack;
}());
var stringStack = new Stack();
stringStack.push('First');
stringStack.push('Second');
stringStack.push('Third');
console.log(stringStack.peek());
console.log(stringStack.pop());
console.log(stringStack.pop());
//3-Створіть узагальнений клас Dictionary, який являє собою словник (асоціативний масив) з методами set, get і has. Обмежте ключі тільки валідними типами для об'єкта
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.data = {};
    }
    Dictionary.prototype.set = function (key, value) {
        this.data[key] = value;
    };
    Dictionary.prototype.get = function (key) {
        return this.data[key];
    };
    Dictionary.prototype.has = function (key) {
        return key in this.data;
    };
    return Dictionary;
}());
var myDictionary = new Dictionary();
myDictionary.set('one', 1);
myDictionary.set('two', 2);
myDictionary.set('three', 3);
console.log(myDictionary.get('two'));
console.log(myDictionary.has('three'));
