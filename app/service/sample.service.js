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
var core_1 = require('@angular/core');
var Rx = require('rxjs/Rx');
// @Injectable() makes this a provider and must be included, it should be noted that providers are instated once and are shared across the application
var SampleService = (function () {
    function SampleService() {
        var _this = this;
        this.broadcast = function (data) {
            _this._eventsSubject.next(data + " B");
        };
        this._eventsSubject = new Rx.Subject();
        this.event$ = Rx.Observable.from(this._eventsSubject);
        // this.events =
    }
    SampleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SampleService);
    return SampleService;
}());
exports.SampleService = SampleService;
//# sourceMappingURL=sample.service.js.map