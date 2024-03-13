 import { NotificationBeforeLeaving } from "./NotificationLeaving";
 import { ReminderController } from "./ReminderController";
 
 
 
 describe('NotificationBeforeLeaving',()=>{
    let leaving:NotificationBeforeLeaving;
    let reminderController:ReminderController;
    beforeEach(()=>{
        leaving = new NotificationBeforeLeaving();
        reminderController = new ReminderController(new Date());
     });
    it('should create an instance of NotificationBeforeLeaving',()=>{
         expect(leaving).toBeInstanceOf(NotificationBeforeLeaving);
     });
     it('should display closing message when stateNumber is 15 (closing time)', () => {
        console.log = jest.fn();
        
        reminderController.stateNumber = 0;
        leaving.update(reminderController);
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Thank you for visiting the zoo. We hope you had a great time!');
     });
 })