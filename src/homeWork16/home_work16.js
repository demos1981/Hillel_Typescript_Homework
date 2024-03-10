var gen = 'String';
console.log(gen);
//перевірка
var bool = true;
console.log(bool);
//перевірка
var numOrString = 25;
numOrString = 'Half';
console.log(numOrString);
//перевірка
var strTuple = ['firstItem', 'secondItem',];
console.log(strTuple);
//перевірка
var account = {
    firstName: 'Alex',
    lastName: 'Mazurko',
    yearsOld: 30,
    id: 123,
    cardType: 'Auto Card',
};
console.log(account);
//перевірка
var accounNew = {
    firstName: 'Arina',
    lastName: 'Gavrilova',
    yearsOld: 25,
    id: 385,
    cardType: 'Student card',
};
console.log(accounNew);
//перевірка
function userDetails(user) {
    console.log("First name: ".concat(user.firstName));
    console.log("Last name: ".concat(user.lastName));
    console.log("Years old: ".concat(user.yearsOld));
    console.log("Id: ".concat(user.id));
    console.log("Card type: ".concat(user.cardType));
}
var userAccount = {
    firstName: 'Vladimir',
    lastName: 'Yacovlev',
    yearsOld: 44,
    id: 695,
    cardType: 'Auto Card',
};
userDetails(userAccount);
//перевірка
function userId(id) {
    console.log("First name:".concat(id.firstName));
    console.log("Last name:".concat(id.lastName));
    console.log("Years old:".concat(id.yearsOld));
    console.log("Id number:".concat(id.id));
    console.log("Card type:".concat(id.cardType));
}
var id = {
    firstName: 'Denis',
    lastName: 'Vladimirov',
    yearsOld: 36,
    id: 896,
    cardType: 'Auto card',
};
userId(id);
//реалізація з інтерфейсом
var Recruting = /** @class */ (function () {
    function Recruting(name, age) {
        this.name = name;
        this.age = age;
    }
    Recruting.prototype.makeAge = function () {
        console.log("Name:".concat(this.name, ",Make age: ").concat(this.age));
    };
    return Recruting;
}());
var recruting = new Recruting("Sam", 35);
recruting.makeAge();
var User = /** @class */ (function () {
    function User(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
    return User;
}());
var firm = new User('Stanislav', 35, 'Builder');
console.log(firm);
var UnionRealization = /** @class */ (function () {
    function UnionRealization(payload) {
        this.payload = payload;
    }
    return UnionRealization;
}());
var unionString = new UnionRealization('Never mind');
console.log(unionString);
var Builder = /** @class */ (function () {
    function Builder(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
    Builder.prototype.usingBuilder = function () {
        console.log("This ".concat(this.name, " use profession ").concat(this.profession));
    };
    return Builder;
}());
var builders = new Builder('Troy', 34, 'Full worker');
builders.usingBuilder();
