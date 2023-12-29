//У вас є сутність - Компанія, яка має назву, список департаментів, список попередньо найнятого персоналу,
// Клас відділу з властивостями імені, доменного імені, співробітників і бюджету
var Department = /** @class */ (function () {
    function Department(name, domainName, employees, budget) {
        this.name = name;
        this.domainName = domainName;
        this.employees = employees;
        this.budget = budget;
    }
    // Метод розрахунку поточного балансу на основі бюджету
    Department.prototype.calculateBalance = function () {
        return this.budget.debit - this.budget.credit;
    };
    // Спосіб додавання нових співробітників у відділ, поновлення балансу
    Department.prototype.addEmployees = function (newEmployees) {
        var _a;
        (_a = this.employees).push.apply(_a, newEmployees);
        // Припускаючи, що кожен новий працівник додає постійні витрати, відповідно оновіть бюджет
        var costPerEmployee = 5000;
        var additionalDebit = costPerEmployee * newEmployees.length;
        this.budget.debit += additionalDebit;
    };
    // Спосіб обробки змін у статусі працівника
    Department.prototype.handleEmployeeStatusChange = function (employee, isPreHired, removeFromPreviousDepartment) {
        if (isPreHired) {
            // Якщо особа була попередньо прийнята на роботу, вирахувати з бюджету вартість попереднього найму
            var preHireCost = 10000;
            this.budget.debit -= preHireCost;
        }
        else {
            // Якщо особу вилучають з відділу, треба оновити бюджет відповідно
            if (removeFromPreviousDepartment) {
                var removalCost = 2000;
                this.budget.debit -= removalCost;
            }
            // Оновити список працівників
            this.employees = this.employees.filter(function (e) { return e !== employee; });
        }
    };
    // Метод вирахування виплати заробітної плати працівникам
    Department.prototype.processSalaryPayments = function () {
        this.employees.forEach(function (employee) {
            if (employee.isActive) {
                // Актуальні працівники отримують внутрішні виплати
                if (employee.paymentMethod === 'internal') {
                    // Логіка внутрішнього платежу процесу
                    console.log("Processing internal payment for ".concat(employee.name));
                    // Оновлення бюджета тощо на основі внутрішньої логіки платежів
                }
            }
            else {
                // Раніше найнятий персонал отримує зовнішні виплати
                if (employee.paymentMethod === 'external') {
                    //Логіка обробки зовнішніх платежів
                    console.log("Processing external payment for previously hired ".concat(employee.name));
                    //Оновлення бюджету тощо на основі зовнішньої логіки платежів
                }
            }
        });
    };
    return Department;
}());
// Приклад використання:
var engineeringDepartment = new Department('Engineering', 'engineering.domain.com', [
    { name: 'Alice', isPreHired: false, isActive: true, paymentMethod: 'internal' },
    { name: 'Bob', isPreHired: true, isActive: false, paymentMethod: 'external' },
], { debit: 100000, credit: 80000 });
// Оформити виплату заробітної плати
engineeringDepartment.processSalaryPayments();
