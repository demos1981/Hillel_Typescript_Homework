//До нас звернувся невеликий приватний зоопарк для створення застосунку, який полегшить управління бізнесом. 
//Нижче опис сутностей, які є на даний момент. Вам необхідно ознайомиться, поставити уточнювальні запитання, після чого побудувати програму на основі наявних у вас знань.Використовуйте шаблони, можливості ТЗ і своє уявлення про прекрасне.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// interface IBudget{
//     budgetAll:number,
// }
// interface Receipt{
// }
var CashRegister = /** @class */ (function () {
    function CashRegister(closingTime) {
        this.closingTime = closingTime;
        this.visitor = [];
        this.customer = [];
        this.amountTicket = 0;
    }
    CashRegister.prototype.sellTickets = function (tickets) {
        if (tickets.type = 'adult') {
            this.amountTicket += tickets.value;
        }
        else if (tickets.type = 'child') {
            this.amountTicket += tickets.value;
        }
        else if (tickets.type = 'family') {
            this.amountTicket += tickets.value;
        }
        else {
            console.log('No tickets sold');
        }
        console.log("Tickets sold for the amount $".concat(this.amountTicket));
    };
    CashRegister.prototype.addPeople = function (visitor) {
        this.visitor.push(visitor);
        this.customer.push(__assign({}, visitor));
        console.log(visitor);
    };
    CashRegister.prototype.notificationBeforeClosing = function () {
        var currentTime = new Date();
        var timeDiff = this.closingTime.getTime() - currentTime.getTime();
        var minutesUntilClosing = Math.floor(timeDiff / (1000 * 60));
        if (minutesUntilClosing <= 15) {
            console.log("Zoo is may closing soon. Please make your way to the exit.");
        }
    };
    CashRegister.prototype.notificationBeforeLeaving = function () {
        var currentTime = new Date();
        var timeDiff = this.closingTime.getTime() - currentTime.getTime();
        var minutesUntilClosing = Math.floor(timeDiff / (1000 * 60));
        if (minutesUntilClosing <= 0) {
            console.log("Thank you for visiting the zoo. We hope you had a great time!");
        }
    };
    return CashRegister;
}());
var MarketingDepartments = /** @class */ (function () {
    function MarketingDepartments(customerList) {
        this.customerList = customerList;
    }
    MarketingDepartments.prototype.sandPromo = function (customers) {
        this.customerList.forEach(function (customers) {
            console.log("Sending promotion to ".concat(customers.name, " at ").concat(customers.contactData));
        });
        console.log('Promotion sent succesfully.');
    };
    MarketingDepartments.prototype.sendNews = function (news) {
        this.customerList.forEach(function (customer) {
            console.log("Sending news to ".concat(customer.name, " at ").concat(customer.contactData, ": ").concat(news));
        });
        console.log("News sent successfully.");
    };
    return MarketingDepartments;
}());
var Reporting = /** @class */ (function () {
    function Reporting() {
        this.dailyReport = 0;
    }
    Reporting.prototype.collectingDataRevenue = function (revenue) {
        this.dailyReport += revenue;
        console.log("Report collected ".concat(revenue));
    };
    Reporting.prototype.transferingToAccounting = function () {
        console.log("Transferring daily revenue to Accounting:".concat(this.dailyReport));
    };
    return Reporting;
}());
var Accountings = /** @class */ (function () {
    function Accountings(budget) {
        this.budgetAll = 0;
        this.animalExpenses = 0;
        this.employeeExpenses = 0;
        this.zooMaintenance = 0;
        this.budgetAll = budget;
    }
    Accountings.prototype.addExpenseForAnimal = function (amount) {
        this.animalExpenses += amount;
        console.log("Expenses of ".concat(amount, " added for employee payment"));
    };
    Accountings.prototype.addExpenseForEmployee = function (amount) {
        this.employeeExpenses += amount;
        console.log("Expense of ".concat(amount, " added for employee payment."));
    };
    Accountings.prototype.addForZooMaimnenance = function (amount) {
        this.zooMaintenance += amount;
        console.log("Was spent on maintenance of the zoo");
    };
    Accountings.prototype.generateFinancialReports = function () {
        console.log("Financial Report:");
        console.log("Total animal care expenses: $".concat(this.animalExpenses));
        console.log("Total employee payment expenses: $".concat(this.employeeExpenses));
        console.log("Total maintenance of the zoo $".concat(this.zooMaintenance));
        var totalExpenses = this.animalExpenses + this.employeeExpenses + this.zooMaintenance;
        console.log("Total expenses: $".concat(totalExpenses));
        var remainingBudget = this.budgetAll - totalExpenses;
        console.log("Remaining budget: $".concat(remainingBudget));
    };
    return Accountings;
}());
var Administration = /** @class */ (function () {
    function Administration() {
        this.employes = [];
        this.animals = [];
    }
    Administration.prototype.addEmployes = function (employes) {
        this.employes.push(employes);
        console.log("New employe ".concat(employes.name, " added"));
    };
    Administration.prototype.deleteEmployes = function (employesName) {
        var index = this.employes.findIndex(function (employee) { return employee.name === employesName; });
        if (index !== -1) {
            var deleteEmployes = this.employes.splice(index, 1)[0];
            console.log("Employes ".concat(deleteEmployes.name, " removed succesfully"));
        }
        else {
            console.log("Employes ".concat(employesName, " not found"));
        }
    };
    Administration.prototype.addAnimals = function (animals) {
        this.animals.push(animals);
        console.log("Animal ".concat(animals.name, " added succesfully."));
    };
    Administration.prototype.deleteAnimals = function (animalsName) {
        var index = this.animals.findIndex(function (animals) { return animals.name === animalsName; });
        if (index !== -1) {
            var deleteAnimals = this.animals.splice(index, 1)[0];
            console.log("Animal ".concat(deleteAnimals.name, " delete succesfully."));
        }
        else {
            console.log("Animal ".concat(animalsName, " not found."));
        }
    };
    Administration.prototype.promoNotification = function (promo) {
        console.log("Subscribe to us on social networks ".concat(promo));
    };
    Administration.prototype.eventsNotification = function (events) {
        console.log("Come to us at ".concat(events));
    };
    return Administration;
}());
//Перевірка
//--CashRegister
var closingTime = new Date();
closingTime.setHours(23, 0, 0, 0);
var cashRegister = new CashRegister(closingTime);
var tickets = {
    type: 'adult',
    value: 30,
};
cashRegister.sellTickets(tickets);
var visitor = {
    name: 'Albert Fitch',
    contactData: 'john@example.com'
};
cashRegister.addPeople(visitor);
cashRegister.notificationBeforeLeaving();
cashRegister.notificationBeforeClosing();
var customer = [
    { name: 'Valeriya', contactData: 'valeriya@gmail.com' },
    { name: 'Sergey', contactData: 'andreev@gmail.com' }
];
//--MArketing Department
var marketingDepartment = new MarketingDepartments(customer);
marketingDepartment.sandPromo(customer);
var news = 'New exhibit opened next weekend!';
marketingDepartment.sendNews(news);
//--Reports
var reports = new Reporting();
var ticketSales = 200;
reports.collectingDataRevenue(ticketSales);
reports.transferingToAccounting();
//--Accounting
var initialBudget = 100000;
var accounting = new Accountings(initialBudget);
accounting.addExpenseForAnimal(10000);
accounting.addExpenseForEmployee(8000);
accounting.addForZooMaimnenance(9000);
accounting.generateFinancialReports();
//--Administration
var admin = new Administration();
var newEmployee = {
    name: 'Jack',
    age: 35,
    position: 'Security',
};
admin.addEmployes(newEmployee);
var newAnimals = {
    kind: 'Lion',
    name: 'Samson',
    age: 6,
    health: 'Ok',
};
admin.addAnimals(newAnimals);
var promo = '@zoo.instagram.com';
admin.promoNotification(promo);
var events = 'Parrot exhibition from 10.08 to 20.08 from 10-00 to 18-00';
admin.eventsNotification(events);
admin.deleteEmployes('Jack');
admin.deleteAnimals('Samson');
