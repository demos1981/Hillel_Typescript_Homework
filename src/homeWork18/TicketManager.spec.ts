import { ITickets } from "./InterfacesAndTypeAlias";
import { TicketManager } from "./TicketManager";



 describe('TicketManager',()=>{
    let manager:TicketManager;
    beforeEach(()=>{
        manager = new TicketManager();


     });
    it('should create an instance of TicketManager',()=>{
         expect(manager).toBeInstanceOf(TicketManager);
     });
     it('should sell tickets successfully when available',()=>{
        const tickets:ITickets[]=[
            {type:'adult',value:10},
            {type:'family',value:5}
        ];
        manager.sellTicketsControls(tickets);
     })
 })