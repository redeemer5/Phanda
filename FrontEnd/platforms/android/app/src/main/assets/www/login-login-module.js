(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n  <ion-card>\n    <!-- <ion-card-title>Phanda</ion-card-title>\n    <ion-card-subtitle>Where your food is !</ion-card-subtitle> -->\n\n    <ion-card-title> </ion-card-title>\n\n    <ion-card-content>\n\n      <ion-item>\n        <ion-label position=\"floating\">Username</ion-label>\n        <ion-input [(ngModel)]=\"name\"></ion-input>\n      </ion-item>\n      \n\n  <ion-item>\n    <ion-label position=\"floating\">Email</ion-label>\n    <ion-input [(ngModel)]=\"email\"></ion-input>\n  </ion-item>\n  \n      <ion-label style=\"color: red;\">{{ErrorMessage}}</ion-label>\n\n      \n      <ion-button (click)=\"Login()\" expand=\"block\">sign in</ion-button>\n      <ion-label>Not registered ? please click <a href=\"/reg\">here</a></ion-label>\n      <!-- <ion-button routerLink=\"/reg\" expand=\"block\">sign up</ion-button> -->\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  border-radius: 25px;\n  border: 2px solid lightgray;\n  padding: 20px;\n  color: black; }\n\nion-card-title {\n  background-image: url('phanda.jpeg');\n  width: auto;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\nion-card {\n  color: black;\n  opacity: 0.8;\n  margin-top: 200px;\n  background-color: white; }\n\nion-content {\n  --background: url('newCoffee.jpg') no-repeat center/cover fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcUGhhbmRhXFxGcm9udEVuZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHaEI7RUFFSSxvQ0FBaUQ7RUFDakQsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7O0FBRzFCO0VBRUksWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksK0RBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dFxyXG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGVcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvcGhhbmRhLmpwZWcnKTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5pb24tY2FyZFxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvbmV3Q29mZmVlLmpwZykgbm8tcmVwZWF0IGNlbnRlci9jb3ZlciBmaXhlZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var LoginPage = /** @class */ (function () {
    function LoginPage(httpCall, navCtrl) {
        this.httpCall = httpCall;
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    // end variables //
    // methods
    LoginPage.prototype.Login = function () {
        var _this = this;
        this.httpCall.getNameAndPassword(this.name, this.email).subscribe(function (httpCall) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, httpCall];
                    case 1:
                        _a.user$ = _b.sent();
                        // console.log(this.user$);
                        if (this.user$.length > 0) {
                            // navigate to the next page
                            this.navCtrl.navigateForward('/dashboard');
                            // saves user data on the local storage
                            localStorage.setItem('userData', JSON.stringify(this.user$[0]));
                        }
                        else {
                            this.ErrorMessage = 'Username or password incorrect';
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map