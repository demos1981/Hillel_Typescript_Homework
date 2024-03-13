import { IObserver,ISubject } from "./InterfacesAndTypeAlias";
import { ReminderController } from "./ReminderController";



export class NotificationBeforeClosing implements IObserver {
    public update(subject: ISubject): void {
        if (subject instanceof ReminderController && subject.stateNumber <= 15 && subject.stateNumber >=0 ) {
            console.log("Zoo is may closing soon. Please make your way to the exit.");
        }
    }
}