import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnDestroy, ViewEncapsulation } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  UrlTree,
} from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';

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
  private location = inject(Location);

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
    // this.router.dispose();
    // this.location.replaceState('')
    const urlTree: UrlTree = this.router.createUrlTree(['']);
    // this.router.navigateByUrl(urlTree, {
    //   replaceUrl: true,
    // });
    this.router.navigate([''], { skipLocationChange: true });
  }

  ngAfterViewInit() {
    console.log(
      '🚀 ~ AppComponent ~ ngAfterViewInit ~ this.router.url:',
      this.router.url
    );
    // if (this.router.url === `/${environment.firstNavigationPath}`) {
    //   this.router.navigate([environment.firstNavigationPath], {
    //     replaceUrl: true,
    //   });
    //   return;
    // }
  }
}
