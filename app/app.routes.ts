//thse componets create a constant that neds to be consumed by the core app bootstrap
import { provideRouter, RouterConfig } from '@angular/router';
import { FormComponent } from './form.component';
export const routes: RouterConfig = [
  { // this route is used to load a route on app base
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  },
  //the path is bot the name used in code and in the url,be sure to be url safe, routers can only load components
  { path: 'form', component: FormComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
