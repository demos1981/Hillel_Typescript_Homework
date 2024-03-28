import { Accountings } from './Accounting';

describe('Accountings', () => {
  let accounting: Accountings;
  beforeEach(() => {
    accounting = new Accountings(100000, 10000, 5000, 9000);
  });

  it('should create an instance of Accountings', () => {
    expect(accounting).toBeInstanceOf(Accountings);
  });

  it('should track animal expenses', () => {
    const animalExpense = 10000;

    accounting.addExpenseForAnimal(animalExpense);
  });

  it('should track employee expenses', () => {
    const employeeExpense = 5000;

    accounting.addExpenseForEmployee(employeeExpense);
  });
  it('should track zoo maintenance expenses and log a message', () => {
    const maintenanceExpense = 9000;

    accounting.addForZooMaimnenance(maintenanceExpense);
  });

  it('should have correct properties', () => {
    expect(accounting.budgetsAll).toBe(100000);
    expect(accounting.animalsExpenses).toBe(10000);
    expect(accounting.employeesExpenses).toBe(5000);
    expect(accounting.zooMaintenances).toBe(9000);
  });

  it('should set and get animalsExpenses', () => {
    const animalExpenses = 13000;
    accounting.animalsExpenses = animalExpenses;
    expect(accounting.animalsExpenses).toBe(animalExpenses);
  });

  // it('should throw error acessing animalsExpenses', () => {
  //   accounting = new Accountings(200000, 30000, 15000, 10000);
  //   expect(() => accounting.animalsExpenses).toThrow('It is not animals expenses');
  // });
  it('should generate a financial report with accurate totals and remaining budget', () => {
    const animalExpense = 10000;
    const employeeExpense = 5000;
    const maintenanceExpense = 9000;

    accounting.addExpenseForAnimal(animalExpense);
    accounting.addExpenseForEmployee(employeeExpense);
    accounting.addForZooMaimnenance(maintenanceExpense);

    const capturedLogs = [];
    accounting.generateFinancialReports();

    const totalExpenses = animalExpense + employeeExpense + maintenanceExpense;
    console.log = jest.fn();
  });
});
