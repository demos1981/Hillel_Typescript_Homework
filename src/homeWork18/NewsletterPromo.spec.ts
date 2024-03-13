import { NewsletterPromo } from "./NewsletterPromo";
import { MarketingControllerPromo } from "./MarketingPromo";

describe('NewsletterPromo',()=>{
    let promo:NewsletterPromo;
    let marketingControllerPromo:MarketingControllerPromo;
    beforeEach(()=>{
        promo = new NewsletterPromo();
        marketingControllerPromo = new MarketingControllerPromo('New promo');
    });
    it('should create an instance of NewsletterPromo',()=>{
        expect(promo).toBeInstanceOf(NewsletterPromo);
    })
     it('should display promotional message when statePromo has a value', () => {
   
    console.log = jest.fn();

    marketingControllerPromo.statePromo = 'Winter Sale! Get 20% off!'; 
    promo.update(marketingControllerPromo);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Winter Sale! Get 20% off!');
  });
})

