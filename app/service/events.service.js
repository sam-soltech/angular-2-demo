"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//taken from jim.taylor.1974 - link:http://stackoverflow.com/a/36273278
var core_1 = require('@angular/core');
//this is to import all or the classes for the Observables
var Rx = require('rxjs/Rx');
// @Injectable() makes this a provider and must be included, it should be noted that providers are instated once and are shared across the application
var EventsService = (function () {
    function EventsService() {
        var _this = this;
        this.on = function (name, listener) {
            if (!_this.listeners[name]) {
                _this.listeners[name] = [];
            }
            _this.listeners[name].push(listener);
        };
        this.broadcast = function (name, args) {
            _this.eventsSubject.next({ name: name, args: args });
        };
        this.listeners = {};
        this.eventsSubject = new Rx.Subject();
        this.events = Rx.Observable.from(this.eventsSubject);
        this.events.subscribe(function (_a) {
            var name = _a.name, args = _a.args;
            if (_this.listeners[name]) {
                for (var _i = 0, _b = _this.listeners[name]; _i < _b.length; _i++) {
                    var listener = _b[_i];
                    listener(args);
                }
            }
        });
    }
    EventsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map