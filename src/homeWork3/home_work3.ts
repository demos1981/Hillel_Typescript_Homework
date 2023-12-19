//У вас є сутність - Компанія, яка має назву, список департаментів, список попередньо найнятого персоналу,

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

type Person = {
  //персонал компанії
  name: string;
  isPreHired: boolean; // Вказує, чи була особа раніше прийнята на роботу
  isActive: boolean; // Вказує, чи активна особа на даний момент
  paymentMethod: 'external' | 'internal'; // Вказує спосіб оплати
};

// Type бюджету, що представляє бюджет відділу
type Budget = {
  debit: number;
  credit: number;
};

// Клас відділу з властивостями імені, доменного імені, співробітників і бюджету
class Department {
  name: string;
  domainName: string;
  employees: Person[];
  budget: Budget;

  constructor(name: string, domainName: string, employees: Person[], budget: Budget) {
    this.name = name;
    this.domainName = domainName;
    this.employees = employees;
    this.budget = budget;
  }

  // Метод розрахунку поточного балансу на основі бюджету
  calculateBalance(): number {
    return this.budget.debit - this.budget.credit;
  }

  // Спосіб додавання нових співробітників у відділ, поновлення балансу
  addEmployees(newEmployees: Person[]): void {
    this.employees.push(...newEmployees);

    // Припускаючи, що кожен новий працівник додає постійні витрати, відповідно оновіть бюджет
    const costPerEmployee = 5000;
    const additionalDebit = costPerEmployee * newEmployees.length;

    this.budget.debit += additionalDebit;
  }

  // Спосіб обробки змін у статусі працівника
  handleEmployeeStatusChange(employee: Person, isPreHired: boolean, removeFromPreviousDepartment: boolean): void {
    if (isPreHired) {
      // Якщо особа була попередньо прийнята на роботу, вирахувати з бюджету вартість попереднього найму
      const preHireCost = 10000;
      this.budget.debit -= preHireCost;
    } else {
      // Якщо особу вилучають з відділу, треба оновити бюджет відповідно
      if (removeFromPreviousDepartment) {
        const removalCost = 2000;
        this.budget.debit -= removalCost;
      }

      // Оновити список працівників
      this.employees = this.employees.filter(e => e !== employee);
    }
  }

  // Метод вирахування виплати заробітної плати працівникам
  processSalaryPayments(): void {
    this.employees.forEach(employee => {
      if (employee.isActive) {
        // Актуальні працівники отримують внутрішні виплати
        if (employee.paymentMethod === 'internal') {
          // Логіка внутрішнього платежу процесу
          console.log(`Processing internal payment for ${employee.name}`);
          // Оновлення бюджета тощо на основі внутрішньої логіки платежів
        }
      } else {
        // Раніше найнятий персонал отримує зовнішні виплати
        if (employee.paymentMethod === 'external') {
          //Логіка обробки зовнішніх платежів
          console.log(`Processing external payment for previously hired ${employee.name}`);
          //Оновлення бюджету тощо на основі зовнішньої логіки платежів
        }
      }
    });
  }
}

// Приклад використання:
const engineeringDepartment = new Department(
  'Engineering',
  'engineering.domain.com',
  [
    { name: 'Alice', isPreHired: false, isActive: true, paymentMethod: 'internal' },
    { name: 'Bob', isPreHired: true, isActive: false, paymentMethod: 'external' },
  ],
  { debit: 100000, credit: 80000 }
);

// Оформити виплату заробітної плати
engineeringDepartment.processSalaryPayments();
