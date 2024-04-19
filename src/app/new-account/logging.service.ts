export class LoggingService{
    
    logStatusChanged(status:string){
        console.log(`A status change occured, the new status is ${status}`);
    }
}