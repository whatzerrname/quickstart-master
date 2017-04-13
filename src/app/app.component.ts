import { Component } from '@angular/core';
import { Account } from './account/account.model';
import { AccountsList } from './account/accounts_list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css'],
    entryComponents:[AccountsList]
})

export class AppComponent  { 
  
  private _accounts:Array<Account> = [
    { 
      id:1,
      title:"Bank abc",
      description:"This is my main bank account.",
      balance:1004.60
    },
    { 
      id:2,
      title:"Bank xyz",
      description:"This is my shared bank account.",
      balance:501.20
    }];

  private _nextId = 3

  private createAcc(titleEl:any, descEl:any, balEl:any)
  {
    alert('Not implemented for now...')
    // this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value))
    // this._selected.push(false) //default not selected
    // this._nextId++

    titleEl.value = ""
    descEl.value = ""
    balEl.value = 0
  }

  private removeAcc(index:number){
      this._accounts.splice(index, 1)
  }
}