(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stops-stops-module"],{

/***/ "./src/app/stops/stops.module.ts":
/*!***************************************!*\
  !*** ./src/app/stops/stops.module.ts ***!
  \***************************************/
/*! exports provided: StopsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopsPageModule", function() { return StopsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stops_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stops.page */ "./src/app/stops/stops.page.ts");







var routes = [
    {
        path: '',
        component: _stops_page__WEBPACK_IMPORTED_MODULE_6__["StopsPage"]
    }
];
var StopsPageModule = /** @class */ (function () {
    function StopsPageModule() {
    }
    StopsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_stops_page__WEBPACK_IMPORTED_MODULE_6__["StopsPage"]]
        })
    ], StopsPageModule);
    return StopsPageModule;
}());



/***/ }),

/***/ "./src/app/stops/stops.page.html":
/*!***************************************!*\
  !*** ./src/app/stops/stops.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>stops</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div *ngFor = \"let user of user$\">\r\n    <ion-card (click)='getRestaurants(user.sid)'>\r\n      <ion-card-title> {{user.stops}} <br /> {{user.address}} </ion-card-title>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/stops/stops.page.scss":
/*!***************************************!*\
  !*** ./src/app/stops/stops.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3BzL3N0b3BzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/stops/stops.page.ts":
/*!*************************************!*\
  !*** ./src/app/stops/stops.page.ts ***!
  \*************************************/
/*! exports provided: StopsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopsPage", function() { return StopsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/httpservices.service */ "./src/app/services/httpservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var StopsPage = /** @class */ (function () {
    function StopsPage(http, router, route, navCtr) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.navCtr = navCtr;
        this.des = 1;
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
    }
    StopsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getStops(this.id).subscribe(function (http) {
            _this.user$ = http;
            console.log(http);
        });
    };
    StopsPage.prototype.getRestaurants = function (user) {
        var goTo = '/restaurants/' + user;
        this.navCtr.navigateForward(goTo);
        console.log(user);
    };
    StopsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stops',
            template: __webpack_require__(/*! ./stops.page.html */ "./src/app/stops/stops.page.html"),
            styles: [__webpack_require__(/*! ./stops.page.scss */ "./src/app/stops/stops.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpservices_service__WEBPACK_IMPORTED_MODULE_2__["HttpservicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], StopsPage);
    return StopsPage;
}());



/***/ })

}]);
//# sourceMappingURL=stops-stops-module.js.map