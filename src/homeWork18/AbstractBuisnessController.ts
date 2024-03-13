
import { ISubject,IObserver } from "./InterfacesAndTypeAlias";



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