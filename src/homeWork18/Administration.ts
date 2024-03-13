
import { IEmployees,IAnimals } from "./InterfacesAndTypeAlias";

export class Administration{
    private employes:IEmployees[] = [];
    private animals:IAnimals[] = [];

    
   public addEmployes(employes:IEmployees):void{
        this.employes.push(employes);
        console.log(`New employe ${employes.name} added`);
    }
   public deleteEmployes(employesName:string):void{
        const index = this.employes.findIndex(employee=>employee.name === employesName);
        if(index !==-1){
            const deleteEmployes = this.employes.splice(index,1)[0];
            console.log(`Employes ${deleteEmployes.name} removed succesfully`);
        }else {
            console.log(`Employes ${employesName} not found`);
        }
    }
   public addAnimals(animals:IAnimals):void{
        this.animals.push(animals);
        console.log(`Animal ${animals.name} added succesfully.`);
    }
   public deleteAnimals(animalsName:string):void{
        const index = this.animals.findIndex(animals=>animals.name === animalsName);
        if(index !== -1){
            const deleteAnimals =this.animals.splice(index, 1)[0];
            console.log(`Animal ${deleteAnimals.name} delete succesfully.`);
        }else{
            console.log(`Animal ${animalsName} not found.`)
        }
    }
   public promoCreating(promo:string):void{
        console.log('Promo creating');
    }
   public eventsCreating(events:string):void{
        console.log('Event creating');
    }
}
