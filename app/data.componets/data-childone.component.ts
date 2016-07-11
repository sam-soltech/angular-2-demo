import {Component,Input,Output,OnInit,EventEmitter} from '@angular/core';
import { SampleService } from '../service/sample.service'
import { DemoItem } from '../models'

@Component({
    selector: 'child-data-one',
    providers: [SampleService],
    template: `
    <h5>Child One</h5>
    <div>
    <label>Child One:</label>
    <input type="text" placeholder="child" name="text-item-two" [(ngModel)]="item.one"/>
    <label>Child Two:</label>
    <input type="text" placeholder="child" name="text-item-two" (keyup)="onKey($event)" [(ngModel)]="localItem.two"/>
    </div>`
})

export class ChildOneDataCompoent  implements OnInit{
  //input signifes a value that is two way bond via the dom, string in input decrlation is the name of the DOM target
  @Input('parent-one') item: DemoItem;
  @Output() onchange = new EventEmitter();

  localItem: DemoItem;

  constructor(
    private sampleService:SampleService
  ){

  }

  ngOnInit(){
    this.localItem = new DemoItem;
  }

  onKey = (event:any) => {
    this.onchange.emit(event.target.value)
    this.sampleService.broadcast(event.target.value);
  }

}
