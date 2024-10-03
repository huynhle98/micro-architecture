import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, ViewEncapsulation } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { environment } from '../environments/environment';

@Component({
  selector: 'mfe1-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    NzMenuModule,
    RouterModule,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss', './app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // providers: [Router]
})
export class AppComponent implements OnDestroy {
  private router = inject(Router);

  title = 'mfe1';
  pages = [
    {
      title: 'Home',
      path: 'home',
    },
    {
      title: 'Contact',
      path: 'contact',
    },
  ];
  constructor() {
    this.router.initialNavigation();
  }
  ngOnDestroy(): void {
    // Reset location when destroyed application
    this.router.navigate([''], { skipLocationChange: true });
  }

  ngAfterViewInit() {
    // Handle update url navigation
    if (this.router.url === `/${environment.firstNavigationPath}`) {
      this.router.navigate([environment.firstNavigationPath], {
        replaceUrl: true,
      });
      return;
    }
  }
}
