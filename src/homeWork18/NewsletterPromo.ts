import { IObserver,ISubject } from "./InterfacesAndTypeAlias";
import { MarketingControllerPromo } from "./MarketingPromo";


export class NewsletterPromo implements IObserver{
    public update(subject:ISubject):void{
          if (subject instanceof MarketingControllerPromo && subject.statePromo ) {
           console.log(subject.statePromo);
        }
    }
}