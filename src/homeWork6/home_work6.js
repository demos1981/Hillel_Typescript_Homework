//https://www.sharooq.com/what-is-index-signature-key-string-any-type-in-typescript
var user = {
    key1: 1,
    key: 23,
    key3: 'Surname',
};
var userObject = {
    concat: function (str1, str2) { return str1 + str2; },
};
var myArrayLikeObject = {
    0: 'first',
    1: 'second',
    2: 'third',
    length: 3,
};
var myCustomObject = {
    name: 'Object',
    profession: 'Worker',
};
var newObject = {
    key1: 'name',
    key2: 'surname',
    newField: 'Додаткова властивість',
};
//Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).
function checkValues(obj, keys) {
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (typeof obj[key] !== 'number') {
            return false;
        }
    }
    return true;
}
var myObject = {
    age: 25,
    score: 95,
    name: 'John',
};
var keysToCheck = ['age', 'score'];
var result = checkValues(myObject, keysToCheck);
console.log(result);
