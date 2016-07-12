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
var data_childone_component_1 = require('./data-childone.component');
var sample_service_1 = require('../service/sample.service');
var events_service_1 = require('../service/events.service');
var models_1 = require('../models');
var ParentDataCompoent = (function () {
    function ParentDataCompoent(sampleService, eventsService) {
        var _this = this;
        this.sampleService = sampleService;
        this.eventsService = eventsService;
        this.changeData = function (data) {
            _this.parentDemoItem.three = data;
            _this.parentDemoItem.four = data;
        };
        this.sampleService.on('form-change', function (data) { console.info(data); });
    }
    ParentDataCompoent.prototype.ngOnInit = function () {
        this.parentDemoItem = new models_1.DemoItem;
    };
    ParentDataCompoent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //Child Components Are Directives and must be explictly incldeed
            directives: [data_childone_component_1.ChildOneDataCompoent],
            templateUrl: 'app/data.componets/data-parent.component.html'
        }), 
        __metadata('design:paramtypes', [sample_service_1.SampleService, events_service_1.EventsService])
    ], ParentDataCompoent);
    return ParentDataCompoent;
}());
exports.ParentDataCompoent = ParentDataCompoent;
//# sourceMappingURL=data-parent.component.js.map