//The angular-2 Library is completely modular it is recommended each part be loaded as needed
import {Component} from '@angular/core';
//need for the router outlet tag to work
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    //selector is the tag used to insatiate the component
    selector: 'my-app',
    //must explicitly include all directives
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>Angular 2 Demo App</h1>
    <router-outlet></router-outlet>`
})

//The class named here is what is reference within the brackets in the systemjs import
export class AppComponent { }
