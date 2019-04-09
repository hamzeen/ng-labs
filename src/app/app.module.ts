import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './';
import { ContactComponent } from './contact/';
import { UserComponent } from './users/';
import { AboutComponent } from './about/about.component';

import { routes } from './app.routes';
import { HighchartsChartModule } from 'highcharts-angular';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ContactComponent,
    UserComponent,
    AboutComponent,
    GraphComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HighchartsChartModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: []
})
export class AppModule { }
