import { MarketingControllerEvent } from "./MarcetingEvents";


describe('MarketingControllerEvent',()=>{
    let marketingControllerEvent:MarketingControllerEvent;
    const event = 'Welcom to new events in zoo 10.10.24!';

    beforeEach(()=>{
        marketingControllerEvent = new MarketingControllerEvent(event);
    });

    it('should create an instance of Accountings',()=>{
        expect(marketingControllerEvent).toBeInstanceOf(MarketingControllerEvent);
    });

    it('should set statePromo and notify observers when eventNewsletter is called', () => {
    marketingControllerEvent.eventsNewsletter();

    expect(marketingControllerEvent.stateEvent).toBe(event);
    
  });
})
