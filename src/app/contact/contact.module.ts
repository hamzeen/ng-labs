import { NgModule } from '@angular/core';
import { AwesomePipe, ContactComponent } from './';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    ContactComponent,
    AwesomePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ContactModule { }

