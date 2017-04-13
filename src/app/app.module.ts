import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AccountsList } from './account/accounts_list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountsList ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
