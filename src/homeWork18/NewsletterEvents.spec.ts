import { NewsletterEvents } from "./NewsletterEvents";
import { MarketingControllerEvent } from "./MarcetingEvents";

describe('NewsletterEvents',()=>{
    let events:NewsletterEvents;
    let marketingControllerEvent:MarketingControllerEvent;
    beforeEach(()=>{
        events = new NewsletterEvents();
        marketingControllerEvent = new MarketingControllerEvent('New promo');
    });
    it('should create an instance of NewsletterEvents',()=>{
        expect(events).toBeInstanceOf(NewsletterEvents);
    });
    it('should display promotional message when stateEvents has a value', () => {
   
    console.log = jest.fn();

    marketingControllerEvent.stateEvent = 'Look in instagram'; 
    events.update(marketingControllerEvent);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Look in instagram');
  });
})



