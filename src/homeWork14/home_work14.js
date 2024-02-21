var Client = /** @class */ (function () {
    function Client(firstName, lastName, years, accountNumber) {
        this._accountNumber = accountNumber !== null && accountNumber !== void 0 ? accountNumber : null;
        this._firstName = firstName;
        this._lastName = lastName;
        this._years = years;
    }
    Object.defineProperty(Client.prototype, "accountNumber", {
        get: function () {
            if (!this._accountNumber)
                throw new Error('New client');
            return this._accountNumber;
        },
        set: function (value) {
            this._accountNumber = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "years", {
        get: function () {
            return this._years;
        },
        enumerable: false,
        configurable: true
    });
    return Client;
}());
var Car = /** @class */ (function () {
    function Car(carBrand, carColor, carYear) {
        this._carBrand = carBrand;
        this._carColor = carColor;
        this._carYear = carYear;
    }
    Object.defineProperty(Car.prototype, "carBrand", {
        get: function () {
            return this._carBrand;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carColor", {
        get: function () {
            return this._carColor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "carYear", {
        get: function () {
            if (this._carYear <= 1960)
                throw new Error('You must enter year of automobile');
            return this._carYear;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var TakeDokument = /** @class */ (function () {
    function TakeDokument() {
    }
    TakeDokument.prototype.takeDoks = function (client) {
        return 'Your doks is: Aprooved!\n';
    };
    return TakeDokument;
}());
var CarInspection = /** @class */ (function () {
    function CarInspection() {
    }
    CarInspection.prototype.inspectCar = function (car) {
        return 'Your car: Inspected!\n';
    };
    return CarInspection;
}());
var IssueOfNumbers = /** @class */ (function () {
    function IssueOfNumbers() {
    }
    IssueOfNumbers.prototype.ganarateCarNumber = function () {
        var number = "Ah78809 VK";
        return "Your car number is: ".concat(number, " \n");
    };
    IssueOfNumbers.prototype.getCarNumber = function () {
        return 'Your number is: Ready\n';
    };
    return IssueOfNumbers;
}());
var AvtoRegistration = /** @class */ (function () {
    function AvtoRegistration(car, client, takeDokument, carInspection, issueOfNumbers) {
        this.takeDokument = takeDokument || new TakeDokument();
        this.carInspection = carInspection || new CarInspection();
        this.issueOfNumbers = issueOfNumbers || new IssueOfNumbers();
        this.client = client || new Client('first', 'last', 1975);
        this.car = car || new Car('carBrend', 'carColor', 1991);
    }
    AvtoRegistration.prototype.addAccount = function (client) {
        var account = new Client(client.firstName, client.lastName, client.years);
        console.log(account);
    };
    AvtoRegistration.prototype.addCars = function (car) {
        var carItem = new Car(car.carBrand, car.carColor, car.carYear);
        console.log(carItem);
    };
    AvtoRegistration.prototype.operatinRegistration = function () {
        var result = 'Your registration is: Started\n ';
        result += this.takeDokument.takeDoks(this.client);
        result += this.carInspection.inspectCar(this.car);
        result += this.issueOfNumbers.ganarateCarNumber();
        result += 'In what state is the autonomer currently\n';
        result += this.issueOfNumbers.getCarNumber();
        result += this.addAccount(this.client);
        result += this.addCars(this.car);
        return result;
    };
    return AvtoRegistration;
}());
function clientInterface(autoregistration) {
    console.log(autoregistration.operatinRegistration());
}
var takeDokument = new TakeDokument();
var carInspection = new CarInspection();
var issueOfNumbers = new IssueOfNumbers();
var car = new Car('Honda', 'Red', 1990);
var clients = new Client('Andrey', 'Sergeev', 1988, 34);
var autoregistration = new AvtoRegistration(car, clients, takeDokument, carInspection, issueOfNumbers);
clientInterface(autoregistration);
