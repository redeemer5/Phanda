(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trip-trip-module"],{

/***/ "./src/app/trip/trip.module.ts":
/*!*************************************!*\
  !*** ./src/app/trip/trip.module.ts ***!
  \*************************************/
/*! exports provided: TripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPageModule", function() { return TripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _trip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trip.page */ "./src/app/trip/trip.page.ts");







var routes = [
    {
        path: '',
        component: _trip_page__WEBPACK_IMPORTED_MODULE_6__["TripPage"]
    }
];
var TripPageModule = /** @class */ (function () {
    function TripPageModule() {
    }
    TripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_trip_page__WEBPACK_IMPORTED_MODULE_6__["TripPage"]]
        })
    ], TripPageModule);
    return TripPageModule;
}());



/***/ }),

/***/ "./src/app/trip/trip.page.html":
/*!*************************************!*\
  !*** ./src/app/trip/trip.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>trip</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  \r\n  <!-- <div *ngFor = \"let user of user$\">\r\n    <ion-card routerLink=\"/stops/{{user.des}}\">\r\n      <ion-card-title>{{user.trip}}</ion-card-title>\r\n    </ion-card>\r\n  </div> -->\r\n\r\n    <div *ngFor = \"let user of user$\">\r\n    <ion-card (click)='getStops(user.did)'>\r\n      <ion-card-title>{{user.trip}}</ion-card-title>\r\n      <!-- <ion-card-subtitle>{{user.did}}</ion-card-subtitle> -->\r\n      <!-- <ion-card-subtitle name=\"something\" [(ngModel)]=\"did\">{{user.did}}</ion-card-subtitle> -->\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/trip/trip.page.scss":
/*!*************************************!*\
  !*** ./src/app/trip/trip.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyaXAvdHJpcC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/trip/trip.page.ts":
/*!***********************************!*\
  !*** ./src/app/trip/trip.page.ts ***!
  \***********************************/
/*! exports provided: TripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripPage", function() { return TripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/httpservices.service */ "./src/app/services/httpservices.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var TripPage = /** @class */ (function () {
    function TripPage(http, navCtr) {
        this.http = http;
        this.navCtr = navCtr;
    }
    TripPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getTrips().subscribe(function (http) { return _this.user$ = http; });
    };
    TripPage.prototype.getStops = function (user) {
        var goTo = '/stops/' + user;
        this.navCtr.navigateForward(goTo);
        console.log(user);
    };
    TripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trip',
            template: __webpack_require__(/*! ./trip.page.html */ "./src/app/trip/trip.page.html"),
            styles: [__webpack_require__(/*! ./trip.page.scss */ "./src/app/trip/trip.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpservices_service__WEBPACK_IMPORTED_MODULE_2__["HttpservicesService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], TripPage);
    return TripPage;
}());



/***/ })

}]);
//# sourceMappingURL=trip-trip-module.js.map