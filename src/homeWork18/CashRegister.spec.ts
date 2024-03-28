import { CashRegister } from "./CashRegister";
import { ITickets,IVisitors } from "./InterfacesAndTypeAlias";

describe('Cashregister',()=>{
    let cashRegister:CashRegister;
    beforeEach(()=>{
        cashRegister = new CashRegister()
    });
    it('should create an instance of Accountings',()=>{
        expect(cashRegister).toBeInstanceOf(CashRegister);
    });
    it('should sell tickets, update amountTicket, and log total amount', () => {
    const tickets: ITickets[] = [
      { type: 'adult', value: 15 },
      { type: 'child', value: 10 },
    ];

    cashRegister.sellTickets(tickets);
    });
    it('should add a visitor to visitor and customer lists, and log visitor details', () => {
    const visitor: IVisitors = { name: 'Alice', contactData:'@.gmail.com' };

    cashRegister.addPeople(visitor);

  });
})





