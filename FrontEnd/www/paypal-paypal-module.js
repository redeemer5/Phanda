(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paypal-paypal-module"],{

/***/ "./src/app/paypal/paypal.module.ts":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.module.ts ***!
  \*****************************************/
/*! exports provided: PaypalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function() { return PaypalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paypal.page */ "./src/app/paypal/paypal.page.ts");







var routes = [
    {
        path: '',
        component: _paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]
    }
];
var PaypalPageModule = /** @class */ (function () {
    function PaypalPageModule() {
    }
    PaypalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]]
        })
    ], PaypalPageModule);
    return PaypalPageModule;
}());



/***/ }),

/***/ "./src/app/paypal/paypal.page.html":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>paypal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <h3>your total price is</h3>\n  <ion-label>R {{total}} </ion-label>\n  <!-- <input type=\"number\" [(ngModel)]=\"finalAmount\"> -->\n  <div id=\"paypal-checkout-btn\"></div>\n\n  <!-- <ion-label [(ngModel)]=\"finalAmount\">5</ion-label> -->\n\n  <!-- <form action=\"https://www.paypal.com/cgi-bin/webscr\" method=\"post\" target=\"_top\">\n    <input type=\"hidden\" name=\"cmd\" value=\"_s-xclick\">\n    <input type=\"hidden\" name=\"hosted_button_id\" value=\"FN3MYEHYV3U5C\">\n    <input type=\"image\" src=\"https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif\" border=\"0\" name=\"submit\" alt=\"PayPal - The safer, easier way to pay online!\">\n    <img alt=\"\" border=\"0\" src=\"https://www.paypalobjects.com/en_US/i/scr/pixel.gif\" width=\"1\" height=\"1\">\n    </form> -->\n\n    <!-- <ion-label [(ngModel)]=\"total\"></ion-label> -->\n\n    \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/paypal/paypal.page.scss":
/*!*****************************************!*\
  !*** ./src/app/paypal/paypal.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BheXBhbC9wYXlwYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/paypal/paypal.page.ts":
/*!***************************************!*\
  !*** ./src/app/paypal/paypal.page.ts ***!
  \***************************************/
/*! exports provided: PaypalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPage", function() { return PaypalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var PaypalPage = /** @class */ (function () {
    function PaypalPage(route, http) {
        var _this = this;
        this.route = route;
        this.http = http;
        this.addScript = false;
        this.paypalLoad = true;
        this.paypalConfig = {
            env: 'production',
            client: {
                sandbox: 'Aeuh_e9M4o1YxR8ZXanPCLsPIxMeImL3KzTB9vvsGk9gR5ps1QqfmCeX3pn2iS_cGm8_4OizWQfSwvaM',
                production: 'AaTKCd3x9c3LDRB0biM3GKq2FK9s13qI_2zL68BWGrQnZEgY1L2UHAYX1NLy5VhtcrZad7_kQAVj53Xe'
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    payment: {
                        transactions: [
                            { amount: { total: _this.sum.toFixed(2), currency: 'USD' } }
                        ]
                    }
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    // redirect user when the payment is done
                });
            }
        };
    }
    PaypalPage.prototype.ngOnInit = function () {
        var _this = this;
        var amount = this.route.snapshot.paramMap.get('amount');
        this.total = +amount;
        // console.log(this.total)
        setInterval(function () {
            _this.http.get('https://api.exchangerate-api.com/v4/latest/USD')
                .subscribe(function (data) {
                _this.convert = data.rates.ZAR;
                _this.sum = _this.total / _this.convert;
                console.log(_this.sum);
            });
        }, 10000);
    };
    PaypalPage.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
                _this.paypalLoad = false;
            });
        }
    };
    PaypalPage.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    PaypalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paypal',
            template: __webpack_require__(/*! ./paypal.page.html */ "./src/app/paypal/paypal.page.html"),
            styles: [__webpack_require__(/*! ./paypal.page.scss */ "./src/app/paypal/paypal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PaypalPage);
    return PaypalPage;
}());



/***/ })

}]);
//# sourceMappingURL=paypal-paypal-module.js.map