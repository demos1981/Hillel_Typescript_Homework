

//Клас може реалізувати інтерфейс або псевдонім типу, і те, і інше точно таким же чином. 
//Однак зауважте, що клас та інтерфейс вважаються статичними структурами. Як ви думаєте, на що це впливає? 
//Створіть класи, котрі будуть реалізовувати в одному випадку інтерфейси, а в іншому псевдонім типу. 
//Наприкінці, спробуйте вимусити клас реалізувати  псевдонім типу, який іменує тип об’єднання.
//На відміну від псевдоніма типу, інтерфейс можна визначати кілька разів і розглядатиметься як єдиний інтерфейс (з об’єднаними членами всіх декларацій). 
//Продемонструйте цю властивість інтерфейсів у своєму рішенні.
//Сподіваюсь це завдання буде для вас як нагадування різниць можливостей між Interface та Type alias. 
//Але варто памʼятати, що у них різна ідеє використання не зважаючи на те, що технічні можливості доволі схожі.


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

//об'єдннаня типу
type NumberOrStringUnion = number | string ;

type StringOrBooleanUnion = string | boolean;

type MorePrimitiveUnion = number | string | boolean;

//кортеж

type NumberTupleAlias = [number,number];

type StringTupleAlias = [string,string];

type MoreTupleAlias = [string,number,boolean];

//І Interface, і Type alias можна розширити, але синтаксис відрізняється. Крім того, зауважте, що інтерфейс і псевдонім типу не виключають один одного. 
//Тобто інтерфейс може розширювати псевдонім типу, і навпаки. 
//Продемонструйте цей вираз у вашому коді: 


// c. один псевдонім типу розширює інтерфейс;
// d. один псевдонім типу розширює інший.

//a. один інтерфейс розширює інший;
interface IAccountInterface {
    firstName:string;
    lastName:string;
    yearsOld:number;
}

interface ICardIdInterface extends IAccountInterface{
    id:number;
    card:string;

}
//перевірка
const account:ICardIdInterface = {
firstName:'Alex',
lastName:'Mazurko',
yearsOld:30,
id:123,
card:'autoCard',
}
console.log(account.firstName)
// b. один інтерфейс розширює псевдонім типу; 



        