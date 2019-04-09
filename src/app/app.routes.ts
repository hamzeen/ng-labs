import { Routes } from '@angular/router';
import { AppComponent } from './';
import { ContactComponent } from './contact/';
import { UserComponent } from './users/';
import { AboutComponent } from './about/about.component';
import { GraphComponent } from './graph/graph.component';

export const routes: Routes = [
  { path: '', redirectTo: '/graph', pathMatch: 'full' },
  { path: 'contact',  component: ContactComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'users',  component: UserComponent },
  { path: 'graph',  component: GraphComponent },
  { path: '**', redirectTo: '/graph', pathMatch: 'full' },
];
