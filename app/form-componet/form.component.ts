//the init function was deemed extra so it  must be conumsed sperate then the main componet class
import {Component,OnInit} from '@angular/core';

//get a strong typed model to bind to
import { DemoItem } from '../models'

@Component({
    //selector is the tag used to instiante the component
    selector: 'form-example',
    templateUrl: 'app/form-componet/form.component.html'
})

//The class must expressly implment the on OnInit to intilaize any data on invokcation of the component
export class FormComponent implements OnInit{
  item:DemoItem;
  constructor(){}

  //ngOnInit must be invoked in this way
  ngOnInit(){
    this.item = new DemoItem;
  }

  onSubmit = () => {
    console.log(this.item)
  }
}
