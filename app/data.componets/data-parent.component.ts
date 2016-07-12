import {Component,OnInit} from '@angular/core';
import { ChildOneDataCompoent } from './data-childone.component'
import { SampleService } from '../service/sample.service'
import { EventsService } from '../service/events.service'
import { DemoItem } from '../models'
@Component({
    selector: 'my-app',
    //Child Components Are Directives and must be explictly incldeed
    directives: [ChildOneDataCompoent],
    templateUrl: 'app/data.componets/data-parent.component.html'
})

//The class named here is what is reference within the brackets in the systemjs import
export class ParentDataCompoent implements OnInit{
  parentDemoItem:DemoItem;
  constructor (
    private sampleService:SampleService,
    private eventsService: EventsService
  ){
    this.sampleService.on('form-change',(data)=>{console.info(data)});
  }

  ngOnInit(){
    this.parentDemoItem = new DemoItem;
  }

  changeData = (data) => {
    this.parentDemoItem.three = data;
    this.parentDemoItem.four = data;
  }
 }
