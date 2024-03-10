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
//Интерфейс издателя объявляет набор методов для управлениями подписчиками
interface ISubject {
    // Присоединяет наблюдателя к издателю.
    attach(observer: IObserver): void;

    // Отсоединяет наблюдателя от издателя.
    detach(observer: IObserver): void;

    // Уведомляет всех наблюдателей о событии.
    notify(): void;
}


//Интерфейс Наблюдателя объявляет метод уведомления, который издатели используют для оповещения своих подписчиков.
interface IObserver {
    // Получить обновление от субъекта.
    update(subject: ISubject): void;
}

abstract class BusinessLogicController implements ISubject {

    protected observers: IObserver[] = [];
    
    //   constructor(private closingTime: Date) {
       
    // }
   
    public attach(observer: IObserver): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }
        this.observers.push(observer);
    }

    public detach(observer: IObserver): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
    }

    /**
     * Запуск обновления в каждом подписчике.
     */
    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
    
 
   
}
class ReminderController extends BusinessLogicController{
  
    public stateNumber!:number;


        constructor(private closingTime: Date) {
       super();
    }
  
    public someNotification(): void {
       const currentTime = new Date();
       const timeDiff = this.closingTime.getTime() - currentTime.getTime();
       this.stateNumber = Math.floor(timeDiff / (1000 * 60));
       this.notify();
    }

   
}
class MarketingControllerEvent extends BusinessLogicController{
   
     public stateEvent!:string;

     private event:string;
  

          constructor(event:string) {
       super();
       this.event = event;
     
    }



    public eventsNewsletter(): void {
      this.stateEvent = this.event;
       this.notify();
    }

}

class MarketingControllerPromo extends BusinessLogicController{
   
     public statePromo!:string;

     private promo:string;
  

          constructor(promo:string) {
       super();
       this.promo = promo;
     
    }

 
    

    public promoNewsletter(): void {
      this.statePromo = this.promo;
       this.notify();
    }

}

class NotificationBeforeClosing implements IObserver {
    public update(subject: ISubject): void {
        if (subject instanceof ReminderController && subject.stateNumber <= 15 && subject.stateNumber >=0 ) {
            console.log("Zoo is may closing soon. Please make your way to the exit.");
        }
    }
}

class NotificationBeforeLeaving implements IObserver {
    public update(subject: ISubject): void {
        
        if (subject instanceof ReminderController && subject.stateNumber == 0 ) {
           console.log("Thank you for visiting the zoo. We hope you had a great time!");
        }
    }
}

class NewsletterEvents implements IObserver{
    public update(subject:ISubject):void{
          if (subject instanceof MarketingControllerEvent && subject.stateEvent ) {
           console.log(subject.stateEvent);
        }
    }
}

class NewsletterPromo implements IObserver{
    public update(subject:ISubject):void{
          if (subject instanceof MarketingControllerPromo && subject.statePromo ) {
           console.log(subject.statePromo);
        }
    }
}

class CashRegister {
    private visitor:IVisitors[] = [];
    private customer:ICustomer[] = [];
    protected amountTicket:number = 0;
  
    // constructor(private closingTime: Date) {
       
    // }

    sellTickets(tickets:{type:string,value:number}):void{
     
          switch (tickets.type) {
    case 'adult':
    case 'child':
    case 'family':
      this.amountTicket += tickets.value;
      console.log(`Tickets sold for the amount $${this.amountTicket}`);
      break;
    default:
      console.log('No tickets sold');
      break;
  }
  
 
    }
    addPeople(visitor:IVisitors):void{
         
        this.visitor.push(visitor);
        this.customer.push({...visitor});
        console.log(visitor);
       
    }

}
// class MarketingDepartments{
//     constructor(private customerList:ICustomer[]){}
//     sandPromo(customers: ICustomer[]):void{
//         this.customerList.forEach(customers =>{
//             console.log(`Sending promotion to ${customers.name} at ${customers.contactData}`)
//         })
//         console.log('Promotion sent succesfully.');
//     }

//     sendNews(news: string):void {
//         this.customerList.forEach(customer => {
//             console.log(`Sending news to ${customer.name} at ${customer.contactData}: ${news}`);
//     });
//     console.log("News sent successfully.");
//   }
// }

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
    private zooMaintenance:number = 0;

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
    
    addForZooMaimnenance(amount:number):void{
        this.zooMaintenance += amount;
        console.log(`Was spent on maintenance of the zoo`)

    }

  
    generateFinancialReports():void {
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
    promoCreating(promo:string):void{
        console.log('Promo creating');
    }
    eventsCreating(events:string):void{
        console.log('Event creating');
    }
}


/**
 * Клиентский код.
 */
//--CashRegister

 const cashRegister = new CashRegister();
const tickets:ITickets = {
    type:'adult',
    value:30,

}

 cashRegister.sellTickets(tickets);

 const visitor: IVisitors = {
  name: 'Albert Fitch',
  contactData: 'john@example.com'
};

cashRegister.addPeople(visitor);


// cashRegister.notificationBeforeLeaving();



const customer:ICustomer[] = [
    {name:'Valeriya',contactData:'valeriya@gmail.com'},
    {name:'Sergey',contactData:'andreev@gmail.com'}
];

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
accounting.addForZooMaimnenance(9000);
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


const promo = 'Subscribe to us on social networks @zoo.instagram.com';
admin.promoCreating(promo);
const events = 'Parrot exhibition from 10.08 to 20.08 from 10-00 to 18-00';
admin.eventsCreating(events);


admin.deleteEmployes('Jack');
admin.deleteAnimals('Samson');


const closingTime = new Date();
closingTime.setHours(18,0,0,0);
const subject = new ReminderController(closingTime);

const beforeClosing = new NotificationBeforeClosing();
subject.attach(beforeClosing);
subject.someNotification();
subject.detach(beforeClosing);

const beforeLeaving = new NotificationBeforeLeaving();
subject.attach(beforeLeaving);
subject.someNotification();
subject.detach(beforeLeaving);


const eventNews = events;
const eventsNew = new MarketingControllerEvent(eventNews);
const newsletterEvent = new NewsletterEvents();
eventsNew.attach(newsletterEvent);
eventsNew.eventsNewsletter();
eventsNew.detach(newsletterEvent);

const promoNews = promo;
const promoNew = new MarketingControllerPromo(promoNews);
const newsletterPromo = new NewsletterPromo();
promoNew.attach(newsletterPromo);
promoNew.promoNewsletter();
eventsNew.detach(newsletterPromo);








subject.detach(beforeLeaving);




