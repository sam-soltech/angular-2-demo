import { Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { DemoItem } from '../models'
// @Injectable() makes this a provider and must be included, it should be noted that providers are instated once and are shared across the application
@Injectable()
export class SampleService {

  //this obserable setup is from https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#parent-and-children-communicate-via-a-service
  private eventSubject = new Subject<string>();
  sampleEvent$ = this.eventSubject.asObservable();

  //seeting priavte varibles in serivvcdes allow for statefull data sharing
  private sampleData: DemoItem;

  constructor() {
    this.sampleData = {
      one: "Serivce One",
      two: "Serivce Two",
      three: "Serivce Three",
      four:"Serivce Four"
    }
  }

  //will return static data the service
  getDemo = () => {
    return this.sampleData;
  }

  emitEvent = (data: string) => {
    this.eventSubject.next(data);
  }


}
