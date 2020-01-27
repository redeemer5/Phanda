(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["restaurants-restaurants-module"],{

/***/ "./src/app/restaurants/restaurants.module.ts":
/*!***************************************************!*\
  !*** ./src/app/restaurants/restaurants.module.ts ***!
  \***************************************************/
/*! exports provided: RestaurantsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPageModule", function() { return RestaurantsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restaurants_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurants.page */ "./src/app/restaurants/restaurants.page.ts");







var routes = [
    {
        path: '',
        component: _restaurants_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantsPage"]
    }
];
var RestaurantsPageModule = /** @class */ (function () {
    function RestaurantsPageModule() {
    }
    RestaurantsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_restaurants_page__WEBPACK_IMPORTED_MODULE_6__["RestaurantsPage"]]
        })
    ], RestaurantsPageModule);
    return RestaurantsPageModule;
}());



/***/ }),

/***/ "./src/app/restaurants/restaurants.page.html":
/*!***************************************************!*\
  !*** ./src/app/restaurants/restaurants.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>restaurants</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h3 style=\"text-align: center;\">restaurants available</h3>\r\n  <div *ngFor = \"let user of user$\">\r\n    <ion-card (click)='getMenu(user.resid)'>\r\n      <ion-card-title> {{user.restaurant_name}} <br /> {{user.restaurant_address}} </ion-card-title>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/restaurants/restaurants.page.scss":
/*!***************************************************!*\
  !*** ./src/app/restaurants/restaurants.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3RhdXJhbnRzL3Jlc3RhdXJhbnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/restaurants/restaurants.page.ts":
/*!*************************************************!*\
  !*** ./src/app/restaurants/restaurants.page.ts ***!
  \*************************************************/
/*! exports provided: RestaurantsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantsPage", function() { return RestaurantsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_httpservices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/httpservices.service */ "./src/app/services/httpservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RestaurantsPage = /** @class */ (function () {
    function RestaurantsPage(http, router, route, navCtr) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.navCtr = navCtr;
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
    }
    RestaurantsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getRestaurants(this.id).subscribe(function (http) {
            _this.user$ = http;
            console.log(http);
        });
    };
    RestaurantsPage.prototype.getMenu = function (user) {
        var goTo = '/menu/' + user;
        this.navCtr.navigateForward(goTo);
        console.log(user);
    };
    RestaurantsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restaurants',
            template: __webpack_require__(/*! ./restaurants.page.html */ "./src/app/restaurants/restaurants.page.html"),
            styles: [__webpack_require__(/*! ./restaurants.page.scss */ "./src/app/restaurants/restaurants.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_httpservices_service__WEBPACK_IMPORTED_MODULE_2__["HttpservicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], RestaurantsPage);
    return RestaurantsPage;
}());



/***/ })

}]);
//# sourceMappingURL=restaurants-restaurants-module.js.map