import { Routes } from '@angular/router';
import { AppComponent } from './';
import { ContactComponent } from './contact/';
import { UserComponent } from './users/';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  { path: 'contact',  component: ContactComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'users',  component: UserComponent },
  { path: '**', redirectTo: '/contact', pathMatch: 'full' },
];
