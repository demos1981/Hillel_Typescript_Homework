
import { IObserver,ISubject } from "./InterfacesAndTypeAlias"; 
import { MarketingControllerEvent } from "./MarcetingEvents";




export class NewsletterEvents implements IObserver{
    public update(subject:ISubject):void{
          if (subject instanceof MarketingControllerEvent && subject.stateEvent ) {
           console.log(subject.stateEvent);
        }
    }
}