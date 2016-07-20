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
//the init function was deemed extra so it  must be conumsed sperate then the main componet class
var core_1 = require('@angular/core');
//get a strong typed model to bind to
var models_1 = require('../models');
var FormComponent = (function () {
    function FormComponent() {
        var _this = this;
        this.onSubmit = function () {
            console.log(_this.item);
        };
    }
    //ngOnInit must be invoked in this way
    FormComponent.prototype.ngOnInit = function () {
        this.item = new models_1.DemoItem;
    };
    FormComponent = __decorate([
        core_1.Component({
            //selector is the tag used to instiante the component
            selector: 'form-example',
            templateUrl: 'app/form-componet/form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
