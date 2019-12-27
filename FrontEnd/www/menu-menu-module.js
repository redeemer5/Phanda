(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-menu-module"],{

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/menu/menu.page.ts");







var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/menu/menu.page.html":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Menu\r\n    </ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/dashboard\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openCart()\">\r\n        <ion-badge *ngIf=\"cart.length > 0\">{{ cart.length }}</ion-badge>\r\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n\r\n    <div *ngFor=\"let user of user$\">\r\n      <ion-card>\r\n        <!-- <p>{{user.id}}</p> -->\r\n        <ion-card-title> <img src=\"../../assets/burger.jpg\">  </ion-card-title>\r\n        <ion-card-subtitle> {{ user.item_name}} <br />R {{user.item_price }} </ion-card-subtitle>\r\n        <ion-button (click)=\"addToCart(user)\" expand=\"block\" margin>add</ion-button>\r\n      </ion-card>\r\n  </div>\r\n\r\n  <!-- <div *ngFor=\"let cat of items\" class=\"category-block\">\r\n \r\n    <ion-row no-padding class=\"category-banner\">\r\n      <ion-col text-left button tappable (click)=\"cat.expanded = !cat.expanded\" align-self-center>\r\n        {{ cat.category }}\r\n      </ion-col>\r\n    </ion-row>\r\n \r\n    <ion-slides [options]=\"sliderConfig\">\r\n      <ion-slide *ngFor=\"let product of cat.products\">\r\n        <div *ngIf=\"cat.expanded\">\r\n          <ion-card>\r\n            <ion-card-header>\r\n              <ion-card-title>\r\n                {{ product.name }} - R{{ product.price }}\r\n              </ion-card-title>\r\n              <ion-card-content>\r\n                <img src=\"https://via.placeholder.com/300x300\">\r\n                <ion-button expand=\"full\" (click)=\"addToCart(product)\">Add to Cart</ion-button>\r\n              </ion-card-content>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slides>\r\n \r\n  </div> -->\r\n</ion-content>"

/***/ }),

/***/ "./src/app/menu/menu.page.scss":
/*!*************************************!*\
  !*** ./src/app/menu/menu.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-badge {\n  color: #fff;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  border-radius: 100%; }\n\n.category-block {\n  margin-bottom: 4px; }\n\n.category-banner {\n  border-left: 8px solid var(--ion-color-secondary);\n  background: var(--ion-color-light);\n  height: 40px;\n  padding: 10px;\n  font-weight: 500; }\n\nion-card-subtitle {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXHVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxQaGFuZGFcXEZyb250RW5kL3NyY1xcYXBwXFxtZW51XFxtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxpREFBaUQ7RUFDakQsa0NBQWtDO0VBQ2xDLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBRUksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhZGdlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxufVxyXG4gXHJcbi5jYXRlZ29yeS1ibG9jayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuIFxyXG4uY2F0ZWdvcnktYmFubmVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxlXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.page.ts":
/*!***********************************!*\
  !*** ./src/app/menu/menu.page.ts ***!
  \***********************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_httpservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/httpservices.service */ "./src/app/services/httpservices.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


// import { Router } from '@angular/router';



var MenuPage = /** @class */ (function () {
    function MenuPage(router, cartService, http, route) {
        this.router = router;
        this.cartService = cartService;
        this.http = http;
        this.route = route;
        this.cart = [];
        this.items = [];
        this.sliderConfig = {
            slidesPerView: 1.6,
            spaceBetween: 10,
            centeredSlides: true
        };
        this.id = this.route.snapshot.paramMap.get('id');
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.cartService.getProducts();
        this.cart = this.cartService.getCart();
        this.http.getMenu(this.id).subscribe(function (http) { return _this.user$ = http; });
    };
    MenuPage.prototype.addToCart = function (product) {
        this.cartService.addProduct(product);
    };
    MenuPage.prototype.openCart = function () {
        this.router.navigate(['cart']);
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_httpservices_service__WEBPACK_IMPORTED_MODULE_3__["HttpservicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=menu-menu-module.js.map