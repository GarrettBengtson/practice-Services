import { Component, Output, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
  providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  loggingService: LoggingService;

  constructor(logSer: LoggingService) {
    this.loggingService = logSer;
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus,
    });
    this.loggingService.logStatusChanged(accountStatus);
    // console.log(`A status change occured, the new status is ${accountStatus}`);
  }
}
