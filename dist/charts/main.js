(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-horizontal-bars {\n  background-color: #ddd;\n  width: 630px;\n}\n\n.chart-horizontal-bars .progress {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  position: relative;\n}\n\n.chart-horizontal-bars .progress:first-child::after {\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  z-index: 1;\n  height: 100%;\n  top: 0;\n  width: 100%;\n  left: 0;\n}\n\n.progress-label {\n  position: absolute;\n  z-index: 2;\n  left: 2px;\n  top: 2px;\n  line-height: 1;\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n}\n\n.progress-bar {\n  height: 16px;\n}\n\n.progress-group {\n  border-bottom: 1px solid #fff;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-horizontal-bars\">\n  <div class=\"progress\">\n    <span class=\"progress-label\">Benchmark - {{chartParams.data[0].benchmark.name}}</span>\n    <div class=\"progress-bar\" role=\"progressbar\"\n        *ngFor=\"let value of chartParams.data[0].benchmark.values; let i = index;\" \n        [ngStyle]=\"{'width': value * 100 / chartParams.data[0].benchmark.total + '%', \n        'background-color': chartParams.colors[i]}\"></div>\n  </div>\n  <div class=\"progress-group\" *ngFor=\"let group of chartParams.data | slice: 1\">\n    <div class=\"progress\" *ngFor=\"let answer of group.answers\">\n      <span class=\"progress-label\">{{group.groupName}} - {{answer.name}}</span>\n      <div class=\"progress-bar\" role=\"progressbar\" [attr.aria-valuenow]=\"value\" [attr.aria-valuemax]=\"chartParams.data[0].benchmark.total\"\n          *ngFor=\"let value of answer.values; let i = index\"\n          [ngStyle]=\"{'width': value * 100 / chartParams.data[0].benchmark.total + '%',\n          'background-color': chartParams.colors[i]}\"></div>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"chart-container\">\n  <div class=\"chart-header\">\n    <span class=\"header-name\">Benchmark - {{chartParams.data[0].benchmark.name}}</span>\n    <div class=\"header-range\" \n      *ngFor=\"let value of chartParams.data[0].benchmark.values; let i = index;\" \n      [ngStyle]=\"{\n        'width': value * 100 / chartParams.data[0].benchmark.total + '%', \n        'background-color': chartParams.colors[i]}\">\n    </div>\n  </div>\n  <div class=\"chart-group\" *ngFor=\"let group of chartParams.data | slice: 1\">\n    <div class=\"chart-item\" *ngFor=\"let answer of group.answers\">\n      <span class=\"group-name\">\n        {{group.groupName}} - {{answer.name}}\n      </span>\n      <div class=\"item-range\"\n        *ngFor=\"let value of answer.values; let i = index\"\n        [ngStyle]=\"{'width': value * 100 / chartParams.data[0].benchmark.total + '%','background-color': chartParams.colors[i]}\"></div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.chartParams = {
            'colors': ['#2dadde', '#3565c8', '#0c2b75'],
            'data': [
                {
                    'benchmark': {
                        'name': 'hello benchmark',
                        'values': [8.5, 1.5, 2, 3],
                        'total': 15
                    }
                },
                {
                    'groupName': 'Group 1',
                    'answers': [
                        {
                            'name': '7803 - SB16 Sprayed Sample Nozzle',
                            'values': [5.8, 2.5, 1.0],
                        }, {
                            'name': '7801 - SB16 Fresh Scent',
                            'values': [5.75, 1.54, 2.5],
                        }
                    ]
                },
                {
                    'groupName': 'Group 2',
                    'answers': [
                        {
                            'name': '7802 - SB16 Sprayed Sample Nozzle',
                            'values': [5.8, 4.0, 2.1],
                        }, {
                            'name': '7800 - SB16 Fresh Scent',
                            'values': [5.25, 3.5, 0.75],
                        }
                    ]
                }
            ]
        };
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Work/projects/iff/puma/charts/charts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map