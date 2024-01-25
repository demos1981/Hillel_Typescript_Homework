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


// Енуми
enum PaymentMethod {
  Internal = 'internal',
  External = 'external',
}

enum EmployeeStatus {
  Active = 'active',
  Inactive = 'inactive',
  UnpaidLeave = 'unpaidLeave',
}

// Тіпи
type Personal = {
  name: string;
  surname: string;
};

type Budgets = {
  debit: number;
  credit: number;
};

// Класи
class PreHiredEmployee {
  //Клас попередньо найнятий співробітник
  name: Personal;
  surname: Personal;
  salary: number;
  bankAccountNumber: string;

  constructor(name: Personal, surname: Personal, salary: number, bankAccountNumber: string) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.bankAccountNumber = bankAccountNumber;
  }
}

class Employee {
  //Клас співробітник
  name: Personal;
  surname: Personal;
  paymentMethod: PaymentMethod;
  salary: number;
  status: EmployeeStatus;
  department: Departments;

  constructor(
    name: Personal,
    surname: Personal,
    paymentMethod: PaymentMethod,
    salary: number,
    status: EmployeeStatus,
    department: Departments
  ) {
    this.name = name;
    this.surname = surname;
    this.paymentMethod = paymentMethod;
    this.salary = salary;
    this.status = status;
    this.department = department;
  }
}

class Departments {
  //Клас департамент
  name: string;
  domainName: string;
  employees: Employee[];
  budget: Budgets;

  constructor(name: string, domainName: string, employees: Employee[], budget: Budgets) {
    this.name = name;
    this.domainName = domainName;
    this.employees = employees;
    this.budget = budget;
  }

  calculateBalance(): number {
    //розрахунок балансу
    return this.budget.debit - this.budget.credit;
  }

  addEmployees(newEmployees: Employee[]): void {
    //додавання співробітника
    this.employees.push(...newEmployees);

    const costPerEmployee = 5000; // додаємо баланс нового співробітника
    const additionalDebit = costPerEmployee * newEmployees.length;

    this.budget.debit += additionalDebit; //додамо його в дебет
  }

  handleEmployeeStatusChange(employee: Employee, removeFromPreviousDepartment: boolean): void {
    if (removeFromPreviousDepartment) {
      //якщо видаляємо з департменту
      const removalCost = 2000; //видаляємо баланс та оновлюємо бюджет
      this.budget.debit -= removalCost;
    }

    this.employees = this.employees.filter(e => e !== employee);
  }
}

class Company {
  // Клас компанія

  name: string;
  departments: Departments[];
  preHiredPersonnel: PreHiredEmployee[];
  allPersonnel: (Employee | PreHiredEmployee)[];

  constructor(
    name: string,
    departments: Departments[],
    preHiredPersonnel: PreHiredEmployee[],
    allPersonnel: (Employee | PreHiredEmployee)[]
  ) {
    this.name = name;
    this.departments = departments;
    this.preHiredPersonnel = preHiredPersonnel;
    this.allPersonnel = allPersonnel;
  }

  getAllPersonnel(): (Employee | PreHiredEmployee)[] {
    //отримати усіх співробітників
    return [...this.allPersonnel];
  }
}

class Accounting extends Departments {
  //класс бухгалтерія наслідується від департаменту
  balance: number;
  constructor(balance: number) {
    super('Accounting', 'accounting.domain.com', [], { debit: 0, credit: 0 });//використовуємо батьківський конструктор 
    this.balance = balance;
  }

  takeOnBalance(entity: Employee | Departments): void {
    //отримання балансу співробітника чи департаменту
    if (entity instanceof Employee) {
      console.log(`Taking employee ${entity.name} on the balance sheet.`);
      this.budget.debit += entity.salary;
    } else if (entity instanceof Departments) {
      console.log(`Taking department ${entity.name} on the balance sheet.`);
      this.budget.debit += entity.calculateBalance();
    }
  }

  removeFromBalance(entity: Employee | Departments): void {
    //видалення з балансу співробітника чи департаменту
    if (entity instanceof Employee) {
      console.log(`Removing employee ${entity.name} from the balance sheet.`);
      this.budget.debit -= entity.salary;
    } else if (entity instanceof Departments) {
      console.log(`Removing department ${entity.name} from the balance sheet.`);
      this.budget.debit -= entity.calculateBalance();
    }
  }

  paySalaries(allPersonnel: (Employee | PreHiredEmployee)[]): void {
    //виплата зарабітної плати співробітника або попередньо найнятого співробітника
    allPersonnel.forEach(person => {
      if (person instanceof Employee && person.status === EmployeeStatus.Active) {
        //як-що співробітник має статус активний

        if (person.paymentMethod === PaymentMethod.Internal) {
          console.log(`Processing internal payment for ${person.name}`);
        }
      } else if (person instanceof PreHiredEmployee) {
        // Раніше найнятий персонал отримує зовнішні виплати
        console.log(`Processing external payment for previously hired ${person.name}`);
      }
    });
  }
}





