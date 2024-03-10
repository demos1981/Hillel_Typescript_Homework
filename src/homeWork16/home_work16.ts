
//Створіть інтерфейс з декількома властивостями. Відтворіть ту саму структуру завдяки Type alias.
//інтерфейс та тайп єліас з з властивостями
interface IFirstInterface {
    firstName:string;
    lastName:string;
    yearsOld:number;
}
type FirstType = {
    firstName:string;
    lastName:string;
    yearsOld:number;
}
//Створіть інтерфейс з анотацією будь-якого функціонального виразу. Відтворіть ту саму структуру завдяки  Type alias.
// інтерфейс та тип з аннотацією функціонального виразу

interface IFunctionInterface{
    (...args:number[]):number;
}

type FunctionType = (...arg:number[])=>number;

//На відміну від інтерфейсу, псевдонім типу також можна використовувати для інших типів, таких як примітиви, об’єднання та кортежі. 
//Продемонструйте у коді цей вираз: створіть псевдонім типу для примітивного значення, обʼєднання та кортежу.
//псевдонім типу для примітивного значення, обʼєднання та кортежу.
//примитиви

type NumberTypeAlias = number;

type StringTypeAlias = string;

type BooleanTypeAlias = boolean;
//також можемо відмітити використання generic в тайп еліасах
type GenericTypeAlias<T> = T;

let gen:GenericTypeAlias<string> = 'String';
console.log(gen);
//перевірка

let bool:BooleanTypeAlias = true;
console.log(bool);

//об'єдннаня типу
type NumberOrStringUnion = number | string ;

type StringOrBooleanUnion = string | boolean;

type MorePrimitiveUnion = number | string | boolean;

//також окремо можемо відмітити використання generic в юніон тайп еліасах

type GenericUnionAlias<T> = T | number;

//перевірка
let numOrString:NumberOrStringUnion = 25;
numOrString = 'Half';
console.log(numOrString);

//кортеж

type NumberTupleAlias = [number,number];

type StringTupleAlias = [string,string];

type MoreTupleAlias = [string,number,boolean];

//також можемо відмітити використання generic в кортеж тайп еліасах

type GenericTupleAlias<T1, T2> = [T1, T2];

//перевірка
let strTuple:StringTupleAlias = ['firstItem','secondItem',];
console.log(strTuple);

//І Interface, і Type alias можна розширити, але синтаксис відрізняється. Крім того, зауважте, що інтерфейс і псевдонім типу не виключають один одного. 
//Тобто інтерфейс може розширювати псевдонім типу, і навпаки. 
//Продемонструйте цей вираз у вашому коді: 

//a. один інтерфейс розширює інший;
interface IAccountInterface {
    firstName:string;
    lastName:string;
    yearsOld:number;
}

interface ICardIdInterface extends IAccountInterface{
    id:number;
    cardType:string;

}
//перевірка
const account:ICardIdInterface = {
firstName:'Alex',
lastName:'Mazurko',
yearsOld:30,
id:123,
cardType:'Auto Card',
}
console.log(account)
// b. один інтерфейс розширює псевдонім типу; 

type AccountType = {
    firstName:string;
    lastName:string;
    yearsOld:number;
}

interface IExtendInterface extends  AccountType{
    id:number;
    cardType:string;
}

//перевірка
const accounNew:IExtendInterface = {
    firstName:'Arina',
    lastName:'Gavrilova',
    yearsOld:25,
    id:385,
    cardType:'Student card',
}
   console.log(accounNew);   

   // c. один псевдонім типу розширює інтерфейс;
   interface IUserInterface {
  firstName: string;
  lastName: string;
  yearsOld:number;
}

type UserType = IUserInterface & {
  id:number;
  cardType:string;

};


//перевірка
function userDetails(user: UserType) {
  console.log(`First name: ${user.firstName}`);
  console.log(`Last name: ${user.lastName}`);
  console.log(`Years old: ${user.yearsOld}`);
  console.log(`Id: ${user.id}`);
  console.log(`Card type: ${user.cardType}`);
 
}

const userAccount:UserType = {
    firstName:'Vladimir',
    lastName:'Yacovlev',
    yearsOld:44,
    id:695,
    cardType:'Auto Card',
}

userDetails(userAccount);


//d. один псевдонім типу розширює інший.

type UserAccountAlias = {
  firstName: string;
  lastName: string;
  yearsOld:number;
}



type IdType = UserAccountAlias & {
  id:number;
  cardType:string;
};

//перевірка
function userId(id:IdType){
    console.log(`First name:${id.firstName}`);
    console.log(`Last name:${id.lastName}`);
    console.log(`Years old:${id.yearsOld}`);
    console.log(`Id number:${id.id}`);
    console.log(`Card type:${id.cardType}`);
}

const id:IdType = {
    firstName:'Denis',
    lastName:'Vladimirov',
    yearsOld:36,
    id:896,
    cardType:'Auto card',
}

userId(id);

//Клас може реалізувати інтерфейс або псевдонім типу, і те, і інше точно таким же чином. 
//Однак зауважте, що клас та інтерфейс вважаються статичними структурами. Як ви думаєте, на що це впливає? 
//Створіть класи, котрі будуть реалізовувати в одному випадку інтерфейси, а в іншому псевдонім типу. 
//Наприкінці, спробуйте вимусити клас реалізувати  псевдонім типу, який іменує тип об’єднання.

interface IWorker {
  name: string;
  age: number;
  makeAge(): void;
}

//реалізація з інтерфейсом
class Recruting implements IWorker {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeAge(): void {
    console.log(`Name:${this.name},Make age: ${this.age}`);
  }
}


const recruting = new Recruting("Sam", 35);
recruting.makeAge(); 


//реалізація з псевдонимом типу
type CompanyType = {
  name: string;
  age: number;
  profession: string;


}


class User implements CompanyType{
  name:string;
  age: number;
  profession:string;

  constructor(name:string, age:number,  profession:string) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

}

const firm = new User('Stanislav',35,'Builder');
console.log(firm);
//union type
type UnionType = string|number;

class UnionRealization {
    payload:UnionType;

    constructor(payload:UnionType){
        this.payload = payload;
    }
 
}

const unionString = new UnionRealization('Never mind');
console.log(unionString);


//На відміну від псевдоніма типу, інтерфейс можна визначати кілька разів і розглядатиметься як єдиний інтерфейс (з об’єднаними членами всіх декларацій). 
//Продемонструйте цю властивість інтерфейсів у своєму рішенні.

interface IBuilder{
    name:string;
    age:number;
}
interface IBuilder{
    profession:string;
    usingBuilder():void;
}

class Builder implements IBuilder{
    name:string;
    age:number;
    profession:string;
    constructor(name:string,age:number,profession:string){
        this.name = name;
        this.age = age;
        this.profession = profession;
    }

    usingBuilder(){
        console.log(`This ${this.name} use profession ${this.profession}`)
    }
}

const builders = new Builder('Troy',34,'Full worker');
builders.usingBuilder();