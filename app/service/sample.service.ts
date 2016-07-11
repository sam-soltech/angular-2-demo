import { Injectable, EventEmitter} from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { DemoItem } from '../models'
// @Injectable() makes this a provider and must be included, it should be noted that providers are instated once and are shared across the application
@Injectable()
export class SampleService {
  private _eventsSubject: Rx.Subject<any>;
  public event$: Rx.Observable<any>;
  constructor() {
    this._eventsSubject = new Rx.Subject();
    this.event$ = Rx.Observable.from(this._eventsSubject);
    // this.events =
  }


  broadcast = (data) => {
    this._eventsSubject.next(data+" B");
  }


}
