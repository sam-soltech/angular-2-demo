"use strict";
//thse componets create a constant that neds to be consumed by the core app bootstrap
var router_1 = require('@angular/router');
var form_component_1 = require('./form-componet/form.component');
var data_parent_component_1 = require('./data.componets/data-parent.component');
exports.routes = [
    {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full'
    },
    //the path is bot the name used in code and in the url,be sure to be url safe, routers can only load components
    { path: 'form', component: form_component_1.FormComponent },
    { path: 'data', component: data_parent_component_1.ParentDataCompoent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
