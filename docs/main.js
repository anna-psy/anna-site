(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../src/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ../src/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
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
webpackEmptyAsyncContext.id = "../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../src/app/app.component.css":
/*!************************************!*\
  !*** ../src/app/app.component.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portrait {\n    width: 300px;\n    height: 400px;\n    background: url('anna.jpg') no-repeat;\n    background-size: contain;\n    min-width: 300px;\n    flex: none;\n}\n.demo-toolbar {\n  \n}\n.demo-toolbar-icon {\n    padding: 0 14px;\n  }\n.demo-fill-remaining {\n    flex: 1 1 auto;\n  }\nbutton {\n    margin: 0 4px;\n  }\n.main-toolbar {\n    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)\n}\n.main-container {\n    display: flex;\n    flex-direction: row;\n    background-color: #009cdf;\n}\n.mat-toolbar.mat-primary {\n    background-color: #6f6f6f;\n}\n.main-text {\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n    align-items: center;\n    margin: auto 10%;\n    color: #fff;\n}\n.main-text h2 {\n    font-size: 17px;\n}\n.main-text p {\n    text-align: justify;\n}\n.main-content {\n    display: flex;\n    flex-direction: column;\n    margin: 24px 10%;\n    line-height: 1.5;\n    text-align: justify;\n}\n.cell-item {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-self: flex-start;\n}\n.cell-item a {\n    margin-left: 16px;\n    color: #fff;\n}\n@media screen and (max-width: 600px) {\n    .portrait {\n        display: none;\n    }\n} "

/***/ }),

/***/ "../src/app/app.component.html":
/*!*************************************!*\
  !*** ../src/app/app.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"demo-toolbar\">\n    <mat-toolbar color=\"primary\" class=\"main-toolbar\">\n      <!-- <button mat-icon-button>\n        <mat-icon>menu</mat-icon>\n      </button> -->\n\n      <button mat-button>Обо мне</button>\n      <!-- <button mat-button>Статьи</button> -->\n      <button mat-button>Контакты</button>\n      \n    </mat-toolbar>\n\n<div class=\"main-container\">\n  <div class=\"portrait\" title=\"\"></div>\n  <div class=\"main-text\">\n\n    <h1>Психолог Каминская Анна Александровна\n      </h1>\n      <p>Я работаю в русле гештальт похода. Чутко и с уважением помогаю клиентам взять ответственность \n      за свою жизнь и получать от неё радость каждый день.Если у вас вопросы в теме отношений, \n      проблем в семье, потере смысла жизни, недовольства внешностью, невозможности добиться карьерных высот,\n       апатии ко всему, страхи и сомнения, я помогу Вам осознать эти трудности и найти способы их разрешения. \n      </p>\n      <!-- <h2>Стоимость консультации: Очно - 60 мин - 2000 руб.; Skype - 2000 рублей . -60 мин.</h2> -->\n      <div class=\"cell-item\"><mat-icon class=\"mat-icon\">phone</mat-icon> <a href=\"tel:+79032684208\">+7 (903) 268 42 08</a></div>\n      <div class=\"cell-item\"><span>Skype:</span> <a href=\"skype:cleo_ann\">cleo_ann</a></div>\n\n      <span><i class=\"mdi mdi-cellphone-android\"></i></span>\n  </div>\n</div>\n<div class=\"main-content\">\n  <h1>Обо мне</h1>\n  <p>Я занимаюсь психологией более 10 лет: провожу семинары и вебинары по вопросам воспитания и обучения детей, консультирую индивидуально/пары по различным темам: отношения, кризисы в семье, проблемы с детьми, страхи, неуверенность в себе, деньги и карьера, стресс, напряжение и усталость, отсутствие желаний и целей, проблемы с самооценкой.\n    Помогаю обрести уверенность в себе, выстроить отношения с противоположным полом, разобраться в страхах, тревогах, усталости и апатии к жизни, изучить ресурсы для своего дальнейшего развития и гармоничной жизни, преодолеть кризисные ситуации, просто повысить качество своей жизни.\n    Работаю в русле гештальт психологии.\n    При проведении консультаций я предлагаю клиенту возможность осознанного выбора в различных жизненных ситуациях и возможность творчески подойти к принятию нового опыта, который поможет клиенту строить свою жизнь так, как он хочет на данном жизненном этапе.\n    Обращайтесь: пишите, звоните, используйте возможности демо-консультаций со мной. Почитайте отзывы тех, кто использовал эту возможность и получил новый опыт и возможности!\n    С интересом и готовностью помочь - жду Вас!\n    </p>\n</div>"

/***/ }),

/***/ "../src/app/app.component.ts":
/*!***********************************!*\
  !*** ../src/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "../src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../src/app/app.module.ts":
/*!********************************!*\
  !*** ../src/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "../src/app/app.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../src/environments/environment.ts":
/*!******************************************!*\
  !*** ../src/environments/environment.ts ***!
  \******************************************/
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

/***/ "../src/main.ts":
/*!**********************!*\
  !*** ../src/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "../src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "../src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ../src/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\anna-sitte\src\main.ts */"../src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map