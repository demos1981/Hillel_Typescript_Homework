

export class Accountings{
    private budgetAll:number = 0;
    private animalExpenses:number = 0;
    private employeeExpenses:number = 0;
    private zooMaintenance:number = 0;

    constructor(budget:number){
        this.budgetAll = budget;
    }

  public addExpenseForAnimal(amount:number):void{
        this.animalExpenses += amount;
        console.log(`Expenses of ${amount} added for employee payment`);
    }
      
   public addExpenseForEmployee(amount: number):void {
        this.employeeExpenses += amount;
        console.log(`Expense of ${amount} added for employee payment.`);
    }
    
   public addForZooMaimnenance(amount:number):void{
        this.zooMaintenance += amount;
        console.log(`Was spent on maintenance of the zoo`)

    }

  
   public generateFinancialReports():void {
    console.log("Financial Report:");
    console.log(`Total animal care expenses: $${this.animalExpenses}`);
    console.log(`Total employee payment expenses: $${this.employeeExpenses}`);
    console.log(`Total maintenance of the zoo $${this.zooMaintenance}`)
    const totalExpenses = this.animalExpenses + this.employeeExpenses + this.zooMaintenance;
    console.log(`Total expenses: $${totalExpenses}`);
    const remainingBudget = this.budgetAll - totalExpenses;
    console.log(`Remaining budget: $${remainingBudget}`);
    }

}