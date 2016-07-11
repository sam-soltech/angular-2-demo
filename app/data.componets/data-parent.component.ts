import {Component,OnInit} from '@angular/core';
import { ChildOneDataCompoent } from './data-childone.component'
import { SampleService } from '../service/sample.service'
import { DemoItem } from '../models'
@Component({
    selector: 'my-app',
    //Child Components Are Directives and must be explictly incldeed
    directives: [ChildOneDataCompoent],
    //Services Are Now providers and must be explictly incldeed
    providers: [SampleService],
    templateUrl: 'app/data.componets/data-parent.component.html'
})

//The class named here is what is reference within the brackets in the systemjs import
export class ParentDataCompoent implements OnInit{
  parentDemoItem:DemoItem;
  constructor (
    private sampleService:SampleService
  ){

  }
  ngOnInit(){
    this.parentDemoItem = new DemoItem;
    this.sampleService.event$.subscribe((item) => {console.info(item)});
  }

  parentEvent = () => {

  }

  changeData = (data) => {
    this.parentDemoItem.three = data;
    this.parentDemoItem.four = data;
  }
 }
