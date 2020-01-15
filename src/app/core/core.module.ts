import { NgModule } from '@angular/core';
import {HeaderComponent} from './header.component';
import {RouterModule} from '@angular/router';
import {routes} from '../app.routes';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
