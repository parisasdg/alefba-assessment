import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    MessagesComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
