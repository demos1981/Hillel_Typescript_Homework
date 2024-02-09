"use strict";
//У вас є сутність - Компанія, яка має назву, список департаментів, список попередньо найнятого персоналу,
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//а також список усього персоналу компанії - співробітники всіх департаментів і попередньо найняті.
//Сутність Департамент - має назву, доменну область, список своїх співробітників і бюджет, що складається з дебіту і кредиту.
//Так само у неї існують методи для обчислення балансу виходячи з поточного бюджету, додавання нових співробітників,
//який враховує зміни балансу і перетворення з Попередньо найнятого на Співробітника або видалення Співробітника з
//минулого відділу.
//Сутність Попередньо найнятого співробітника має ім'я, прізвище, зарплата та номер банківського рахунку.
//Сутність Співробітника - ім'я, прізвище, платіжну інформацію, зарплату, статус (активний, неактивний, у неоплачуваній відпустці) і знання про департамент,
//до якого він прикріплений.
//Так само у нас є сутність Бухгалтерія, яка є департаментом і має властивість баланс, а також методи
//для взяття на баланс співробітника або департаменту, зняття з балансу і виплати зарплати для всього персоналу.
//Попередньо найняті співробітники отримують зарплату за допомогою зовнішніх оплат, Співробітники (тільки активні) - за допомогою внутрішніх.
// Енуми
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["Internal"] = "internal";
    PaymentMethod["External"] = "external";
})(PaymentMethod || (PaymentMethod = {}));
var EmployeeStatus;
(function (EmployeeStatus) {
    EmployeeStatus["Active"] = "active";
    EmployeeStatus["Inactive"] = "inactive";
    EmployeeStatus["UnpaidLeave"] = "unpaidLeave";
})(EmployeeStatus || (EmployeeStatus = {}));
// Класи
var PreHiredEmployee = /** @class */ (function () {
    function PreHiredEmployee(name, surname, salary, bankAccountNumber) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.bankAccountNumber = bankAccountNumber;
    }
    return PreHiredEmployee;
}());
var Employee = /** @class */ (function () {
    function Employee(name, surname, paymentMethod, salary, status, department) {
        this.name = name;
        this.surname = surname;
        this.paymentMethod = paymentMethod;
        this.salary = salary;
        this.status = status;
        this.department = department;
    }
    return Employee;
}());
var Departments = /** @class */ (function () {
    function Departments(name, domainName, employees, budget) {
        this.name = name;
        this.domainName = domainName;
        this.employees = employees;
        this.budget = budget;
    }
    Departments.prototype.calculateBalance = function () {
        //розрахунок балансу
        return this.budget.debit - this.budget.credit;
    };
    Departments.prototype.addEmployees = function (newEmployees) {
        var _a;
        //додавання співробітника
        (_a = this.employees).push.apply(_a, newEmployees);
        var costPerEmployee = 5000; // додаємо баланс нового співробітника
        var additionalDebit = costPerEmployee * newEmployees.length;
        this.budget.debit += additionalDebit; //додамо його в дебет
    };
    Departments.prototype.handleEmployeeStatusChange = function (employee, removeFromPreviousDepartment) {
        if (removeFromPreviousDepartment) {
            //якщо видаляємо з департменту
            var removalCost = 2000; //видаляємо баланс та оновлюємо бюджет
            this.budget.debit -= removalCost;
        }
        this.employees = this.employees.filter(function (e) { return e !== employee; });
    };
    return Departments;
}());
var Company = /** @class */ (function () {
    function Company(name, departments, preHiredPersonnel, allPersonnel) {
        this.name = name;
        this.departments = departments;
        this.preHiredPersonnel = preHiredPersonnel;
        this.allPersonnel = allPersonnel;
    }
    Company.prototype.getAllPersonnel = function () {
        //отримати усіх співробітників
        return __spreadArray([], this.allPersonnel, true);
    };
    return Company;
}());
var Accounting = /** @class */ (function (_super) {
    __extends(Accounting, _super);
    function Accounting(balance) {
        var _this = _super.call(this, 'Accounting', 'accounting.domain.com', [], { debit: 0, credit: 0 }) || this; //використовуємо батьківський конструктор 
        _this.balance = balance;
        return _this;
    }
    Accounting.prototype.takeOnBalance = function (entity) {
        //отримання балансу співробітника чи департаменту
        if (entity instanceof Employee) {
            console.log("Taking employee ".concat(entity.name, " on the balance sheet."));
            this.budget.debit += entity.salary;
        }
        else if (entity instanceof Departments) {
            console.log("Taking department ".concat(entity.name, " on the balance sheet."));
            this.budget.debit += entity.calculateBalance();
        }
    };
    Accounting.prototype.removeFromBalance = function (entity) {
        //видалення з балансу співробітника чи департаменту
        if (entity instanceof Employee) {
            console.log("Removing employee ".concat(entity.name, " from the balance sheet."));
            this.budget.debit -= entity.salary;
        }
        else if (entity instanceof Departments) {
            console.log("Removing department ".concat(entity.name, " from the balance sheet."));
            this.budget.debit -= entity.calculateBalance();
        }
    };
    Accounting.prototype.paySalaries = function (allPersonnel) {
        //виплата зарабітної плати співробітника або попередньо найнятого співробітника
        allPersonnel.forEach(function (person) {
            if (person instanceof Employee && person.status === EmployeeStatus.Active) {
                //як-що співробітник має статус активний
                if (person.paymentMethod === PaymentMethod.Internal) {
                    console.log("Processing internal payment for ".concat(person.name));
                }
            }
            else if (person instanceof PreHiredEmployee) {
                // Раніше найнятий персонал отримує зовнішні виплати
                console.log("Processing external payment for previously hired ".concat(person.name));
            }
        });
    };
    return Accounting;
}(Departments));
