"use strict";
//thse componets create a constant that neds to be consumed by the core app bootstrap
var router_1 = require('@angular/router');
var form_component_1 = require('./form.component');
exports.routes = [
    {
        path: '',
        redirectTo: 'form',
        pathMatch: 'full'
    },
    //the path is bot the name used in code and in the url,be sure to be url safe, routers can only load components
    { path: 'form', component: form_component_1.FormComponent },
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map