import { NgModule } from '@angular/core';
import { AwesomePipe, ContactComponent } from './';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ContactComponent,
    AwesomePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: []
})
export class ContactModule { }

