 import { ReminderController } from "./ReminderController";
 
 describe('ReminderController',()=>{
    let reminder:ReminderController;
    let time:Date;
    beforeEach(()=>{
        time = new Date(2024, 3, 12, 17, 0);
        reminder = new ReminderController(time);


     });
    it('should create an instance of ReminderController',()=>{
         expect(reminder).toBeInstanceOf(ReminderController);
     });
    it('should calculate stateNumber correctly and notify observers', () => {
    const currentTime = new Date(2024, 3, 12, 16, 35); // 25 minutes before closing

    reminder.someNotification();
 

   
  });
 })