import { BusinessLogicController } from "./AbstractBuisnessController";





export class MarketingControllerEvent extends BusinessLogicController{
   
     public stateEvent!:string;

     private event:string;
  

          constructor(event:string) {
       super();
       this.event = event;
     
    }



    public eventsNewsletter(): void {
      this.stateEvent = this.event;
       this.notify();
    }

}
