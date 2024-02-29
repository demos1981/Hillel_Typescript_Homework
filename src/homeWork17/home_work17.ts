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

interface IBudget{

}


interface Receipt{

}
class CashRegister{
    private visitor:IVisitors[] = [];
    private customer:ICustomer[] = [];

    constructor(private closingTime: Date) {}

    sellTickets(ticket:ITickets,visitor:IVisitors){
       console.log(`thank's thank you for purchasing tickets to our zoo`);

    }

    notificationBeforeClosing(){
    const currentTime = new Date();
    const timeDiff = this.closingTime.getTime() - currentTime.getTime();
    const minutesUntilClosing = Math.floor(timeDiff / (1000 * 60));
   
    if (minutesUntilClosing <= 15) {
      console.log("Zoo is may closing soon. Please make your way to the exit.");
    }
    }

    notificationBeforeLeaving(){
    const currentTime = new Date();
    const timeDiff = this.closingTime.getTime() - currentTime.getTime();
    const minutesUntilClosing = Math.floor(timeDiff / (1000 * 60));
    if (minutesUntilClosing <= 0) {
      console.log("Thank you for visiting the zoo. We hope you had a great time!");
    }
   
    }
}
class MarketingDepartments{
    sandPromo(customers: ICustomer[]){

    }
}

class Reporting {
    private dailyReport:number = 0;

    collectingDataRevenue(revenue:number){}

    transferingToAccounting(){}

}

class Accountings {
    private budget:IBudget;
    constructor(budget:IBudget){
        this.budget = budget;
    }

    generatefinanceReport(){}
}

class Administration{
    private employes:IEmployees[] = [];
    private animals:IAnimals[] = [];
    addEmployes(employes:IEmployees){}
    deleteEmployes(employes:IEmployees){}
    addAnimals(animals:IAnimals){}
    deleteAnimals(animals:IAnimals){}
    promoNotification(){}
    eventsNotification(){}
}


//exaples

const closingTime = new Date();
closingTime.setHours(23,0,0,0);
const cashRegister = new CashRegister(closingTime);
cashRegister.notificationBeforeLeaving();
cashRegister.notificationBeforeClosing();

const visitor: IVisitors = {
  name: "John Doe",
  contactData: "john@example.com"
};
const ticket: ITickets = {
  type: 'adult',
  value: 10
};
cashRegister.sellTickets(ticket,visitor);



/*
class Kassa{

    addContact(){} 
    ticketSales(){}
}
class Visitors{}
class Clients{}
class MarketingDepartments{
    saveClients(){}
}

class Accountung{
    financeManagement(){}
}
class Administration{
    addEmployes(){}
    deleteEmployes(){}
    addAnimals(){}
    deleteAnimals(){}
    advertisingNotifications(){}
}

class Employees{}*/
