(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/NBf":
/*!*****************************************!*\
  !*** ./src/app/service/cart.service.ts ***!
  \*****************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CartService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'api/cart/';
    }
    create(formData) {
        return this.http.post(this.api + "save", formData, { observe: 'response' });
    }
    getQuantity() {
        return this.http.get(this.api + "quantity", { observe: 'response' });
    }
    findAll() {
        return this.http.get(this.api + "find-all", { observe: 'response' });
    }
    // public findById(id: any): Observable<HttpResponse<Category>>{
    //   return this.http.get(`${this.api + "find-id"}/${id}`, { observe: 'response' });
    // }
    update(formData) {
        return this.http.put(this.api + "update", formData, { observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.api + "delete"}/${id}`, { observe: 'response' });
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "SWXo":
/*!**************************************************!*\
  !*** ./src/app/service/discount-code.service.ts ***!
  \**************************************************/
/*! exports provided: DiscountCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountCodeService", function() { return DiscountCodeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class DiscountCodeService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'api/discount-code/';
    }
    create(formData) {
        return this.http.post(this.api + "save", formData, { observe: 'response' });
    }
    findAll() {
        return this.http.get(this.api + "find-all", { observe: 'response' });
    }
    findById(id) {
        return this.http.get(`${this.api + "find-id"}/${id}`, { observe: 'response' });
    }
    update(discountCode) {
        return this.http.put(this.api + "update", discountCode, { observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.api + "delete"}/${id}`, { observe: 'response' });
    }
}
DiscountCodeService.ɵfac = function DiscountCodeService_Factory(t) { return new (t || DiscountCodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DiscountCodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DiscountCodeService, factory: DiscountCodeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscountCodeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "VrpS":
/*!*************************************************!*\
  !*** ./src/app/service/shipping-fee.service.ts ***!
  \*************************************************/
/*! exports provided: ShippingFeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFeeService", function() { return ShippingFeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ShippingFeeService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'api/shipping-fee/';
    }
    create(shippingFee) {
        return this.http.post(this.api + "save", shippingFee, { observe: 'response' });
    }
    findAll() {
        return this.http.get(this.api + "find-all", { observe: 'response' });
    }
    findById(id) {
        return this.http.get(`${this.api + "find-id"}/${id}`, { observe: 'response' });
    }
    update(shippingFee) {
        return this.http.put(this.api + "update", shippingFee, { observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.api + "delete"}/${id}`, { observe: 'response' });
    }
}
ShippingFeeService.ɵfac = function ShippingFeeService_Factory(t) { return new (t || ShippingFeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ShippingFeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShippingFeeService, factory: ShippingFeeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShippingFeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XMTy":
/*!*************************************************!*\
  !*** ./src/app/service/thoroughbred.service.ts ***!
  \*************************************************/
/*! exports provided: ThoroughbredService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThoroughbredService", function() { return ThoroughbredService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ThoroughbredService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'api/thoroughbred/';
    }
    create(thoroughbred) {
        return this.http.post(this.api + "save", thoroughbred, { observe: 'response' });
    }
    findAll() {
        return this.http.get(this.api + "find-all", { observe: 'response' });
    }
    findById(id) {
        return this.http.get(`${this.api + "find-id"}/${id}`, { observe: 'response' });
    }
    update(thoroughbred) {
        return this.http.put(this.api + "update", thoroughbred, { observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.api + "delete"}/${id}`, { observe: 'response' });
    }
}
ThoroughbredService.ɵfac = function ThoroughbredService_Factory(t) { return new (t || ThoroughbredService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ThoroughbredService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThoroughbredService, factory: ThoroughbredService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThoroughbredService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "m/fH":
/*!**************************************************!*\
  !*** ./src/app/service/category-news.service.ts ***!
  \**************************************************/
/*! exports provided: CategoryNewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryNewsService", function() { return CategoryNewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CategoryNewsService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api + 'api/category-news/';
    }
    create(categoryNews) {
        return this.http.post(this.api + "save", categoryNews, { observe: 'response' });
    }
    findAll() {
        return this.http.get(this.api + "find-all", { observe: 'response' });
    }
    findById(id) {
        return this.http.get(`${this.api + "find-id"}/${id}`, { observe: 'response' });
    }
    update(categoryNews) {
        return this.http.put(this.api + "update", categoryNews, { observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.api + "delete"}/${id}`, { observe: 'response' });
    }
}
CategoryNewsService.ɵfac = function CategoryNewsService_Factory(t) { return new (t || CategoryNewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CategoryNewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CategoryNewsService, factory: CategoryNewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryNewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map