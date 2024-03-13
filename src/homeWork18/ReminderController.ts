import { BusinessLogicController } from "./AbstractBuisnessController";



export class ReminderController extends BusinessLogicController{
  
    public stateNumber!:number;


        constructor(private closingTime: Date) {
       super();
    }
  
    public someNotification(): void {
       const currentTime = new Date();
       const timeDiff = this.closingTime.getTime() - currentTime.getTime();
       this.stateNumber = Math.floor(timeDiff / (1000 * 60));
       this.notify();
    }

   
}
 
