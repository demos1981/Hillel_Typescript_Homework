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