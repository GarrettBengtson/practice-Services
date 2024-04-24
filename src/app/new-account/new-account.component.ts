import { Component, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css',
  providers: []
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();

  para:string = "";

  ngOnInit(){
    this.accountsService.statusUpdated.subscribe(
      (data:string) => this.para = data
    );
  }

  constructor(private accountsService: AccountsService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // console.log(`A status change occured, the new status is ${accountStatus}`);
  }
}
