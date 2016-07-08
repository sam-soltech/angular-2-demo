"use strict";
//launcher for broswer based anuglar since now has a native option
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//This imports the routes which contain the inclusion of the required router components in that file
var app_routes_1 = require('./app.routes');
//http is now required at the gloabl level
var http_1 = require('@angular/http');
//The AppComponent Is the core compoent that hosts the rest of the app
var app_component_1 = require('./app.component');
//The Function That Asgins the core component, array is for gloabl requiremnts and ceratin more complex modules
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map