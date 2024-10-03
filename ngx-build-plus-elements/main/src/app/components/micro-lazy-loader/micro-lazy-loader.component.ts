import { LazyElementDynamicDirective } from '@angular-extensions/elements';
import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  NO_ERRORS_SCHEMA,
  signal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-micro-lazy-loader',
  standalone: true,
  templateUrl: './micro-lazy-loader.component.html',
  styleUrl: './micro-lazy-loader.component.scss',
  imports: [CommonModule, LazyElementDynamicDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MicroLazyLoaderComponent {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  dynamicApp = signal({ tag: '', url: '' });

  constructor() {
    this.activatedRoute.params.pipe().subscribe(() => {
      const path = this.router.url.replace(/^\/|\/$/g, ''); // replace "/" at first and last text
      if (!path) {
        return;
      }

      const appConfig = this.getAppByPath(path);
      if (isEmpty(appConfig)) {
        return;
      }
console.log(appConfig);

      this.dynamicApp.set({ tag: appConfig.tag, url: appConfig.url });
    });
  }

  getAppByPath(path: string) {
    if (!path) {
      return null;
    }

    const apps = environment.microApps;

    for (const key in apps) {
      const paths = path.split('/');
      if (apps[key]['path'] === paths[0]) {
        return apps[key];
      }

      if (paths.length > 1 && apps[key]['path'] === `${paths[0]}/${paths[1]}`) {
        return apps[key];
      }
    }
    return null;
  }
}
