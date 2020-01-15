import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './';
import { UserComponent } from './users/';
import { AboutComponent } from './about/about.component';

import { routes } from './app.routes';
import { HighchartsChartModule } from 'highcharts-angular';
import { GraphComponent } from './graph/graph.component';
import {ContactModule} from './contact/contact.module';
import {CoreModule} from './core/core.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    GraphComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HighchartsChartModule,
    CoreModule,
    ContactModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: []
})
export class AppModule { }
