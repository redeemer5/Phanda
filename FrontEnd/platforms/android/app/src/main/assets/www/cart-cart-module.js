(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.html":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>My Cart</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h3>Selected items</h3>\r\n  <h4>Please confirm your order</h4>\r\n\r\n  <ion-list>\r\n    <h4>Order number: {{orderNumber}}</h4>\r\n    \r\n    <ion-item-sliding *ngFor=\"let item of selectedItems\" lines=\"inset\">\r\n      <ion-item>\r\n        <h5>\r\n          {{ item.item_name }} - {{ item.item_price | currency:'R ':'symbol' }}\r\n        </h5>\r\n        <ion-label slot=\"end\" text-right>\r\n          {{ (item.item_price * item.count) | currency:'R ':'symbol' }}</ion-label>\r\n      </ion-item>\r\n      \r\n\r\n\r\n      <ion-item-options>\r\n\r\n        <ion-item-option color=\"primary\" (click)=\"remove()\">\r\n          <ion-icon slot=\"start\" name=\"delete\" ></ion-icon>\r\n          Delete\r\n        </ion-item-option>\r\n\r\n        <ion-item-option color=\"secondary\">\r\n          <ion-icon slot=\"start\" name=\"archive\"></ion-icon>\r\n          Archive\r\n        </ion-item-option>\r\n\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n  </ion-list>\r\n\r\n  <h3>your total price is</h3>\r\n  <h4>R {{total}} </h4>\r\n  <div id=\"paypal-checkout-btn\"></div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3, h4, h5 {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9DOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxQaGFuZGFcXEZyb250RW5kL3NyY1xcYXBwXFxjYXJ0XFxjYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzLGg0LGg1XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_httpservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/httpservices.service */ "./src/app/services/httpservices.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/firestore.service */ "./src/app/services/firestore.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




//firestore






var CartPage = /** @class */ (function () {
    function CartPage(cartService, http, httpc, alertController, 
    //firestore
    loadingCtrl, alertCtrl, firestoreService, navCtrl, formBuilder, routerr) {
        var _this = this;
        this.cartService = cartService;
        this.http = http;
        this.httpc = httpc;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.firestoreService = firestoreService;
        this.navCtrl = navCtrl;
        this.routerr = routerr;
        // array, total, and order number declaration
        this.selectedItems = [];
        this.total = 0;
        // orderNumber: number;
        this.orderNumber = Math.floor(Math.random() * 100);
        // hold current user and restaurant data
        this.userData = {};
        this.resData = {};
        // paypal code start
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
                    _this.NextPage();
                    _this.presentAlert();
                });
            }
        };
        if (localStorage.getItem('userData') !== undefined) {
            this.userData = JSON.parse(localStorage.getItem('userData'));
        }
        if (localStorage.getItem('resData') !== undefined) {
            this.resData = JSON.parse(localStorage.getItem('resData'));
        }
    }
    // go to paypal page with value
    CartPage.prototype.NextPage = function () {
        var now = new Date();
        this.today = now.toISOString();
        // this.routerr.navigateByUrl('/paypal/' + this.total);
        var serverData = {
            // user side info
            date: this.today,
            name: this.userData.name,
            surname: this.userData.surname,
            cell: this.userData.cell,
            email: this.userData.email,
            // restuarant side info
            restuarant: this.resData.restaurant_name,
            restuarantno: this.resData.restaurant_phone_number,
            orderno: this.orderNumber.toString(),
            total: this.total,
        };
        this.http.postOrder(serverData).subscribe(function (response) {
        });
    };
    CartPage.prototype.ngOnInit = function () {
        this.getCartInfo();
    };
    CartPage.prototype.getCartInfo = function () {
        var _this = this;
        // api call to convert the rates
        setInterval(function () {
            _this.httpc.get('https://api.exchangerate-api.com/v4/latest/USD')
                .subscribe(function (data) {
                _this.convert = data.rates.ZAR;
                _this.sum = _this.total / _this.convert;
                //  console.log(this.sum)
            });
        }, 10000);
        // api call to convert the rates
        // get pushed items from the array
        var items = this.cartService.getCart();
        // let selected = {};
        this.selectedItems = items;
        var price = 0;
        this.selectedItems.map(function (item) { return price += item.item_price; });
        this.total = price;
        // get pushed items from the array
    };
    CartPage.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (!this.addScript) {
            this.addPaypalScript().then(function () {
                paypal.Button.render(_this.paypalConfig, '#paypal-checkout-btn');
                _this.paypalLoad = false;
            });
        }
    };
    CartPage.prototype.addPaypalScript = function () {
        this.addScript = true;
        return new Promise(function (resolve, reject) {
            var scripttagElement = document.createElement('script');
            scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scripttagElement.onload = resolve;
            document.body.appendChild(scripttagElement);
        });
    };
    // paypal code end
    CartPage.prototype.remove = function (product) {
        this.cartService.removeProduct(product);
        this.getCartInfo();
    };
    CartPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Confirmation',
                            subHeader: 'All done !',
                            message: 'Your order has been accepted by the restaurant. See you soon.',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.page.html */ "./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"],
            _services_httpservices_service__WEBPACK_IMPORTED_MODULE_3__["HttpservicesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _services_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CartPage);
    return CartPage;
}());



/***/ }),

/***/ "./src/app/services/firestore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/firestore.service.ts ***!
  \***********************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);



var FirestoreService = /** @class */ (function () {
    function FirestoreService(firestore) {
        this.firestore = firestore;
    }
    FirestoreService.prototype.createSong = function (order) {
        var id = this.firestore.createId();
        return this.firestore.doc("Order/" + id).set({
            id: id,
            order: order,
        });
    };
    FirestoreService.prototype.getSongList = function () {
        return this.firestore.collection("Order");
    };
    FirestoreService.prototype.getSongDetail = function (songId) {
        return this.firestore.collection('Order').doc(songId);
    };
    FirestoreService.prototype.deleteSong = function (songId) {
        return this.firestore.doc("Order/" + songId).delete();
    };
    FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module.js.map