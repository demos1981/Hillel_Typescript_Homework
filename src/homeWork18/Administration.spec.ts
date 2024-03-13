

import { IEmployees,IAnimals } from "./InterfacesAndTypeAlias";
import { Administration } from "./Administration";

describe('Administration',()=>{
    let administration:Administration;
    beforeEach(()=>{
        administration = new Administration();
    });

    it('should create an instance of Administration',()=>{
        expect(administration).toBeInstanceOf(Administration);
    });

    it('should add an employee and log a message', () => {
    const employee: IEmployees = { name: 'Arni', age: 45,position:'Zookeeper' };

    console.log = jest.fn();

    administration.addEmployes(employee);

    expect(administration.addEmployes.length).toBe(1);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(`New employe ${employee.name} added`);
  });
    it('should delete an employee by name and log a message', () => {
    const employee1: IEmployees = { name: 'Arni', age: 45,position:'Zookeeper'};
    const employee2: IEmployees = { name: 'Alfred', age:38,position: 'Trainer' };

    administration.addEmployes(employee1);
    administration.addEmployes(employee2);

    administration.deleteEmployes(employee1.name);

    expect(administration.deleteEmployes.length).toBe(1);
    

    console.log = jest.fn();
    administration.deleteEmployes(employee1.name); 

  });
     it('should add animals', () => {
    const animals: IAnimals = { kind: 'Lion',name:'King',age:10,health:'healthy' };

    console.log = jest.fn();

    administration.addAnimals(animals);

    expect(administration.addAnimals.length).toBe(1);
    expect(console.log).toHaveBeenCalledTimes(1);

  });
   it('should delete animals by name', () => {
    const animals1: IAnimals = { kind: 'Lion',name:'King', age: 10,health:'Healthy'};
    const animals2: IAnimals = { kind: 'Panter',name:'Bagira', age: 8,health:'Healthy'};

    administration.addAnimals(animals1);
    administration.addAnimals(animals2);

    administration.deleteAnimals(animals1.name);

    expect(administration.deleteEmployes.length).toBe(1);
    

    console.log = jest.fn();
    administration.deleteAnimals(animals1.name); 

  });

    it('should log a message when creating a promotion', () => {
 
    console.log = jest.fn();

    administration.promoCreating('Summer Sale ticket in zoo!');

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Promo creating');
  });
    it('should log a message when creating an event', () => {
   
    console.log = jest.fn();

    administration.eventsCreating('Animal Feeding Show');

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('Event creating');
  });
})


