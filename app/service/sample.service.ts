import { Injectable} from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { DemoItem } from '../models'
// @Injectable() makes this a provider and must be included, it should be noted that providers are instated once and are shared across the application
@Injectable()
export class SampleService {
  public eventsSubject: Rx.Subject<any>;
  public listeners:any;
  public events: Rx.Observable<any>;
  constructor() {
    this.listeners = {};
    this.eventsSubject = new Rx.Subject();

    this.events = Rx.Observable.from(this.eventsSubject);

    this.events.subscribe(({name, args}) => {
      if (this.listeners[name]) {
        for (let listener of this.listeners[name]) {
          listener(args);
        }
      }
    });
  }

  on = (name, listener) => {
    if (!this.listeners[name]) {
        this.listeners[name] = [];
    }

    this.listeners[name].push(listener);
  }

  broadcast = (name,args) => {
    this.eventsSubject.next({name,args});
  }


}
