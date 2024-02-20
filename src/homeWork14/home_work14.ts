//Модель регистрации автомобиля
interface IClient{
    readonly firstName:string;
    readonly lastName:string;
    readonly years:number;
}

interface ICar{
    readonly carBrand:string;
    readonly carColor:string;
    readonly carYear:number;
}

class Client implements IClient{
private  _accountNumber?:number | null;
private readonly _firstName:string;
private readonly _lastName:string;
private readonly _years:number;

    constructor(firstName:string,lastName:string,years:number,accountNumber?:number){
        this._accountNumber = accountNumber ?? null;
        this._firstName = firstName;
        this._lastName = lastName;
        this._years = years;

    }

    public get accountNumber():number{
        if(!this._accountNumber) throw new Error('New client');
        return this._accountNumber;
    }

    public set accountNumber(value:number){
        this._accountNumber = value;
    }

    public get firstName():string{
      
        return this._firstName;
    }

      public get lastName():string{
      
        return this._lastName;
    }
      public get years():number{
      
        return this._years;
    }
}

class Car implements ICar{
     private readonly _carBrand:string;
     private readonly _carColor:string;
     private readonly _carYear:number;
    constructor(carBrand:string,carColor:string,carYear:number){
        this._carBrand = carBrand;
        this._carColor = carColor;
        this._carYear = carYear;
    }

        public get carBrand():string{
        return this._carBrand;
    }

        public get carColor():string{
        return this._carColor;
    }

        public get carYear():number{
        if(this._carYear<=1960) throw new Error('You must enter year of automobile')
        return this._carYear;
    }



}

class TakeDokument{
public takeDoks(client:Client):string{
    return 'Your doks is: Aprooved!\n';
}
}

class CarInspection{
public inspectCar(car:Car):string{
    return 'Your car: Inspected!\n';
}
}

class IssueOfNumbers{
    public ganarateCarNumber():string{
        let number = "Ah78809 VK";
        return `Your car number is: ${number} \n`;
    }

    public getCarNumber():string{
        return 'Your number is: Ready\n';
    }

}

class AvtoRegistration{
//  protected readonly accounts!:Record<number,Client>;
//  protected readonly cars!:Record<number,Car>;
protected car:Car;
protected client:Client;
protected takeDokument:TakeDokument;
protected carInspection:CarInspection;
protected issueOfNumbers:IssueOfNumbers;

constructor(car?:Car,client?:Client,takeDokument?:TakeDokument,carInspection?:CarInspection,issueOfNumbers?:IssueOfNumbers){
    this.takeDokument = takeDokument || new TakeDokument();
    this.carInspection = carInspection || new CarInspection();
    this.issueOfNumbers = issueOfNumbers ||new IssueOfNumbers();
    this.client = client || new Client('first','last',1975,);
    this.car = car ||new Car('carBrend','carColor',1991);


    
}

public addAccount(client:Client):void{
    const account = new Client(
        
            client.firstName,
            client.lastName,
            client.years,
        
    );
  
     //this.accounts[client.accountNumber] = account;
    console.log(account);
    
}
public addCars(car:Car):void{
    const carItem = new Car(
        car.carBrand,
        car.carColor,
        car.carYear
    )
console.log(carItem);
}

public operatinRegistration():string{
    let result = 'Your registration is: Started\n ';
    result += this.takeDokument.takeDoks(this.client);
    result += this.carInspection.inspectCar(this.car);
    result += this.issueOfNumbers.ganarateCarNumber()
    result += 'In what state is the autonomer currently\n';
    result += this.issueOfNumbers.getCarNumber();
    result += this.addAccount(this.client);
    result += this.addCars(this.car);
    return result;
}

}


function clientInterface(autoregistration:AvtoRegistration){
    console.log(autoregistration.operatinRegistration());
}

const takeDokument = new TakeDokument();
const carInspection = new CarInspection();
const issueOfNumbers = new IssueOfNumbers();
const car = new Car('Honda','Red',1990);
const clients = new Client('Andrey','Sergeev',1988,34);
const autoregistration = new AvtoRegistration(car,clients,takeDokument,carInspection,issueOfNumbers);
clientInterface(autoregistration);