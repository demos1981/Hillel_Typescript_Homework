import { Accountings } from "./Accounting";


describe('Accountings',()=>{
    let accounting:Accountings;
    beforeEach(()=>{
        accounting = new Accountings(4000);
    });

    it('should create an instance of Accountings',()=>{
        expect(accounting).toBeInstanceOf(Accountings);
    });

    it('should track animal expenses', () => {
    const animalExpense = 250;

    accounting.addExpenseForAnimal(animalExpense);
    console.log = jest.fn();
    accounting.addExpenseForAnimal(100);
  });

   it('should track employee expenses', () => {
    const employeeExpense = 500;

    accounting.addExpenseForEmployee(employeeExpense);
    console.log = jest.fn();
    accounting.addExpenseForEmployee(300);

  });
    it('should track zoo maintenance expenses and log a message', () => {
    const maintenanceExpense = 750;

    accounting.addForZooMaimnenance(maintenanceExpense);

    console.log = jest.fn();
    accounting.addForZooMaimnenance(200);

   
  });

   it('should generate a financial report with accurate totals and remaining budget', () => {
    const animalExpense = 150;
    const employeeExpense = 400;
    const maintenanceExpense = 600;

    accounting.addExpenseForAnimal(animalExpense);
    accounting.addExpenseForEmployee(employeeExpense);
    accounting.addForZooMaimnenance(maintenanceExpense);


    const capturedLogs = [];
    console.log = jest.fn((message) => capturedLogs.push(message));

    accounting.generateFinancialReports();

    expect(capturedLogs.length).toBe(6);
    const totalExpenses = animalExpense + employeeExpense + maintenanceExpense;
   
  });
})