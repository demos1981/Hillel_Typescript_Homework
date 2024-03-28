export class Accountings {
  private budgetAll: number;
  private _animalExpenses: number;
  private _employeeExpenses: number;
  private _zooMaintenance: number;

  constructor(budget: number, animalExpenses: number, employeeExpenses: number, zooMaintenance: number) {
    this.budgetAll = budget;
    this._animalExpenses = animalExpenses;
    this._employeeExpenses = employeeExpenses;
    this._zooMaintenance = zooMaintenance;
  }
  public get budgetsAll(): number {
    if (!this.budgetAll) throw new Error('It is not budget');
    return this.budgetAll;
  }
  public set budgetsAll(value: number) {
    this.budgetAll = value;
  }
  public get animalsExpenses(): number {
    if (!this._animalExpenses) throw new Error('It is not animals');
    return this._animalExpenses;
  }

  public set animalsExpenses(value: number) {
    this._animalExpenses = value;
  }

  public get employeesExpenses(): number {
    if (!this._employeeExpenses) throw new Error('It is not employee');
    return this._employeeExpenses;
  }

  public set employeesExpenses(value: number) {
    this._employeeExpenses = value;
  }

  public get zooMaintenances(): number {
    if (!this._zooMaintenance) throw new Error('It is not zooMaintanence');
    return this._zooMaintenance;
  }
  public set zooMaintenances(value: number) {
    this._zooMaintenance = value;
  }

  public addExpenseForAnimal(amount: number): void {
    this._animalExpenses += amount;
    console.log(`Expenses of ${amount} added for employee payment`);
  }

  public addExpenseForEmployee(amount: number): void {
    this._employeeExpenses += amount;
    console.log(`Expense of ${amount} added for employee payment.`);
  }

  public addForZooMaimnenance(amount: number): void {
    this._zooMaintenance += amount;
    console.log(`Was spent on maintenance of the zoo`);
  }

  public generateFinancialReports(): void {
    console.log('Financial Report:');
    console.log(`Total animal care expenses: $${this._animalExpenses}`);
    console.log(`Total employee payment expenses: $${this._employeeExpenses}`);
    console.log(`Total maintenance of the zoo $${this._zooMaintenance}`);
    const totalExpenses = this._animalExpenses + this._employeeExpenses + this._zooMaintenance;
    console.log(`Total expenses: $${totalExpenses}`);
    const remainingBudget = this.budgetAll - totalExpenses;
    console.log(`Remaining budget: $${remainingBudget}`);
  }
}
