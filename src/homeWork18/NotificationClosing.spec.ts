import { NotificationBeforeClosing } from "./NotificationClosing";
import { ReminderController } from "./ReminderController";



 describe('NotificationBeforeClosing',()=>{
    let closing:NotificationBeforeClosing;
    let reminderController:ReminderController;
    beforeEach(()=>{
        closing = new NotificationBeforeClosing();
        reminderController = new  ReminderController(new Date());
     });
    it('should create an instance of NotificationBeforeClosing',()=>{
         expect(closing).toBeInstanceOf(NotificationBeforeClosing);
     });
       it('should display closing message when stateNumber is 0 (closing time)', () => {
         console.log = jest.fn();
        
         reminderController.stateNumber = 0;
         closing.update(reminderController);
         expect(console.log).toHaveBeenCalledTimes(1);
         expect(console.log).toHaveBeenCalledWith('Zoo is may closing soon. Please make your way to the exit.');
      });
 })