import {Component,OnInit,OnDestroy} from '@angular/core';
import { ChildOneDataCompoent } from './data-childone.component'
import { SampleService } from '../service/sample.service'
import { EventsService } from '../service/events.service'
import { DemoItem } from '../models';
// import { DemoItem } from 'model';
import { Subscription }   from 'rxjs/Subscription';
@Component({
    selector: 'my-app',
    //Child Components Are Directives and must be explictly incldeed
    directives: [ChildOneDataCompoent],
    templateUrl: './public/data-parent.component.html'
})

//The Init and destory allow native actions on the componets lifecycle
export class ParentDataComponent implements OnInit, OnDestroy{
  parentDemoItem:DemoItem;
  subscription: Subscription;
  constructor (
    private sampleService:SampleService,
    private eventsService: EventsService
  ){

    //see eventsServices for this

    this.eventsService.on('form-change',(data)=>{console.info(data)});

    //this shows a Static Methods on the Observable class it transforms the data transmited throug
    var test = this.sampleService.sampleEvent$.map(data => data+=" - comes from subscription")

    //see smaple event for details
    this.subscription = test.subscribe((mission) => {
      console.log(mission)
    });
  }

  ngOnInit(){
    this.parentDemoItem = new DemoItem;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  changeData = (data) => {
    this.parentDemoItem.three = data;
    this.parentDemoItem.four = data;
  }
 }
