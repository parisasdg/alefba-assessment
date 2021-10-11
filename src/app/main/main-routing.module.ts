import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MessagesComponent} from "./messages/messages.component";

const routes: Routes = [
  {
    path: '', component: HeaderComponent,
    children: [{
      path: '', component: MessagesComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
