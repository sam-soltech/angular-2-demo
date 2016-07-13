//launcher for broswer based anuglar since now has a native option
import {bootstrap}    from '@angular/platform-browser-dynamic';

//This imports the routes which contain the inclusion of the required router components in that file
import { APP_ROUTER_PROVIDERS } from './app.routes';

//http is now required at the gloabl level
import { HTTP_PROVIDERS } from '@angular/http';

//The AppComponent Is the core compoent that hosts the rest of the app
import {AppComponent} from './app.component';


//a event dispatch service need it to be shared arcoss the app as it need to be only instanceated once
import { EventsService } from './service/events.service'

//a basic service need it to be shared arcoss the app
import { SampleService } from './service/sample.service'

//The Function That Asgins the core component, array is for gloabl requiremnts and ceratin more complex modules
bootstrap(AppComponent,[
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  EventsService,
  SampleService
]);
