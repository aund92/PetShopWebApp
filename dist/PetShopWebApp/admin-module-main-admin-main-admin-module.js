(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-module-main-admin-main-admin-module"],{

/***/ "JFBf":
/*!*****************************************************************!*\
  !*** ./src/app/admin/module/main-admin/main-admin.component.ts ***!
  \*****************************************************************/
/*! exports provided: MainAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAdminComponent", function() { return MainAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MainAdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainAdminComponent.ɵfac = function MainAdminComponent_Factory(t) { return new (t || MainAdminComponent)(); };
MainAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainAdminComponent, selectors: [["app-main-admin"]], decls: 1, vars: 0, consts: [["src", "../assets/images/mona.png", 1, "logo", 2, "margin-top", "20px", "width", "50%", "height", "50%", "margin-left", "300px"]], template: function MainAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-admin',
                templateUrl: './main-admin.component.html',
                styleUrls: ['./main-admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Yhj9":
/*!**********************************************************************!*\
  !*** ./src/app/admin/module/main-admin/main-admin-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MainAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAdminRoutingModule", function() { return MainAdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-admin.component */ "JFBf");





const routes = [{ path: '', component: _main_admin_component__WEBPACK_IMPORTED_MODULE_2__["MainAdminComponent"] }];
class MainAdminRoutingModule {
}
MainAdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainAdminRoutingModule });
MainAdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainAdminRoutingModule_Factory(t) { return new (t || MainAdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainAdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainAdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rBBU":
/*!**************************************************************!*\
  !*** ./src/app/admin/module/main-admin/main-admin.module.ts ***!
  \**************************************************************/
/*! exports provided: MainAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAdminModule", function() { return MainAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-admin-routing.module */ "Yhj9");
/* harmony import */ var _main_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-admin.component */ "JFBf");





class MainAdminModule {
}
MainAdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainAdminModule });
MainAdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainAdminModule_Factory(t) { return new (t || MainAdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _main_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainAdminRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainAdminModule, { declarations: [_main_admin_component__WEBPACK_IMPORTED_MODULE_3__["MainAdminComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _main_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainAdminRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainAdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_main_admin_component__WEBPACK_IMPORTED_MODULE_3__["MainAdminComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _main_admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["MainAdminRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-module-main-admin-main-admin-module.js.map