(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-module-product-add-product-add-product-module"],{

/***/ "KoVx":
/*!***************************************************************************!*\
  !*** ./src/app/admin/module/product/add-product/add-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/product.service */ "nhC3");
/* harmony import */ var src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/category.service */ "es7i");
/* harmony import */ var src_app_service_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/material.service */ "5U92");
/* harmony import */ var src_app_service_thoroughbred_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/thoroughbred.service */ "XMTy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











function AddProductComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a nh\u1EADp t\u00EAn s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "T\u00EAn s\u1EA3n ph\u1EA9m ph\u1EA3i nh\u1ECF h\u01A1n 255 k\u00FD t\u1EF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_9_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AddProductComponent_div_9_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.f.productName.errors == null ? null : ctx_r0.f.productName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r0.f.productName.errors == null ? null : ctx_r0.f.productName.errors.maxlength);
} }
function AddProductComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a nh\u1EADp n\u1ED9i dung l\u1EDDi gi\u1EDBi thi\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "N\u1ED9i dung l\u1EDDi gi\u1EDBi thi\u1EC7u ph\u1EA3i nh\u1ECF h\u01A1n 500 k\u00FD t\u1EF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_14_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AddProductComponent_div_14_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.introduce.errors == null ? null : ctx_r1.f.introduce.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r1.f.introduce.errors == null ? null : ctx_r1.f.introduce.errors.maxlength);
} }
function AddProductComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a nh\u1EADp n\u1ED9i dung m\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "N\u1ED9i dung m\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m ph\u1EA3i nh\u1ECF h\u01A1n 5000 k\u00FD t\u1EF1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_19_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AddProductComponent_div_19_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.f.description.errors == null ? null : ctx_r2.f.description.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r2.f.description.errors == null ? null : ctx_r2.f.description.errors.maxlength);
} }
function AddProductComponent_div_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a nh\u1EADp gi\u00E1 nh\u1EADp s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_24_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Gi\u00E1 b\u00E1n ph\u1EA3i t\u1EEB 0 tr\u1EDF l\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_24_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AddProductComponent_div_24_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.f.priceImport.errors == null ? null : ctx_r3.f.priceImport.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r3.f.priceImport.errors == null ? null : ctx_r3.f.priceImport.errors.pattern);
} }
function AddProductComponent_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a nh\u1EADp gi\u00E1 b\u00E1n s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Gi\u00E1 b\u00E1n ph\u1EA3i t\u1EEB 0 tr\u1EDF l\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_29_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AddProductComponent_div_29_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.f.priceSell.errors == null ? null : ctx_r4.f.priceSell.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r4.f.priceSell.errors == null ? null : ctx_r4.f.priceSell.errors.pattern);
} }
function AddProductComponent_div_34_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a nh\u1EADp ph\u1EA7n tr\u0103m khuy\u1EBFn m\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_34_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Ph\u1EA7n tr\u0103m khuy\u1EBFn m\u1EA1i l\u00E0 s\u1ED1 ph\u1EA3i t\u1EEB 0 \u0111\u1EBFn 100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_34_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Ph\u1EA7n tr\u0103m khuy\u1EBFn m\u1EA1i l\u00E0 s\u1ED1 ph\u1EA3i t\u1EEB 0 \u0111\u1EBFn 100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_34_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AddProductComponent_div_34_div_2_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, AddProductComponent_div_34_div_3_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.f.sale.errors == null ? null : ctx_r5.f.sale.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.f.sale.errors == null ? null : ctx_r5.f.sale.errors.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r5.f.sale.errors == null ? null : ctx_r5.f.sale.errors.max);
} }
function AddProductComponent_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const thoroughbred_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", thoroughbred_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](thoroughbred_r26.purebredLevel);
} }
function AddProductComponent_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a ch\u1ECDn Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_40_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r7.f.thoroughbredId.errors == null ? null : ctx_r7.f.thoroughbredId.errors.required);
} }
function AddProductComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const category_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", category_r28.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](category_r28.categoryName);
} }
function AddProductComponent_div_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a ch\u1ECDn danh m\u1EE5c s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_46_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.f.categoryId.errors == null ? null : ctx_r9.f.categoryId.errors.required);
} }
function AddProductComponent_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const material_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngValue", material_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](material_r30.materialName);
} }
function AddProductComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "B\u1EA1n ch\u01B0a ch\u1ECDn danh m\u1EE5c s\u1EA3n ph\u1EA9m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddProductComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_52_div_1_Template, 2, 0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r11.f.categoryId.errors == null ? null : ctx_r11.f.categoryId.errors.required);
} }
function AddProductComponent_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddProductComponent_div_72_div_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r36); const i_r34 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r35.deleteImage(i_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " X\u00F3a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const url_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", url_r33.base64String, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function AddProductComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AddProductComponent_div_72_div_1_Template, 5, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r12.imgURLs);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class AddProductComponent {
    constructor(formBuilder, productService, categoryService, materialService, thoroughbredService, router) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.categoryService = categoryService;
        this.materialService = materialService;
        this.thoroughbredService = thoroughbredService;
        this.router = router;
        this.submitted = false;
        this.files = [];
        this.imgURLs = [];
        this.myForm = this.formBuilder.group({
            productName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255)]],
            introduce: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5000)]],
            priceImport: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]],
            priceSell: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+$')]],
            //quantityImport: ['', [Validators.required, Validators.min(1), Validators.max(1000000000)]],
            sale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            thoroughbredId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            categoryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            byTime: ['sang'],
            pin: [false],
            materialId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.findAllCategory();
        this.findAllThoroughbred();
        this.findAllMaterial();
    }
    findAllCategory() {
        this.categoryService.findAll().subscribe((res) => {
            this.categorys = res.body || [];
        });
    }
    findAllMaterial() {
        this.materialService.findAll().subscribe((res) => {
            this.materials = res.body || [];
        });
    }
    findAllThoroughbred() {
        this.thoroughbredService.findAll().subscribe((res) => {
            this.thoroughbreds = res.body || [];
        });
    }
    selectFile(event) {
        var _a, _b;
        this.selectedFiles = event.target.files;
        if (this.selectedFiles) {
            if (this.files.length + ((_a = this.selectedFiles) === null || _a === void 0 ? void 0 : _a.length) > 3) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Th??ng b??o', 'B???n ch??? ???????c ch???n t???i ??a 3 b???c ???nh', 'warning');
            }
            else {
                for (let i = 0; i < this.selectedFiles.length; i++) {
                    let file = this.selectedFiles.item(i);
                    if (file) {
                        (_b = this.files) === null || _b === void 0 ? void 0 : _b.push(file);
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            var _a;
                            (_a = this.imgURLs) === null || _a === void 0 ? void 0 : _a.push({ base64String: reader.result });
                        };
                    }
                }
            }
        }
    }
    deleteImage(i) {
        var _a;
        (_a = this.imgURLs) === null || _a === void 0 ? void 0 : _a.forEach((item, index) => {
            if (index === i) {
                this.imgURLs.splice(index, 1);
                this.files.splice(index, 1);
            }
        });
    }
    get f() {
        return this.myForm.controls;
    }
    onSubmit() {
        var _a;
        this.submitted = true;
        if (this.myForm.invalid) {
            return;
        }
        let product = {
            productName: this.myForm.value.productName,
            introduce: this.myForm.value.introduce,
            description: this.myForm.value.description,
            priceImport: this.myForm.value.priceImport,
            priceSell: this.myForm.value.priceSell,
            //:  this.myForm.value.quantityImport,
            sale: this.myForm.value.sale,
            pin: this.myForm.value.pin ? 1 : 0,
            byTime: this.myForm.value.byTime
        };
        const formData = new FormData();
        if (this.files.length === 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Th??ng b??o', 'B???n ph???i ch???n ??t nh???t 1 b?????c ???nh cho s???n ph???m', 'error');
        }
        else {
            (_a = this.files) === null || _a === void 0 ? void 0 : _a.forEach((item, index) => {
                formData.append('files', item);
            });
            formData.append('category', JSON.stringify(this.myForm.value.categoryId));
            formData.append('thoroughbred', JSON.stringify(this.myForm.value.thoroughbredId));
            formData.append('product', JSON.stringify(product));
            formData.append('material', JSON.stringify(this.myForm.value.materialId));
            console.log(formData.get("category"));
            this.productService.create(formData).subscribe((response) => {
                var _a;
                this.message = (_a = response.body) === null || _a === void 0 ? void 0 : _a.message;
                if (this.message === 'success') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Th??ng b??o', 'Th??m s???n ph???m th??nh c??ng', 'success');
                    this.router.navigate(['home-admin/list-product']);
                }
                else if (this.message === 'failed') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Th??ng b??o', 'Th??m s???n ph???m kh??ng th??nh c??ng', 'error');
                }
                else if (this.message === 'dupplicate MaterialId') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Th??ng b??o', 'Tr??ng l???p lo???i nguy??n li???u', 'error');
                }
            });
        }
    }
    onBack() {
        window.history.back();
    }
}
AddProductComponent.??fac = function AddProductComponent_Factory(t) { return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_service_thoroughbred_service__WEBPACK_IMPORTED_MODULE_6__["ThoroughbredService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AddProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AddProductComponent, selectors: [["app-add-product"]], decls: 77, vars: 44, consts: [[1, "row", "justify-content-center", "mt-2", "mb-2"], [1, "col-8"], [2, "color", "grey"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "productName", 1, "form-label"], ["type", "text", "placeholder", "Nh\u1EADp t\u00EAn s\u1EA3n ph\u1EA9m", "formControlName", "productName", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "introduce", 1, "form-label"], ["placeholder", "Nh\u1EADp n\u1ED9i dung l\u1EDDi gi\u1EDBi thi\u1EC7u", "formControlName", "introduce", 1, "form-control", 3, "ngClass"], ["for", "description", 1, "form-label"], ["placeholder", "Nh\u1EADp n\u1ED9i dung m\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m", "formControlName", "description", 1, "form-control", 3, "ngClass"], ["for", "priceImport", 1, "form-label"], ["type", "number", "placeholder", "Nh\u1EADp gi\u00E1 nh\u1EADp s\u1EA3n ph\u1EA9m", "formControlName", "priceImport", 1, "form-control", 3, "ngClass"], ["for", "priceSell", 1, "form-label"], ["type", "number", "placeholder", "Nh\u1EADp gi\u00E1 b\u00E1n s\u1EA3n ph\u1EA9m", "formControlName", "priceSell", 1, "form-control", 3, "ngClass"], ["for", "sale", 1, "form-label"], ["type", "number", "placeholder", "Nh\u1EADp ph\u1EA7n tr\u0103m khuy\u1EBFn m\u1EA1i", "formControlName", "sale", 1, "form-control", 3, "ngClass"], ["for", "thoroughbredId", 1, "form-label"], ["formControlName", "thoroughbredId", 1, "form-select", "form-control", 3, "ngClass"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["for", "categoryId", 1, "form-label"], ["formControlName", "categoryId", 1, "form-select", "form-control", 3, "ngClass"], ["formControlName", "materialId", 1, "form-select", "form-control", 3, "ngClass"], ["for", "image", 1, "form-label"], ["type", "file", "accept", "image/*", "multiple", "true", 1, "form-control", 3, "change"], ["for", "byTime", 1, "form-label"], ["id", "byTime", "formControlName", "byTime", 1, "form-select", "form-control", 3, "ngClass"], ["value", "sang"], ["value", "chieu"], ["value", "toi"], [1, "form-group", "form-check"], ["type", "checkbox", "formControlName", "pin", "id", "acceptTerms", 1, "form-check-input"], ["for", "acceptTerms", 1, "form-check-label"], ["class", "mb-3 text-center", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-secondary", "ms-2", "ml-1", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"], [3, "ngValue"], [1, "mb-3", "text-center"], [4, "ngFor", "ngForOf"], [1, "image-proudct", 3, "src"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "bi", "bi-trash-fill"]], template: function AddProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "TH\u00CAM S\u1EA2N PH\u1EA8M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddProductComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "T\u00EAn s\u1EA3n ph\u1EA9m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, AddProductComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "L\u1EDDi gi\u1EDBi thi\u1EC7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, AddProductComponent_div_14_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "M\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, AddProductComponent_div_19_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Gi\u00E1 nh\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, AddProductComponent_div_24_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Gi\u00E1 b\u00E1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, AddProductComponent_div_29_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Khuy\u1EBFn m\u1EA1i (%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, AddProductComponent_div_34_Template, 4, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, AddProductComponent_option_39_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](40, AddProductComponent_div_40_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Danh m\u1EE5c s\u1EA3n ph\u1EA9m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, AddProductComponent_option_45_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, AddProductComponent_div_46_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Danh m\u1EE5c nguy\u00EAn li\u1EC7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, AddProductComponent_option_51_Template, 2, 2, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](52, AddProductComponent_div_52_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "\u1EA2nh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AddProductComponent_Template_input_change_56_listener($event) { return ctx.selectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Th\u1EDDi gian");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "S\u00E1ng (0h - 11h59p)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Chi\u1EC1u (12h-17h59p)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "T\u1ED1i (18h-23h59p )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "S\u1EA3n ph\u1EA9m n\u1ED5i b\u1EADt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](72, AddProductComponent_div_72_Template, 2, 1, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74, "L\u01B0u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddProductComponent_Template_button_click_75_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](76, "Quay l\u1EA1i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.myForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](24, _c0, ctx.submitted && ctx.f.productName.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.productName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](26, _c0, ctx.submitted && ctx.f.introduce.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.introduce.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](28, _c0, ctx.submitted && ctx.f.description.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.description.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](30, _c0, ctx.submitted && ctx.f.priceImport.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.priceImport.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](32, _c0, ctx.submitted && ctx.f.priceSell.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.priceSell.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](34, _c0, ctx.submitted && ctx.f.sale.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.sale.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](36, _c0, ctx.submitted && ctx.f.thoroughbredId.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.thoroughbreds);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.thoroughbredId.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](38, _c0, ctx.submitted && ctx.f.categoryId.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categorys);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.categoryId.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](40, _c0, ctx.submitted && ctx.f.categoryId.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.materials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.submitted && ctx.f.categoryId.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](42, _c0, ctx.submitted && ctx.f.thoroughbredId.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.imgURLs && ctx.imgURLs.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-product',
                templateUrl: './add-product.component.html',
                styleUrls: ['./add-product.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }, { type: src_app_service_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"] }, { type: src_app_service_thoroughbred_service__WEBPACK_IMPORTED_MODULE_6__["ThoroughbredService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "NWVU":
/*!************************************************************************!*\
  !*** ./src/app/admin/module/product/add-product/add-product.module.ts ***!
  \************************************************************************/
/*! exports provided: AddProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductModule", function() { return AddProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_product_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product-routing.module */ "byKz");
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-product.component */ "KoVx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class AddProductModule {
}
AddProductModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AddProductModule });
AddProductModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AddProductModule_Factory(t) { return new (t || AddProductModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _add_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddProductRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AddProductModule, { declarations: [_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _add_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddProductRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_add_product_component__WEBPACK_IMPORTED_MODULE_3__["AddProductComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _add_product_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddProductRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "byKz":
/*!********************************************************************************!*\
  !*** ./src/app/admin/module/product/add-product/add-product-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: AddProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductRoutingModule", function() { return AddProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-product.component */ "KoVx");





const routes = [{ path: '', component: _add_product_component__WEBPACK_IMPORTED_MODULE_2__["AddProductComponent"] }];
class AddProductRoutingModule {
}
AddProductRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AddProductRoutingModule });
AddProductRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AddProductRoutingModule_Factory(t) { return new (t || AddProductRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AddProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-module-product-add-product-add-product-module.js.map