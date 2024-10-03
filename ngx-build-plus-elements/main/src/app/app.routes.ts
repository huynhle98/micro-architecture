import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.routes').then((m) => m.WELCOME_ROUTES),
  },
  {
    path: ':dynamic-micro',
    loadComponent: () =>
      import('./components/micro-lazy-loader/micro-lazy-loader.component').then(
        (t) => t.MicroLazyLoaderComponent
      ),
    children: [
      {
        path: '**',
        loadComponent: () =>
          import(
            './components/micro-lazy-loader/micro-lazy-loader.component'
          ).then((t) => t.MicroLazyLoaderComponent),
      },
    ],
  },
];
