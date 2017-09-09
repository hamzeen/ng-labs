import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './';
import { ContactComponent } from './contact/';
import { UserComponent } from './users/';
import { AboutComponent } from './about/about.component';

import { routes } from './app.routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [ AppComponent, ContactComponent, UserComponent, AboutComponent],
  imports: [RouterModule,BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: []
})
export class AppModule { }
