import { ITickets } from "./InterfacesAndTypeAlias";


export class TicketManager{
    private availableTickets:{[type:string]:number}={
        adult:10,
        child:3,
        family:4
    };

   public sellTicketsControls(tickets:ITickets[]):void{
        for(const ticket of tickets){
            if(this.availableTickets[ticket.type]>0){
                this.availableTickets[ticket.type]--;
                console.log(`Ticket sold ${ticket.type}`);
            }else {
                console.log(`Ticket ${ticket.type}are sold out `);
            }
        }
    }
}