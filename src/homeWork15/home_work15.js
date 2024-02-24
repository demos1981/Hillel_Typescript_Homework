//Вам необхідно розширити поведінку прикладу з банківським рахунком. 
//Додайте до нашої програми компонент Bank, який вміє створювати ти закривати акаунти для клієнтів. 
//Кліент може мати декілька аккаунтів з різними типами валют. Bank повинен бути Singleton!
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
var _a;
var CurrencyTypeEnum;
(function (CurrencyTypeEnum) {
    CurrencyTypeEnum["EUR"] = "EUR";
    CurrencyTypeEnum["USD"] = "USD";
    CurrencyTypeEnum["GBP"] = "GBP";
    CurrencyTypeEnum["UAH"] = "UAH";
})(CurrencyTypeEnum || (CurrencyTypeEnum = {}));
// interface IBank{
//       openBankAccount():void;
//       closeBankAccount():void;
// }
var CurrentRateConversionStrategy = /** @class */ (function () {
    function CurrentRateConversionStrategy(exchangeRates) {
        this.exchangeRates = exchangeRate;
    }
    CurrentRateConversionStrategy.prototype.convert = function (amount, currency) {
        var rate = this.exchangeRates[currency];
        if (!rate)
            throw new Error("Exchange rate not available for currency ".concat(currency));
        return amount * rate;
    };
    return CurrentRateConversionStrategy;
}());
var Observable = /** @class */ (function () {
    function Observable() {
        this.observers = [];
    }
    Observable.prototype.attach = function (observer) {
        var isExist = this.observers.includes(observer);
        if (isExist)
            return console.log('Observable: Observer has been attached already.');
        this.observers.push(observer);
        console.log('Observable:: Attached an observer.');
    };
    Observable.prototype.detach = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1)
            return console.log('Observable: Nonexistent observer.');
        this.observers.splice(observerIndex, 1);
        console.log('Observable: Detached an observer.');
    };
    Observable.prototype.notify = function () {
        console.log('Observable: Notifying observer...');
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this);
        }
    };
    return Observable;
}());
var BankAccount = /** @class */ (function (_super) {
    __extends(BankAccount, _super);
    function BankAccount(client, currency, conversionStrategy) {
        var _this = _super.call(this) || this;
        _this.balance = 5000;
        _this.currency = currency;
        _this.holderName = client;
        _this.number = 12345678;
        _this._conversionStrategy = conversionStrategy;
        return _this;
    }
    Object.defineProperty(BankAccount.prototype, "balanceInfo", {
        get: function () {
            return "".concat(this.currency).concat(this.balance);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "holderName", {
        get: function () {
            return this._holderName;
        },
        set: function (_a) {
            var firstName = _a.firstName, lastName = _a.lastName;
            if (!firstName.trim())
                throw new Error("Client first name can't be empty!");
            if (!lastName.trim())
                throw new Error("Client last name can't be empty!");
            this._holderName = "".concat(lastName, " ").concat(firstName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "conversionStrategy", {
        set: function (strategy) {
            this._conversionStrategy = strategy;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance < amount)
            throw new Error("Sorry ".concat(this._holderName, ", you don't have enough funds!"));
        this.balance -= amount;
    };
    BankAccount.prototype.makeTransaction = function (amount, targetCurrency) {
        var convertAmount = this._conversionStrategy.convert(amount, targetCurrency);
        this.balance -= convertAmount;
        console.log("Transaction: ".concat(amount, " ").concat(this.currency, " => ").concat(targetCurrency, ", Converted Amount: ").concat(convertAmount, " ").concat(targetCurrency, ", Balance: ").concat(this.balance, " ").concat(this.currency));
        this.notify();
    };
    return BankAccount;
}(Observable));
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.update = function (account) {
        console.log("SMS notification: Your account balance has changed. Current balance ".concat(account.balanceInfo));
    };
    return SMSNotification;
}());
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.update = function (account) {
        console.log("Email notification: Your account balance has changed. Current balance ".concat(account.balanceInfo));
    };
    return EmailNotification;
}());
var PushNotification = /** @class */ (function () {
    function PushNotification() {
    }
    PushNotification.prototype.update = function (account) {
        console.log("Push notification: Your account balance has changed. Current balance ".concat(account.balanceInfo));
    };
    return PushNotification;
}());
var Bank = /** @class */ (function () {
    function Bank() {
        this.accounts = [];
    }
    Bank.getInstance = function () {
        if (!Bank.instance) {
            Bank.instance = new Bank();
        }
        return Bank.instance;
    };
    Bank.prototype.openBankAccount = function (ownerName, balance, currency) {
        var newAccount = { ownerName: ownerName, balance: 2000, currency: currency };
        this.accounts.push(newAccount);
        return this.accounts.length - 1;
    };
    Bank.prototype.closeBankAccount = function (accountIndex) {
        if (accountIndex < 0 || accountIndex >= this.accounts.length) {
            throw new Error("Invalid account index: ".concat(accountIndex));
        }
        this.accounts.splice(accountIndex, 1);
        console.log("this account is closer");
    };
    Bank.prototype.getAccountDetails = function (accountIndex) {
        if (accountIndex < 0 || accountIndex >= this.accounts.length) {
            return undefined;
        }
        return this.accounts[accountIndex];
    };
    return Bank;
}());
//Конкретні команди: реалізації команди, які інкапсулюють певні дії (наприклад, TurnOnLightCommand, OpenFileCommand).
var BankOperationRepeate = /** @class */ (function () {
    function BankOperationRepeate(receiver) {
        this.receiver = receiver;
    }
    BankOperationRepeate.prototype.execute = function () {
        this.receiver.repeateAction('repeate');
    };
    return BankOperationRepeate;
}());
var BankOperationClose = /** @class */ (function () {
    function BankOperationClose(receiver) {
        this.receiver = receiver;
    }
    BankOperationClose.prototype.execute = function () {
        this.receiver.closeAction('close');
    };
    return BankOperationClose;
}());
//Приймач: об’єкт, який фактично виконує дію (світло, файл). Він викликається методом execute() команди
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.repeateAction = function (repeate) {
        console.log("Repeate operation (".concat(repeate, ".)"));
    };
    Receiver.prototype.closeAction = function (close) {
        console.log("Close operation (".concat(close, ".)"));
    };
    return Receiver;
}());
//Виклик: об’єкт, який запускає команди (Кнопка, Запис меню). Він не виконує їх безпосередньо, а делегує команді.
var Invoker = /** @class */ (function () {
    function Invoker() {
        this.commands = [];
    }
    Invoker.prototype.addCommand = function (command) {
        this.commands.push(command);
    };
    Invoker.prototype.executeCommands = function () {
        for (var _i = 0, _a = this.commands; _i < _a.length; _i++) {
            var command = _a[_i];
            command.execute();
        }
        this.commands = []; // Clear executed commands
    };
    return Invoker;
}());
// Usage example
var exchangeRate = (_a = {}, _a[CurrencyTypeEnum.EUR] = 1.1, _a[CurrencyTypeEnum.GBP] = 1.3, _a[CurrencyTypeEnum.USD] = 1.0, _a[CurrencyTypeEnum.UAH] = 38, _a);
var currentStrategy = new CurrentRateConversionStrategy(exchangeRate);
var accountCurrentRate = new BankAccount({ firstName: 'Evgeniy', lastName: 'Dukhno' }, CurrencyTypeEnum.EUR, currentStrategy);
console.log(accountCurrentRate);
accountCurrentRate.makeTransaction(250, CurrencyTypeEnum.GBP);
var bank = Bank.getInstance();
var firstAccount = bank.openBankAccount({ firstName: 'Veronica', lastName: 'Gavrilova' }, 4000, CurrencyTypeEnum.EUR);
var secondAccount = bank.openBankAccount({ firstName: 'Vitaliy', lastName: 'Vorobyov' }, 3000, CurrencyTypeEnum.GBP);
var showAccounts = bank.getAccountDetails(firstAccount);
console.log(showAccounts);
bank.closeBankAccount(0);
var receiver = new Receiver();
var commandA = new BankOperationRepeate(receiver);
var commandB = new BankOperationClose(receiver);
var invoker = new Invoker();
invoker.addCommand(commandA);
invoker.addCommand(commandB);
invoker.executeCommands();
function clientCode() {
    var bank1 = Bank.getInstance();
    var bank2 = Bank.getInstance();
    if (bank1 === bank2) {
        console.log('Bank is empty.');
    }
    else {
        console.log('Bank failed, not shure operation is correctly.');
    }
}
clientCode();
