//taken from jim.taylor.1974 - link:http://stackoverflow.com/a/36273278
import { Injectable} from '@angular/core';
//this is to import all or the classes for the Observables
import * as Rx from 'rxjs/Rx';
// @Injectable() makes this a provider and must be included, it should be noted that providers are instated once and are shared across the application
@Injectable()
export class EventsService {
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
