 import { IVisitors,ICustomer,ITickets } from "./InterfacesAndTypeAlias";
 import { TicketManager } from "./TicketManager";
 
 
 
export class CashRegister {
    private visitor:IVisitors[] = [];
    private customer:ICustomer[] = [];
    private ticketManager:TicketManager = new TicketManager();
    protected amountTicket:number = 0;
  


   public sellTickets(tickets:ITickets[]):void{
        this.ticketManager.sellTicketsControls(tickets);
        this.amountTicket+=tickets.reduce((total,ticket)=>total + ticket.value,0);
        console.log(`Total amount collected:$${this.amountTicket}`);

 
    }
  public addPeople(visitor:IVisitors):void{
         
        this.visitor.push(visitor);
        this.customer.push({...visitor});
        console.log(visitor);
       
    }

}