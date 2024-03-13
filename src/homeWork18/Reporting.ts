export class Reporting {
    private dailyReport:number = 0;

   public collectingDataRevenue(revenue:number):void{
        this.dailyReport += revenue;
        console.log(`Report collected ${revenue}`);
    }

   public transferingToAccounting():void{
        console.log(`Transferring daily revenue to Accounting:${this.dailyReport}`);
    }

}