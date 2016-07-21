//thse componets create a constant that neds to be consumed by the core app bootstrap
import { provideRouter, RouterConfig } from '@angular/router';
import { FormComponent } from './form-componet/form.component';
import { ParentDataComponent } from './data.componets/data-parent.component';
export const routes: RouterConfig = [
  { // this route is used to load a route on app base
    path: '',
    redirectTo: 'data',
    pathMatch: 'full'
  },
  //the path is bot the name used in code and in the url,be sure to be url safe, routers can only load components
  { path: 'form', component: FormComponent },
  { path: 'data', component: ParentDataComponent },
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
