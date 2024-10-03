import { createCustomElement } from '@angular/elements';
import {
  bootstrapApplication,
  createApplication
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => {
//     console.error(err)
//   });

// const bootstrap = () => bootstrapApplication(AppComponent, appConfig).then((app)=>{
//   const el = createCustomElement(AppComponent, {
//     injector: app.injector,
//   });
//   customElements.define('mfe1-container', el);
// })
// .catch((err) => console.error(err));;
// await renderApplication(bootstrap);

createApplication(appConfig)
  .then((app) => {
    const el = createCustomElement(AppComponent, {
      injector: app.injector,
    });
    customElements.define('mfe1-container', el);
  })
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent, appConfig)
//   .then((app) => {
//     const el = createCustomElement(AppComponent, {
//       injector: app.injector,
//     });
//     customElements.define('mfe1-container', el);
//   })
//   .catch((err) => console.error(err));
