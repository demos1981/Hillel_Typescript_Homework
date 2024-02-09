"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// DeprecatedMethod decorator
function DeprecatedMethod(reason, replacementMethod) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.warn("Warning: ".concat(propertyKey.toString(), " is deprecated. Reason: ").concat(reason));
            if (replacementMethod) {
                console.warn("Consider using ".concat(replacementMethod, " instead."));
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// MinLength decorator
function MinLength(minLength) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (value) {
            if (value.length < minLength) {
                throw new Error("".concat(propertyKey.toString(), " requires a minimum length of ").concat(minLength));
            }
            return originalMethod.apply(this, [value]);
        };
        return descriptor;
    };
}
// MaxLength decorator
function MaxLength(maxLength) {
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function (value) {
            if (value.length > maxLength) {
                throw new Error("".concat(propertyKey.toString(), " requires a maximum length of ").concat(maxLength));
            }
            return originalMethod.apply(this, [value]);
        };
        return descriptor;
    };
}
// Email decorator
function Email(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("".concat(propertyKey.toString(), " requires a valid email address"));
        }
        return originalMethod.apply(this, [email]);
    };
    return descriptor;
}
var ExperimentalClass = /** @class */ (function () {
    function ExperimentalClass() {
    }
    ExperimentalClass.prototype.oldMethod = function () {
        console.log('This is the old method.');
    };
    ExperimentalClass.prototype.validateLength = function (value) {
        console.log("Value '".concat(value, "' meets the minimum length requirement."));
    };
    ExperimentalClass.prototype.validateMaxLength = function (value) {
        console.log("Value '".concat(value, "' meets the maximum length requirement."));
    };
    ExperimentalClass.prototype.validateEmail = function (email) {
        console.log("Email '".concat(email, "' is valid."));
    };
    __decorate([
        DeprecatedMethod('Use the newMethod instead.', 'newMethod')
    ], ExperimentalClass.prototype, "oldMethod", null);
    __decorate([
        MinLength(5)
    ], ExperimentalClass.prototype, "validateLength", null);
    __decorate([
        MaxLength(10)
    ], ExperimentalClass.prototype, "validateMaxLength", null);
    __decorate([
        Email
    ], ExperimentalClass.prototype, "validateEmail", null);
    return ExperimentalClass;
}());
var exampleInstance = new ExperimentalClass();
exampleInstance.oldMethod();
exampleInstance.validateLength('Hello');
exampleInstance.validateMaxLength('ShortText');
exampleInstance.validateEmail('test@example.com');
