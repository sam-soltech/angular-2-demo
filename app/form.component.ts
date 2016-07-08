//The angular-2 Library is completely modular it is recommended each part be loaded as needed
import {Component} from '@angular/core';

@Component({
    //selector is the tag used to instiante the component
    selector: 'form-example',
    template: `<h4>Form It</h4>`
})

//The class named here is what is refence within the brackets in the systemjs import
export class FormComponent { }
