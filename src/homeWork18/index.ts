import { IVisitors,ITickets,ICustomer,IEmployees,IAnimals,IObserver,ISubject } from "./InterfacesAndTypeAlias";
import { CashRegister } from "./CashRegister";
import { Reporting } from "./Reporting";
import { Accountings } from "./Accounting";
import { Administration } from "./Administration";
import { ReminderController } from "./ReminderController";
import { NotificationBeforeClosing } from "./NotificationClosing";
import { NotificationBeforeLeaving } from "./NotificationLeaving";
import { MarketingControllerPromo } from "./MarketingPromo";
import { MarketingControllerEvent } from "./MarcetingEvents";
import { NewsletterEvents } from "./NewsletterEvents";
import { NewsletterPromo } from "./NewsletterPromo";









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
