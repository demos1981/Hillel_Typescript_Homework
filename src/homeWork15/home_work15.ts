//Вам необхідно розширити поведінку прикладу з банківським рахунком. 
//Додайте до нашої програми компонент Bank, який вміє створювати ти закривати акаунти для клієнтів. 
//Кліент може мати декілька аккаунтів з різними типами валют. Bank повинен бути Singleton!

//* Для тих, кому цікаво ускладнити - додайте можливість ставити транзацкції у чергу та мати можливість їх повторювати чи відміняти (Command)




interface IObserver {
  update(observable: IObservable): void;
}


interface IObservable {
  attach(observer: IObserver): void;
  detach(observer: IObserver): void;
  notify(): void;

}


interface IBankClient {
  firstName: string;
  lastName: string;
}
enum CurrencyTypeEnum {
EUR = 'EUR',
USD = 'USD',
GBP = 'GBP',
UAH = 'UAH',
}

type CurrencyRate = Record<CurrencyTypeEnum,number>;
interface ICurrencyConversionStrategy {
    convert(amount:number,currency:CurrencyTypeEnum):number;

}
//інтерфейс або абстрактний клас, що визначає метод execute() для виконання дії.
interface IBankCommand {
  execute(): void;
}
interface IAccount{
    ownerName:IBankClient;
    balance:number;
    currency:CurrencyTypeEnum;
}
// interface IBank{

//       openBankAccount():void;
//       closeBankAccount():void;
// }


class CurrentRateConversionStrategy implements ICurrencyConversionStrategy{
    private readonly exchangeRates: CurrencyRate;
    constructor(exchangeRates:CurrencyRate){
        this.exchangeRates = exchangeRate;
    }

     convert(amount:number,currency:CurrencyTypeEnum):number{
         const rate = this.exchangeRates[currency];
           if(!rate) throw new Error(`Exchange rate not available for currency ${currency}`);
           return amount * rate;
     }
   


}
abstract class Observable implements IObservable {
  private readonly observers: IObserver[] = [];


  public attach(observer: IObserver): void {
    const isExist = this.observers.includes(observer);


    if (isExist)
      return console.log('Observable: Observer has been attached already.');


    this.observers.push(observer);
    console.log('Observable:: Attached an observer.');
  }


  public detach(observer: IObserver): void {
    const observerIndex = this.observers.indexOf(observer);


    if (observerIndex === -1)
      return console.log('Observable: Nonexistent observer.');


    this.observers.splice(observerIndex, 1);
    console.log('Observable: Detached an observer.');
  }


  public notify(): void {
    console.log('Observable: Notifying observer...');
    for (const observer of this.observers) {
      observer.update(this);
    }
  }
}


class BankAccount extends Observable {
  private readonly currency: string;
  private readonly number: number;
  protected balance = 5000;
  private _holderName!: string;
  private _conversionStrategy!: ICurrencyConversionStrategy;


  constructor(
    client: IBankClient,
    currency: string,
    conversionStrategy: ICurrencyConversionStrategy
  ) {
    super();
    this.currency = currency;
    this.holderName = client;
    this.number = 12345678;
    this._conversionStrategy = conversionStrategy;
  }


  public get balanceInfo(): string {
    return `${this.currency}${this.balance}`;
  }


  public get holderName(): string {
    return this._holderName;
  }


  public set holderName({ firstName, lastName }: IBankClient) {
    if (!firstName.trim()) throw new Error(`Client first name can't be empty!`);
    if (!lastName.trim()) throw new Error(`Client last name can't be empty!`);


    this._holderName = `${lastName} ${firstName}`;
  }


  public set conversionStrategy(strategy: ICurrencyConversionStrategy) {
    this._conversionStrategy = strategy;
  }


  public deposit(amount: number): void {
    this.balance += amount;
  }


  public withdraw(amount: number): void {
    if (this.balance < amount)
      throw new Error(
        `Sorry ${this._holderName}, you don't have enough funds!`
      );


    this.balance -= amount;
  }


  public makeTransaction(
    amount: number,
    targetCurrency: CurrencyTypeEnum
  ): void {
    const convertAmount = this._conversionStrategy.convert(
      amount,
      targetCurrency
    );
    this.balance -= convertAmount;


    console.log(
      `Transaction: ${amount} ${this.currency} => ${targetCurrency}, Converted Amount: ${convertAmount} ${targetCurrency}, Balance: ${this.balance} ${this.currency}`
    );
    this.notify();
  }
}


class SMSNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(
      `SMS notification: Your account balance has changed. Current balance ${account.balanceInfo}`
    );
  }
}


class EmailNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(
      `Email notification: Your account balance has changed. Current balance ${account.balanceInfo}`
    );
  }
}


class PushNotification implements IObserver {
  update(account: BankAccount): void {
    console.log(
      `Push notification: Your account balance has changed. Current balance ${account.balanceInfo}`
    );
  }
}

class Bank{
    private static instance: Bank;
    private accounts:IAccount[]=[];
    private constructor(){}
    public static getInstance():Bank{
        if(!Bank.instance){
            Bank.instance = new Bank();
        }
        return Bank.instance;
    }
 public openBankAccount(ownerName:IBankClient,balance:number, currency:CurrencyTypeEnum):number{
    const newAccount = { ownerName, balance: 2000, currency };
    this.accounts.push(newAccount);
    return this.accounts.length - 1;
 }
 public closeBankAccount(accountIndex: number): void {
    if (accountIndex < 0 || accountIndex >= this.accounts.length) {
      throw new Error(`Invalid account index: ${accountIndex}`);
    }
    this.accounts.splice(accountIndex, 1);
    console.log(`this account is closer`);
 }
  public getAccountDetails(accountIndex: number): IAccount | undefined {
    if (accountIndex < 0 || accountIndex >= this.accounts.length) {
      return undefined;
    }
    return this.accounts[accountIndex];
  }
 
}

//Конкретні команди: реалізації команди, які інкапсулюють певні дії (наприклад, TurnOnLightCommand, OpenFileCommand).
class BankOperationRepeate implements IBankCommand {
    
  constructor(private receiver: Receiver) {
  
  }

 public execute(): void {
    this.receiver.repeateAction('repeate');
    
  }
}

class BankOperationClose implements IBankCommand {
  constructor(private receiver: Receiver) {}

   public execute(): void {
    this.receiver. closeAction('close');
  }
}
//Приймач: об’єкт, який фактично виконує дію (світло, файл). Він викликається методом execute() команди
class Receiver {
  repeateAction(repeate:string): void {
    console.log(`Repeate operation (${repeate}.)`);
  }

  closeAction(close:string): void {
    console.log(`Close operation (${close}.)`);
  }
}
//Виклик: об’єкт, який запускає команди (Кнопка, Запис меню). Він не виконує їх безпосередньо, а делегує команді.
class Invoker {
  private commands: IBankCommand[] = [];

  addCommand(command: IBankCommand): void {
    this.commands.push(command);
  }

  executeCommands(): void {
    for (const command of this.commands) {
      command.execute();
    }
    this.commands = []; // Clear executed commands
  }
}

// Usage example
const exchangeRate = {[CurrencyTypeEnum.EUR]:1.1, [CurrencyTypeEnum.GBP]:1.3,[CurrencyTypeEnum.USD]:1.0,[CurrencyTypeEnum.UAH]:38,};
const currentStrategy = new CurrentRateConversionStrategy(exchangeRate);
const accountCurrentRate = new BankAccount({firstName:'Evgeniy',lastName:'Dukhno'},CurrencyTypeEnum.EUR,currentStrategy);
console.log(accountCurrentRate);
accountCurrentRate.makeTransaction(250,CurrencyTypeEnum.GBP);


const bank = Bank.getInstance();
const firstAccount = bank.openBankAccount({firstName:'Veronica',lastName:'Gavrilova'},4000,CurrencyTypeEnum.EUR,);
const secondAccount = bank.openBankAccount({firstName:'Vitaliy',lastName:'Vorobyov'},3000,CurrencyTypeEnum.GBP,);
const showAccounts = bank.getAccountDetails(firstAccount);
console.log(showAccounts);
bank.closeBankAccount(0);

const receiver = new Receiver();
const commandA = new BankOperationRepeate(receiver);
const commandB = new BankOperationClose(receiver);





const invoker = new Invoker();
invoker.addCommand(commandA);
invoker.addCommand(commandB);

invoker.executeCommands();

function clientCode() {
    const bank1 = Bank.getInstance();
    const bank2 = Bank.getInstance();

    if (bank1 === bank2) {
        console.log('Bank is empty.');
    } else {
        console.log('Bank failed, not shure operation is correctly.');
    }
}

clientCode();