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
export interface IEmployees{
    name:string;
    age:number;
    position:string;

}

export interface IAnimals{
    kind:string;
    name:string;
    age:number;
    health:string;
}

export interface IVisitors{
    name:string;
    contactData:string;
}

export interface ICustomer extends IVisitors{}


export interface ITickets{
    type:'adult' | 'child' | 'family';
    value:number;
}
//Интерфейс издателя объявляет набор методов для управлениями подписчиками
export interface ISubject {
    // Присоединяет наблюдателя к издателю.
    attach(observer: IObserver): void;

    // Отсоединяет наблюдателя от издателя.
    detach(observer: IObserver): void;

    // Уведомляет всех наблюдателей о событии.
    notify(): void;
}


//Интерфейс Наблюдателя объявляет метод уведомления, который издатели используют для оповещения своих подписчиков.
export interface IObserver {
    // Получить обновление от субъекта.
    update(subject: ISubject): void;
}

export abstract class BusinessLogicController implements ISubject {

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
export class ReminderController extends BusinessLogicController{
  
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
export class MarketingControllerEvent extends BusinessLogicController{
   
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

export class MarketingControllerPromo extends BusinessLogicController{
   
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

export class NotificationBeforeClosing implements IObserver {
    public update(subject: ISubject): void {
        if (subject instanceof ReminderController && subject.stateNumber <= 15 && subject.stateNumber >=0 ) {
            console.log("Zoo is may closing soon. Please make your way to the exit.");
        }
    }
}

export class NotificationBeforeLeaving implements IObserver {
    public update(subject: ISubject): void {
        
        if (subject instanceof ReminderController && subject.stateNumber == 0 ) {
           console.log("Thank you for visiting the zoo. We hope you had a great time!");
        }
    }
}

export class NewsletterEvents implements IObserver{
    public update(subject:ISubject):void{
          if (subject instanceof MarketingControllerEvent && subject.stateEvent ) {
           console.log(subject.stateEvent);
        }
    }
}

export class NewsletterPromo implements IObserver{
    public update(subject:ISubject):void{
          if (subject instanceof MarketingControllerPromo && subject.statePromo ) {
           console.log(subject.statePromo);
        }
    }
}
export class TicketManager{
    private availableTickets:{[type:string]:number}={
        adult:10,
        child:3,
        family:4
    };

    public sellTicketsControls(tickets:ITickets[]):void{
        for(const ticket of tickets){
            if(this.availableTickets[ticket.type]>0){
                this.availableTickets[ticket.type]--;
                console.log(`Ticket sold ${ticket.type}`);
            }else {
                console.log(`Ticket ${ticket.type}are sold out `);
            }
        }
    }
}
export class CashRegister {
    private visitor:IVisitors[] = [];
    private customer:ICustomer[] = [];
    private ticketManager:TicketManager = new TicketManager();
    protected amountTicket:number = 0;
  


    public sellTickets(tickets:ITickets[]):void{
        this.ticketManager.sellTicketsControls(tickets);
        this.amountTicket+=tickets.reduce((total,ticket)=>total + ticket.value,0);
        console.log(`Total amount collected:$${this.amountTicket}`);

     
//           switch (tickets.type) {
//     case 'adult':
//     case 'child':
//     case 'family':
//       this.amountTicket += tickets.value;
//       console.log(`Tickets sold for the amount $${this.amountTicket}`);
//       break;
//     default:
//       console.log('No tickets sold');
//       break;
//   }
  
 
    }
    public addPeople(visitor:IVisitors):void{
         
        this.visitor.push(visitor);
        this.customer.push({...visitor});
        console.log(visitor);
       
    }

}


export class Reporting {
    private dailyReport:number = 0;

   public collectingDataRevenue(revenue:number):void{
        this.dailyReport += revenue;
        console.log(`Report collected ${revenue}`);
    }

   public transferingToAccounting():void{
        console.log(`Transferring daily revenue to Accounting:${this.dailyReport}`);
    }

}

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

export class Administration{
    private employes:IEmployees[] = [];
    private animals:IAnimals[] = [];


   public addEmployes(employes:IEmployees):void{
        this.employes.push(employes);
        console.log(`New employe ${employes.name} added`);
    }
  public deleteEmployes(employesName:string):void{
        const index = this.employes.findIndex(employee=>employee.name === employesName);
        if(index !==-1){
            const deleteEmployes = this.employes.splice(index,1)[0];
            console.log(`Employes ${deleteEmployes.name} removed succesfully`);
        }else {
            console.log(`Employes ${employesName} not found`);
        }
    }
   public addAnimals(animals:IAnimals):void{
        this.animals.push(animals);
        console.log(`Animal ${animals.name} added succesfully.`);
    }
   public deleteAnimals(animalsName:string):void{
        const index = this.animals.findIndex(animals=>animals.name === animalsName);
        if(index !== -1){
            const deleteAnimals =this.animals.splice(index, 1)[0];
            console.log(`Animal ${deleteAnimals.name} delete succesfully.`);
        }else{
            console.log(`Animal ${animalsName} not found.`)
        }
    }
  public  promoCreating(promo:string):void{
        console.log('Promo creating');
    }
   public eventsCreating(events:string):void{
        console.log('Event creating');
    }
}


/**
 * Клієнтський код.
 */
//--CashRegister

const cashRegister = new CashRegister();
const tickets:ITickets[] = [
    {type:'adult',value:10},
    {type:'family',value:4},
    {type:'child',value:3},
    {type:'child',value:3}
]

 cashRegister.sellTickets(tickets);

 const visitor: IVisitors = {
  name: 'Albert Fitch',
  contactData: 'john@example.com'
};

cashRegister.addPeople(visitor);



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
admin.deleteEmployes('Jack');
admin.deleteAnimals('Samson');

const promo = 'Subscribe to us on social networks @zoo.instagram.com';
admin.promoCreating(promo);
const events = 'Parrot exhibition from 10.08 to 20.08 from 10-00 to 18-00';
admin.eventsCreating(events);


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













