//До нас звернувся невеликий приватний зоопарк для створення застосунку, який полегшить управління бізнесом. 
//Нижче опис сутностей, які є на даний момент. Вам необхідно ознайомиться, поставити уточнювальні запитання, після чого побудувати програму на основі наявних у вас знань.Використовуйте шаблони, можливості ТЗ і своє уявлення про прекрасне.

//Проєкт "Зоопарк":

//"Каса":

//Відповідає за продаж квитків. Квитки можуть бути трьох видів: дорослі, дитячі та сімейні.

//Кожен квиток має вартість.

//Під час продажу квитка, Каса додає дані про відвідувача у два списки: поточні відвідувачі та клієнти.

//"Поточні відвідувачі":

//Зберігає інформацію про відвідувачів, включаючи їхні імена та контактні дані.

//Можливість оповіщення відвідувачів за 15 хвилин до закриття і перед відходом.

//"Клієнти":

//Дані клієнтів зберігаються у Відділу реклами.

//Відділ реклами використовує цей список для розсилки новин про зоопарк і рекламні акції.

//"Відділ реклами":

//Відповідає за маркетингові та рекламні заходи.

//Використовує список клієнтів для розсилки новин про зоопарк і рекламні акції.

//"Виручка":

//Каса збирає дані про виручку за день.

//Ці дані передаються в Бухгалтерію.

//"Бухгалтерія":

//Відповідає за фінансове управління зоопарку.

//Розпоряджається бюджетом, включно з оплатою співробітників, закупівлею корму для тварин і обслуговуванням зоопарку.

//Зберігає дані про всіх співробітників, тварин і виплати.

//Можливість генерувати фінансові звіти.

//"Адміністрація":

//Відповідає за управління співробітниками і тваринами.

//Може додавати і видаляти співробітників і тварин.

//Створює сповіщення про рекламні акції та інші важливі події в зоопарку.

//"Тварини":

//Включає в себе інформацію про кожну тварину, таку як вид, ім'я, вік, здоров'я та інші характеристики.

//"Співробітники":

//Адміністрація може додавати і видаляти співробітників.

//Співробітники можуть мати різні посади та обов'язки, які слід враховувати.

//"Бюджет":

//Бухгалтерія розпоряджається бюджетом і стежить за фінансами зоопарку.

//Можливість вести бюджетний облік і надавати фінансові звіти.
interface IEmployees{
    name:string;
    age:number;
    position:string;

}

interface IAnimals{
    kind:string;
    name:string;
    age:number;
    health:string;
}

interface IVisitors{
    name:string;
    contactData:string;
}

interface ICustomer extends IVisitors{}


interface ITickets{
    type:'adult' | 'child' | 'family';
    value:number;
}

// interface IBudget{
//     budgetAll:number,
   
// }


// interface Receipt{

// }
class CashRegister {
    private visitor:IVisitors[] = [];
    private customer:ICustomer[] = [];
  
    constructor(private closingTime: Date) {
       
    }

    sellTickets(tickets:{type:string,value:number}):void{
      let amountTicket = 0;
      if (tickets.type = 'adult'){
        amountTicket += tickets.value;
        
      }else if(tickets.type = 'child'){
        amountTicket += tickets.value;
       
        
      }else if(tickets.type = 'family'){
        amountTicket += tickets.value;
      
      }else{
        console.log('No tickets sold');
      }
      console.log(`Tickets sold for the amount ${amountTicket}`);
  
 
    }
    addPeople(visitor:IVisitors):void{
         
        this.visitor.push(visitor);
        this.customer.push({...visitor});
        console.log(visitor);
       
    }
  
    notificationBeforeClosing():void{
    const currentTime = new Date();
    const timeDiff = this.closingTime.getTime() - currentTime.getTime();
    const minutesUntilClosing = Math.floor(timeDiff / (1000 * 60));
   
    if (minutesUntilClosing <= 15) {
      console.log("Zoo is may closing soon. Please make your way to the exit.");
    }
    }

    notificationBeforeLeaving():void{
    const currentTime = new Date();
    const timeDiff = this.closingTime.getTime() - currentTime.getTime();
    const minutesUntilClosing = Math.floor(timeDiff / (1000 * 60));
    if (minutesUntilClosing <= 0) {
      console.log("Thank you for visiting the zoo. We hope you had a great time!");
    }
   
    }
}
class MarketingDepartments{
    constructor(private customerList:ICustomer[]){}
    sandPromo(customers: ICustomer[]):void{
        this.customerList.forEach(customers =>{
            console.log(`Sending promotion to ${customers.name} at ${customers.contactData}`)
        })
        console.log('Promotion sent succesfully.');
    }

    sendNews(news: string):void {
        this.customerList.forEach(customer => {
            console.log(`Sending news to ${customer.name} at ${customer.contactData}: ${news}`);
    });
    console.log("News sent successfully.");
  }
}

class Reporting {
    private dailyReport:number = 0;

    collectingDataRevenue(revenue:number):void{
        this.dailyReport += revenue;
        console.log(`Report collected ${revenue}`);
    }

    transferingToAccounting():void{
        console.log(`Transferring daily revenue to Accounting:${this.dailyReport}`);
    }

}

class Accountings{
    private budgetAll:number = 0;
    private animalExpenses:number = 0;
    private employeeExpenses:number = 0;

    constructor(budget:number){
        this.budgetAll = budget;
    }

    addExpenseForAnimal(amount:number):void{
        this.animalExpenses += amount;
        console.log(`Expenses of ${amount} added for employee payment`);
    }
      
    addExpenseForEmployee(amount: number):void {
    this.employeeExpenses += amount;
    console.log(`Expense of ${amount} added for employee payment.`);
  }
  
    generateFinancialReports():void {
    console.log("Financial Report:");
    console.log(`Total animal care expenses: $${this.animalExpenses}`);
    console.log(`Total employee payment expenses: $${this.employeeExpenses}`);
    const totalExpenses = this.animalExpenses + this.employeeExpenses;
    console.log(`Total expenses: $${totalExpenses}`);
    const remainingBudget = `${this.budgetAll} - $${totalExpenses}`;
    console.log(`Remaining budget: $${remainingBudget}`);
  }

}

class Administration{
    private employes:IEmployees[] = [];
    private animals:IAnimals[] = [];
    addEmployes(employes:IEmployees):void{
        this.employes.push(employes);
        console.log(`New employe ${employes.name} added`);
    }
    deleteEmployes(employesName:string):void{
        const index = this.employes.findIndex(employee=>employee.name === employesName);
        if(index !==-1){
            const deleteEmployes = this.employes.splice(index,1)[0];
            console.log(`Employes ${deleteEmployes.name} removed succesfully`);
        }else {
            console.log(`Employes ${employesName} not found`);
        }
    }
    addAnimals(animals:IAnimals):void{
        this.animals.push(animals);
        console.log(`Animal ${animals.name} added succesfully.`);
    }
    deleteAnimals(animalsName:string):void{
        const index = this.animals.findIndex(animals=>animals.name === animalsName);
        if(index !== -1){
            const deleteAnimals =this.animals.splice(index, 1)[0];
            console.log(`Animal ${deleteAnimals.name} delete succesfully.`);
        }else{
            console.log(`Animal ${animalsName} not found.`)
        }
    }
    promoNotification(promo:string):void{
        console.log(`Subscribe to us on social networks ${promo}`);
    }
    eventsNotification(events:string){
        console.log(`Come to us at ${events}`);
    }
}


//Перевірка
//--CashRegister
const closingTime = new Date();
closingTime.setHours(23,0,0,0);



const cashRegister = new CashRegister(closingTime);
const tickets:ITickets = {
    type:'adult',
    value:30,

}

 cashRegister.sellTickets(tickets);

 const visitor: IVisitors = {
  name: "John Doe",
  contactData: "john@example.com"
};

cashRegister.addPeople(visitor);


cashRegister.notificationBeforeLeaving();
cashRegister.notificationBeforeClosing();


const customer:ICustomer[] = [
    {name:'Valeriya',contactData:'valeriya@gmail.com'},
    {name:'Sergey',contactData:'andreev@gmail.com'}
];
//--MArketing Department
const marketingDepartment = new MarketingDepartments(customer);
marketingDepartment.sandPromo(customer);

const news = 'New exhibit opened next weekend!';
marketingDepartment.sendNews(news);
//--Reports
const reports = new Reporting();
const ticketSales = 200;
reports.collectingDataRevenue(ticketSales);
reports.transferingToAccounting();

//--Accounting
const initialBudget = 100000;
const accounting = new Accountings(initialBudget);
accounting.addExpenseForAnimal(10000);
accounting.addExpenseForEmployee(8000);
accounting.generateFinancialReports();

//--Administration
const admin = new Administration();
const newEmployee:IEmployees = {
    name:'Jack',
    age:35,
    position:'Security',
};
admin.addEmployes(newEmployee);

const newAnimals:IAnimals = {
    kind:'Lion',
    name:'Samson',
    age:6,
    health:'Ok',
};
admin.addAnimals(newAnimals);
const promo = '@zoo.instagram.com'
admin.promoNotification(promo);
const events = 'Parrot exhibition from 10.08 to 20.08 from 10-00 to 18-00'
admin.eventsNotification(events);
admin.deleteEmployes('Jack');
admin.deleteAnimals('Samson');




