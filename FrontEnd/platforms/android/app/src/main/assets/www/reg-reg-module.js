(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reg-reg-module"],{

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/reg/reg.module.ts":
/*!***********************************!*\
  !*** ./src/app/reg/reg.module.ts ***!
  \***********************************/
/*! exports provided: RegPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegPageModule", function() { return RegPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reg.page */ "./src/app/reg/reg.page.ts");







var routes = [
    {
        path: '',
        component: _reg_page__WEBPACK_IMPORTED_MODULE_6__["RegPage"]
    }
];
var RegPageModule = /** @class */ (function () {
    function RegPageModule() {
    }
    RegPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_reg_page__WEBPACK_IMPORTED_MODULE_6__["RegPage"]]
        })
    ], RegPageModule);
    return RegPageModule;
}());



/***/ }),

/***/ "./src/app/reg/reg.page.html":
/*!***********************************!*\
  !*** ./src/app/reg/reg.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>reg</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-input [(ngModel)]=\"data.name\" placeholder=\"Enter Name\" inputmode=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input [(ngModel)]=\"data.surname\" placeholder=\"Enter Surname\" inputmode=\"text\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input [(ngModel)]=\"data.cell\" placeholder=\"Enter Cell\" inputmode=\"tel\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input [(ngModel)]=\"data.email\" placeholder=\"Enter Email\" inputmode=\"email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-input [(ngModel)]=\"data.password\" placeholder=\"Enter Password\" inputmode=\"password\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-button (click)=\"submitForm()\">Register user</ion-button>\n  </ion-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/reg/reg.page.scss":
/*!***********************************!*\
  !*** ./src/app/reg/reg.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZy9yZWcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/reg/reg.page.ts":
/*!*********************************!*\
  !*** ./src/app/reg/reg.page.ts ***!
  \*********************************/
/*! exports provided: RegPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegPage", function() { return RegPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegPage = /** @class */ (function () {
    function RegPage(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.data = new _models_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    RegPage.prototype.ngOnInit = function () {
    };
    RegPage.prototype.submitForm = function () {
        var _this = this;
        this.apiService.createItem(this.data).subscribe(function (response) {
            _this.router.navigate(['home']);
        });
    };
    RegPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-reg',
            template: __webpack_require__(/*! ./reg.page.html */ "./src/app/reg/reg.page.html"),
            styles: [__webpack_require__(/*! ./reg.page.scss */ "./src/app/reg/reg.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegPage);
    return RegPage;
}());



/***/ })

}]);
//# sourceMappingURL=reg-reg-module.js.map