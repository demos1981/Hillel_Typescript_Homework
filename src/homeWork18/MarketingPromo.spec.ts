import { MarketingControllerPromo } from "./MarketingPromo";

describe('MarketingControllerPromo',()=>{
    let marketingControllerPromo:MarketingControllerPromo;
    const promo = 'Black Friday Sale! 50% off ticket in zoo!'; 
   
    beforeEach(()=>{
        
        marketingControllerPromo = new MarketingControllerPromo(promo);
    });

    it('should create an instance of MarketingControllerPromo',()=>{
        expect(marketingControllerPromo).toBeInstanceOf(MarketingControllerPromo);
    });

    it('should set statePromo and notify observers when promoNewsletter is called', () => {
    marketingControllerPromo.promoNewsletter();

    expect(marketingControllerPromo.statePromo).toBe(promo);
    
  });
})


