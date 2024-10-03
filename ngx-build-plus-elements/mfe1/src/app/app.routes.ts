import { Routes } from '@angular/router';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: environment.firstNavigationPath,
        loadComponent: () =>
          import('./pages/home/home.component').then((t) => t.HomeComponent),
        title: 'Home',
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (t) => t.ContactComponent
          ),
          title: 'Contact'
      },
      {
        path: '',
        redirectTo: environment.firstNavigationPath,
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'mfe1',
    redirectTo: '',
    pathMatch: 'full',
  },
];
