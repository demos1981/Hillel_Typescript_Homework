 import { Reporting } from "./Reporting";


 describe('Reporting',()=>{
    let reporting:Reporting;
    beforeEach(()=>{
        reporting = new Reporting();


     });
    it('should create an instance of Reporting',()=>{
         expect(reporting).toBeInstanceOf(Reporting);
     });
    it('should collect revenue and update the daily report', () => {
    const revenue: number = 100;

    reporting.collectingDataRevenue(revenue);
    reporting.collectingDataRevenue(50); 
    reporting.collectingDataRevenue(75);
  ;
  });
    it('should transferering to Accounting', () => {
   
    reporting.transferingToAccounting();
  });
 })