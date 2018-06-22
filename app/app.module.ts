import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { ScndcompComponent } from './scndcomp/scndcomp.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    ScndcompComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
