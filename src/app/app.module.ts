import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { PrimarypageComponent } from './primarypage/primarypage.component';


const appRoutes: Routes = [
  	{ },
  	{ }
];

@NgModule({
  declarations: [
    AppComponent,
    PrimarypageComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
