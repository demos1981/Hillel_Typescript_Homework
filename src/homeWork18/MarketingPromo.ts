
import { BusinessLogicController } from "./AbstractBuisnessController";

export class MarketingControllerPromo extends BusinessLogicController{
   
     public statePromo!:string;

     private promo:string;
  

          constructor(promo:string) {
       super();
       this.promo = promo;
     
    }

    public promoNewsletter(): void {
      this.statePromo = this.promo;
       this.notify();
    }

}