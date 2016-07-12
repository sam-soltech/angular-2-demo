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
//you bring the class in for type script but you dont add it to providers array as that would create a new instance
var sample_service_1 = require('../service/sample.service');
var models_1 = require('../models');
var ChildOneDataCompoent = (function () {
    function ChildOneDataCompoent(sampleService) {
        var _this = this;
        this.sampleService = sampleService;
        //outputs allow binding of events to the compoent dom node allwoing easy acess to parent componets ctlr functions
        this.onchange = new core_1.EventEmitter();
        this.onKey = function (event) {
            //the emit method fires the bound change event
            _this.onchange.emit(event.target.value);
            //see the '../service/sample.service' for observable events
            _this.sampleService.broadcast('form-change', event.target.value);
        };
    }
    ChildOneDataCompoent.prototype.ngOnInit = function () {
        this.localItem = new models_1.DemoItem;
    };
    __decorate([
        core_1.Input('parent-one'), 
        __metadata('design:type', models_1.DemoItem)
    ], ChildOneDataCompoent.prototype, "item", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ChildOneDataCompoent.prototype, "onchange", void 0);
    ChildOneDataCompoent = __decorate([
        core_1.Component({
            selector: 'child-data-one',
            template: "\n    <h5>Child One</h5>\n    <div>\n    <label>Child One:</label>\n    <input type=\"text\" placeholder=\"child\" name=\"text-item-two\" [(ngModel)]=\"item.one\"/>\n    <label>Child Two:</label>\n    <input type=\"text\" placeholder=\"child\" name=\"text-item-two\" (keyup)=\"onKey($event)\" [(ngModel)]=\"localItem.two\"/>\n    </div>"
        }), 
        __metadata('design:paramtypes', [sample_service_1.SampleService])
    ], ChildOneDataCompoent);
    return ChildOneDataCompoent;
}());
exports.ChildOneDataCompoent = ChildOneDataCompoent;
//# sourceMappingURL=data-childone.component.js.map