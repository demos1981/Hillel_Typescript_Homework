//До нас звернувся невеликий приватний зоопарк для створення застосунку, який полегшить управління бізнесом. 
//Нижче опис сутностей, які є на даний момент. Вам необхідно ознайомиться, поставити уточнювальні запитання, після чого побудувати програму на основі наявних у вас знань.Використовуйте шаблони, можливості ТЗ і своє уявлення про прекрасне.
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
var BusinessLogicController = /** @class */ (function () {
    function BusinessLogicController() {
        this.observers = [];
    }
    //   constructor(private closingTime: Date) {
    // }
    BusinessLogicController.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    };
    BusinessLogicController.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }
        this.observers.splice(observerIndex, 1);
    };
    /**
     * Запуск обновления в каждом подписчике.
     */
    BusinessLogicController.prototype.notify = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return BusinessLogicController;
}());
var ReminderController = /** @class */ (function (_super) {
    __extends(ReminderController, _super);
    function ReminderController(closingTime) {
        var _this = _super.call(this) || this;
        _this.closingTime = closingTime;
        return _this;
    }
    ReminderController.prototype.someNotification = function () {
        var currentTime = new Date();
        var timeDiff = this.closingTime.getTime() - currentTime.getTime();
        this.stateNumber = Math.floor(timeDiff / (1000 * 60));
        this.notify();
    };
    return ReminderController;
}(BusinessLogicController));
var MarketingControllerEvent = /** @class */ (function (_super) {
    __extends(MarketingControllerEvent, _super);
    function MarketingControllerEvent(event) {
        var _this = _super.call(this) || this;
        _this.event = event;
        return _this;
    }
    MarketingControllerEvent.prototype.eventsNewsletter = function () {
        this.stateEvent = this.event;
        this.notify();
    };
    return MarketingControllerEvent;
}(BusinessLogicController));
var MarketingControllerPromo = /** @class */ (function (_super) {
    __extends(MarketingControllerPromo, _super);
    function MarketingControllerPromo(promo) {
        var _this = _super.call(this) || this;
        _this.promo = promo;
        return _this;
    }
    MarketingControllerPromo.prototype.promoNewsletter = function () {
        this.statePromo = this.promo;
        this.notify();
    };
    return MarketingControllerPromo;
}(BusinessLogicController));
var NotificationBeforeClosing = /** @class */ (function () {
    function NotificationBeforeClosing() {
    }
    NotificationBeforeClosing.prototype.update = function (subject) {
        if (subject instanceof ReminderController && subject.stateNumber <= 15 && subject.stateNumber >= 0) {
            console.log("Zoo is may closing soon. Please make your way to the exit.");
        }
    };
    return NotificationBeforeClosing;
}());
var NotificationBeforeLeaving = /** @class */ (function () {
    function NotificationBeforeLeaving() {
    }
    NotificationBeforeLeaving.prototype.update = function (subject) {
        if (subject instanceof ReminderController && subject.stateNumber == 0) {
            console.log("Thank you for visiting the zoo. We hope you had a great time!");
        }
    };
    return NotificationBeforeLeaving;
}());
var NewsletterEvents = /** @class */ (function () {
    function NewsletterEvents() {
    }
    NewsletterEvents.prototype.update = function (subject) {
        if (subject instanceof MarketingControllerEvent && subject.stateEvent) {
            console.log(subject.stateEvent);
        }
    };
    return NewsletterEvents;
}());
var NewsletterPromo = /** @class */ (function () {
    function NewsletterPromo() {
    }
    NewsletterPromo.prototype.update = function (subject) {
        if (subject instanceof MarketingControllerPromo && subject.statePromo) {
            console.log(subject.statePromo);
        }
    };
    return NewsletterPromo;
}());
var TicketManager = /** @class */ (function () {
    function TicketManager() {
        this.availableTickets = {
            adult: 10,
            child: 3,
            family: 4
        };
    }
    TicketManager.prototype.sellTicketsControls = function (tickets) {
        for (var _i = 0, tickets_1 = tickets; _i < tickets_1.length; _i++) {
            var ticket = tickets_1[_i];
            if (this.availableTickets[ticket.type] > 0) {
                this.availableTickets[ticket.type]--;
                console.log("Ticket sold ".concat(ticket.type));
            }
            else {
                console.log("Ticket ".concat(ticket.type, "are sold out "));
            }
        }
    };
    return TicketManager;
}());
var CashRegister = /** @class */ (function () {
    function CashRegister() {
        this.visitor = [];
        this.customer = [];
        this.ticketManager = new TicketManager();
        this.amountTicket = 0;
    }
    CashRegister.prototype.sellTickets = function (tickets) {
        this.ticketManager.sellTicketsControls(tickets);
        this.amountTicket += tickets.reduce(function (total, ticket) { return total + ticket.value; }, 0);
        console.log("Total amount collected:$".concat(this.amountTicket));
        //           switch (tickets.type) {
        //     case 'adult':
        //     case 'child':
        //     case 'family':
        //       this.amountTicket += tickets.value;
        //       console.log(`Tickets sold for the amount $${this.amountTicket}`);
        //       break;
        //     default:
        //       console.log('No tickets sold');
        //       break;
        //   }
    };
    CashRegister.prototype.addPeople = function (visitor) {
        this.visitor.push(visitor);
        this.customer.push(__assign({}, visitor));
        console.log(visitor);
    };
    return CashRegister;
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
    Administration.prototype.promoCreating = function (promo) {
        console.log('Promo creating');
    };
    Administration.prototype.eventsCreating = function (events) {
        console.log('Event creating');
    };
    return Administration;
}());
/**
 * Клієнтський код.
 */
//--CashRegister
var cashRegister = new CashRegister();
var tickets = [
    { type: 'adult', value: 10 },
    { type: 'family', value: 4 },
    { type: 'child', value: 3 },
    { type: 'child', value: 3 }
];
cashRegister.sellTickets(tickets);
var visitor = {
    name: 'Albert Fitch',
    contactData: 'john@example.com'
};
cashRegister.addPeople(visitor);
var customer = [
    { name: 'Valeriya', contactData: 'valeriya@gmail.com' },
    { name: 'Sergey', contactData: 'andreev@gmail.com' }
];
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
admin.deleteEmployes('Jack');
admin.deleteAnimals('Samson');
var promo = 'Subscribe to us on social networks @zoo.instagram.com';
admin.promoCreating(promo);
var events = 'Parrot exhibition from 10.08 to 20.08 from 10-00 to 18-00';
admin.eventsCreating(events);
var closingTime = new Date();
closingTime.setHours(18, 0, 0, 0);
var subject = new ReminderController(closingTime);
var beforeClosing = new NotificationBeforeClosing();
subject.attach(beforeClosing);
subject.someNotification();
subject.detach(beforeClosing);
var beforeLeaving = new NotificationBeforeLeaving();
subject.attach(beforeLeaving);
subject.someNotification();
subject.detach(beforeLeaving);
var eventNews = events;
var eventsNew = new MarketingControllerEvent(eventNews);
var newsletterEvent = new NewsletterEvents();
eventsNew.attach(newsletterEvent);
eventsNew.eventsNewsletter();
eventsNew.detach(newsletterEvent);
var promoNews = promo;
var promoNew = new MarketingControllerPromo(promoNews);
var newsletterPromo = new NewsletterPromo();
promoNew.attach(newsletterPromo);
promoNew.promoNewsletter();
eventsNew.detach(newsletterPromo);
