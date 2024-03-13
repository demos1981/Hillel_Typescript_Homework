import { IObserver,ISubject } from "./InterfacesAndTypeAlias";
import { ReminderController } from "./ReminderController";




export class NotificationBeforeLeaving implements IObserver {
    public update(subject: ISubject): void {
        
        if (subject instanceof ReminderController && subject.stateNumber == 0 ) {
           console.log("Thank you for visiting the zoo. We hope you had a great time!");
        }
    }
}