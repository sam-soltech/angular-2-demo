import {Component,Input,Output,OnInit,EventEmitter} from '@angular/core';
//you bring the class in for type script but you dont add it to providers array as that would create a new instance
import { SampleService } from '../service/sample.service'
import { DemoItem } from '../models'

@Component({
    selector: 'child-data-one',
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
  //outputs allow binding of events to the compoent dom node allwoing easy acess to parent componets ctlr functions
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
    //the emit method fires the bound change event
    this.onchange.emit(event.target.value)
    //see the '../service/sample.service' for observable events
    this.sampleService.broadcast('form-change', event.target.value);
  }

}
