webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes
                //{ enableTracing: true } // <-- debugging purposes only
                ),
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to_el__ = __webpack_require__("../../../../ng2-scroll-to-el/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__landing_landing_component__["a" /* LandingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_scroll_to_el__["a" /* ScrollToModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_scroll_to_el__ = __webpack_require__("../../../../ng2-scroll-to-el/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__("../../../../../src/app/core/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_social_footer_social_component__ = __webpack_require__("../../../../../src/app/core/footer-social/footer-social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_contact_footer_contact_component__ = __webpack_require__("../../../../../src/app/core/footer-contact/footer-contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng2_scroll_to_el__["a" /* ScrollToModule */].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_social_footer_social_component__["a" /* FooterSocialComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_contact_footer_contact_component__["a" /* FooterContactComponent */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */], __WEBPACK_IMPORTED_MODULE_6__footer_social_footer_social_component__["a" /* FooterSocialComponent */], __WEBPACK_IMPORTED_MODULE_7__footer_contact_footer_contact_component__["a" /* FooterContactComponent */]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/footer-contact/footer-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-contact\">\n\n  <ul>\n    <li>\n      John Hughes <br />\n      Carron<br />\n      Tipperary<br />\n      Ireland\n    </li>\n    <li>\n      <a href=\"tel:+353 87 69 9888\">+353 87 69 9888</a>\n    </li>\n    <li>\n      <a href=\"mailto:1001hz@gmail.com\">1001hz@gmail.com</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/footer-contact/footer-contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Libre+Franklin);", ""]);

// module
exports.push([module.i, ".footer-contact ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-bottom: 48px; }\n  .footer-contact ul li {\n    padding: 0;\n    margin: 0;\n    color: #bbb;\n    margin-bottom: 12px; }\n    .footer-contact ul li a {\n      color: #bbb;\n      text-decoration: none; }\n      .footer-contact ul li a:hover {\n        color: #005960;\n        transition: color 0.3s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/footer-contact/footer-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterContactComponent = (function () {
    function FooterContactComponent() {
    }
    FooterContactComponent.prototype.ngOnInit = function () {
    };
    FooterContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer-contact',
            template: __webpack_require__("../../../../../src/app/core/footer-contact/footer-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/footer-contact/footer-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterContactComponent);
    return FooterContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/footer-social/footer-social.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-social\">\n\n  <div class=\"footer-social__item\">\n    <a href=\"https://www.linkedin.com/in/john-hughes-ng/\">\n      <svg class=\"footer-social__icon\" aria-labelledby=\"simpleicons-linkedin-icon\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <title id=\"simpleicons-linkedin-icon\">LinkedIn icon</title>\n        <path class=\"footer-social__icon--linkedin\" d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/>\n      </svg>\n    </a>\n  </div>\n\n  <div class=\"footer-social__item\">\n    <a href=\"https://github.com/1001hz\">\n      <svg class=\"footer-social__icon\" aria-labelledby=\"simpleicons-github-icon\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n        <title id=\"simpleicons-github-icon\">GitHub icon</title>\n        <path class=\"footer-social__icon--github\" d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/>\n      </svg>\n    </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/footer-social/footer-social.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Libre+Franklin);", ""]);

// module
exports.push([module.i, ".footer-social {\n  max-width: 900px;\n  margin-right: auto;\n  margin-left: auto; }\n  .footer-social:after {\n    display: table;\n    clear: both;\n    content: ''; }\n  .footer-social__item {\n    width: calc((100% - 20px * 2) / 2);\n    margin-right: 20px;\n    float: left; }\n    .footer-social__item:nth-child(2n+2) {\n      margin-right: 0;\n      float: right; }\n  .footer-social__icon {\n    display: block;\n    text-indent: -9999px;\n    width: 60px;\n    height: 60px;\n    background-size: 60px 60px;\n    fill: #fff; }\n    .footer-social__icon:hover {\n      transition: fill 0.3s;\n      fill: #005960; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/footer-social/footer-social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterSocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterSocialComponent = (function () {
    function FooterSocialComponent() {
    }
    FooterSocialComponent.prototype.ngOnInit = function () {
    };
    FooterSocialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer-social',
            template: __webpack_require__("../../../../../src/app/core/footer-social/footer-social.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/footer-social/footer-social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterSocialComponent);
    return FooterSocialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n\n  <div class=\"nav__wrapper nav__mobile\">\n\n    <div class=\"nav__title\">\n      John Hughes Portfolio\n    </div>\n\n    <div class=\"nav__menu\">\n\n      <button class=\"nav__menu-button\" mat-icon-button [mat-menu-trigger-for]=\"menu\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n\n      <div class=\"nav__mat-menu\">\n        <mat-menu x-position=\"before\" #menu=\"matMenu\">\n          <button [scrollTo]=\"'#css'\" mat-menu-item>CSS</button>\n          <button [scrollTo]=\"'#angular'\" mat-menu-item>Angular</button>\n          <button [scrollTo]=\"'#projects'\" mat-menu-item>Projects</button>\n        </mat-menu>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"nav__wrapper nav__desktop\">\n\n    <div class=\"nav__title\">\n      John Hughes Portfolio\n    </div>\n\n    <ul class=\"nav__menu\">\n      <li>\n        <a [scrollTo]=\"'#css'\">CSS</a>\n      </li>\n      <li>\n        <a [scrollTo]=\"'#angular'\">Angular</a>\n      </li>\n      <li>\n        <a [scrollTo]=\"'#projects'\">Projects</a>\n      </li>\n    </ul>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Libre+Franklin);", ""]);

// module
exports.push([module.i, ".nav {\n  height: 64px;\n  background-color: #121212;\n  color: #fff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2; }\n  .nav__wrapper {\n    max-width: 900px;\n    margin-right: auto;\n    margin-left: auto;\n    height: 64px; }\n    .nav__wrapper:after {\n      display: table;\n      clear: both;\n      content: ''; }\n  .nav__title {\n    width: calc((100% - 20px * 2) / 2);\n    margin-right: 20px;\n    float: left;\n    position: relative;\n    top: 50%;\n    top: calc(50% + 0);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    padding-left: 20px;\n    font-family: \"Raleway\", sans-serif; }\n    .nav__title:nth-child(2n+2) {\n      margin-right: 0;\n      float: right; }\n  .nav__menu {\n    width: calc((100% - 20px * 2) / 2);\n    margin-right: 20px;\n    float: left;\n    position: relative;\n    top: 50%;\n    top: calc(50% + 0);\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n    .nav__menu:nth-child(2n+2) {\n      margin-right: 0;\n      float: right; }\n  .nav__menu-button {\n    float: right; }\n  .nav__desktop {\n    display: none; }\n\n@media (min-width: 1024px) {\n  .nav {\n    background-color: transparent;\n    color: #fff; }\n    .nav__mobile {\n      display: none; }\n    .nav__desktop {\n      display: block; }\n    .nav__menu {\n      position: relative;\n      margin: 0;\n      list-style: none;\n      padding: 0;\n      max-width: 900px;\n      margin-right: auto;\n      margin-left: auto; }\n      .nav__menu:after {\n        display: table;\n        clear: both;\n        content: ''; }\n      .nav__menu li {\n        width: calc((100% - 20px * 2) / 3);\n        margin-right: 20px;\n        float: left;\n        cursor: pointer; }\n        .nav__menu li:nth-child(3n+3) {\n          margin-right: 0;\n          float: right; }\n        .nav__menu li a {\n          font-family: \"Raleway\", sans-serif;\n          color: #fff;\n          text-decoration: none;\n          font-weight: bold; }\n          .nav__menu li a:hover {\n            color: #9C9A40;\n            transition: color 0.3ms; }\n    .nav:before {\n      content: '';\n      background-color: #121212;\n      opacity: 0.7;\n      position: absolute;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 64px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/core/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/core/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"landing\">\n\n  <div class=\"section landing__banner\">\n    <section class=\"section__inner section__inner--banner\">\n\n      <div class=\"section__content section__content--valign\">\n\n        <div class=\"landing__avatar section__content--halign\">\n        </div>\n\n        <div class=\"landing__heading-wrapper\">\n\n          <h1 class=\"landing__heading landing__heading--one\">John Hughes</h1>\n          <h2 class=\"landing__heading landing__heading--two\">Web Developer</h2>\n\n        </div>\n\n\n        <ul class=\"landing__social-icons\">\n          <li class=\"landing__social-icon\">\n            <a href=\"https://www.linkedin.com/in/john-hughes-ng/\">\n              <svg class=\"landing__social-icon\" aria-labelledby=\"simpleicons-linkedin-icon\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <title id=\"simpleicons-linkedin-icon\">LinkedIn icon</title>\n                <path class=\"landing__social-icon--linkedin\" d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/>\n              </svg>\n            </a>\n          </li>\n          <li class=\"landing__social-icon\">\n            <a href=\"https://github.com/1001hz\">\n              <svg class=\"landing__social-icon\" aria-labelledby=\"simpleicons-github-icon\" role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <title id=\"simpleicons-github-icon\">GitHub icon</title>\n                <path class=\"landing__social-icon--github\" d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/>\n              </svg>\n            </a>\n          </li>\n        </ul>\n\n      </div>\n\n    </section>\n  </div>\n\n\n  <div class=\"section\" id=\"css\">\n\n    <section class=\"section__inner\">\n\n      <div class=\"section__heading-wrapper\">\n        <h2 class=\"section__heading landing__heading landing__heading--alt\">Frontend CSS Work</h2>\n      </div>\n\n      <div class=\"landing__description\">\n        <p>Most of the following examples were styled using the Bourbon framework built with either Gulp or Webpack. They are mostly custom WordPress themes and plugins.</p>\n      </div>\n\n\n      <div class=\"landing__item\">\n        <a href=\"http://thebays.com.au/\">\n          <img class=\"landing__image landing__image--website\" src=\"/portfolio/assets/websites/the-bays.png\" alt=\"The Bays Website\" />\n        </a>\n      </div>\n\n      <div class=\"landing__item\">\n        <a href=\"http://conducthq.com/\">\n          <img class=\"landing__image landing__image--website\" src=\"/portfolio/assets/websites/conduct.png\" alt=\"Conduct Website\" />\n        </a>\n      </div>\n\n      <div class=\"landing__item\">\n        <a href=\"http://www.cleanaway.com.au/\">\n          <img class=\"landing__image landing__image--website\" src=\"/portfolio/assets/websites/cleanaway.png\" alt=\"Cleanaway Website\" />\n        </a>\n      </div>\n\n      <div class=\"landing__item\">\n        <a href=\"http://www.socialtraders.com.au/\">\n          <img class=\"landing__image landing__image--website\" src=\"/portfolio/assets/websites/social-traders.png\" alt=\"Social Traders Website\" />\n        </a>\n      </div>\n\n\n    </section>\n  </div>\n\n  <div class=\"section section--primary\" id=\"angular\">\n\n    <section class=\"section__inner\">\n\n      <div class=\"section__heading-wrapper\">\n        <h2 class=\"section__heading landing__heading\">Angular Work</h2>\n      </div>\n\n      <div class=\"landing__description landing__description--alt\">\n        <p>\n          I have been working with Angular from version 1.3 and up. Below are some of the projects I have worked on.\n          In fact this page is also an Angular 5 app. Feel free to check out the code at the <a href=\"https://github.com/1001hz/portfolio\">Github repo</a>.\n        </p>\n      </div>\n\n      <div class=\"landing__item\">\n        <h3 class=\"landing__item-heading\">Portal App</h3>\n        <p class=\"landing__item-description landing__item-description--alt\">\n          A portal application for users to access information from multiple systems.\n          The frontend was fed from a Redis cache to increase the application's speed.\n          The cache was populated from cron jobs nightly pulling data from multiple systems.\n        </p>\n      </div>\n\n      <div class=\"landing__item\">\n        <h3 class=\"landing__item-heading\">CMS App</h3>\n        <p class=\"landing__item-description landing__item-description--alt\">\n          A CMS that controls information being pushed out to a native mobile app for in house training in a large company.\n          The CMS controlled user management, slot allocation, plus data that the native phone Android/IOS app would display.\n        </p>\n      </div>\n\n      <div class=\"landing__item\">\n        <h3 class=\"landing__item-heading\">User Allocation App</h3>\n        <p class=\"landing__item-description landing__item-description--alt\">\n          An application for allocating users to homes based on certain criteria.\n          Contains user management plus multiple roles and profiles. API data is fed from a Symfony2 backend with Postgres database.\n        </p>\n      </div>\n\n      <div class=\"landing__item\">\n        <h3 class=\"landing__item-heading\">Wedding Planner App</h3>\n        <p class=\"landing__item-description landing__item-description--alt\">\n          An Angular 5 application for users to manage their wedding. Built with Node and MongoDB backend.\n          Client side state is managed using ngrx store and ngrx effects.\n          This is a personal project and is currently in development. Feel free to have a look at the <a href=\"https://github.com/1001hz/eros\">Github repo</a>\n        </p>\n      </div>\n\n    </section>\n\n  </div>\n\n  <div class=\"section section--secondary\" id=\"projects\">\n\n    <section class=\"section__inner\">\n\n      <div class=\"section__heading-wrapper\">\n        <h2 class=\"section__heading landing__heading\">Projects</h2>\n      </div>\n\n      <div class=\"landing__description landing__description--alt\">\n        <p>\n          I have worked on a large number of integration projects. These touch multiple enterprise applications and data stores including:\n        </p>\n      </div>\n\n      <ul class=\"landing__list\">\n        <li>\n          <span><mat-icon>web</mat-icon></span>\n          <span>Oracle RightNow CRM</span>\n        </li>\n        <li>\n          <span><mat-icon>storage</mat-icon></span>\n          <span>SAP</span>\n        </li>\n        <li>\n          <span><mat-icon>web</mat-icon></span>\n          <span>SharePoint</span>\n        </li>\n        <li>\n          <span><mat-icon>search</mat-icon></span>\n          <span>Funnelback Search Engine</span>\n        </li>\n        <li>\n          <span><mat-icon>web</mat-icon></span>\n          <span>Squiz Matrix CMS</span>\n        </li>\n        <li>\n          <span><mat-icon>web</mat-icon></span>\n          <span>Moodle LMS</span>\n        </li>\n        <li>\n          <span><mat-icon>storage</mat-icon></span>\n          <span>Redis</span>\n        </li>\n        <li>\n          <span><mat-icon>storage</mat-icon></span>\n          <span>SQL Server</span>\n        </li>\n        <li>\n          <span><mat-icon>storage</mat-icon></span>\n          <span>MySQL</span>\n        </li>\n        <li>\n          <span><mat-icon>storage</mat-icon></span>\n          <span>Postgres</span>\n        </li>\n      </ul>\n\n    </section>\n\n  </div>\n\n\n  <div class=\"section section--dark\">\n\n    <section class=\"section__inner section__inner--auto\">\n\n      <div class=\"landing__item landing__item--dark\">\n\n        <app-footer-contact></app-footer-contact>\n\n      </div>\n\n      <div class=\"landing__item landing__item--dark\">\n\n        <app-footer-social></app-footer-social>\n\n      </div>\n\n    </section>\n\n  </div>\n\n\n\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Raleway);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Libre+Franklin);", ""]);

// module
exports.push([module.i, ".landing__heading-wrapper {\n  text-align: center; }\n\n.landing__heading {\n  padding: 0;\n  margin: 0;\n  font-family: \"Raleway\", sans-serif;\n  color: #fff;\n  font-weight: normal; }\n  .landing__heading--one {\n    padding: 14px 0; }\n  .landing__heading--alt {\n    color: #121212; }\n\n.landing__banner {\n  position: relative;\n  background: #121212; }\n  .landing__banner:before {\n    background-image: url(/portfolio/assets/background.jpg);\n    background-size: cover;\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n    opacity: 0.4; }\n\n.landing__avatar {\n  background-image: url(/portfolio/assets/john-hughes.png);\n  background-size: cover;\n  width: 160px;\n  height: 160px;\n  border: solid 5px #fff;\n  border-radius: 100px; }\n\n.landing__social-icons {\n  list-style: none;\n  padding: 80px 0 0 0;\n  margin: 0;\n  width: 150px;\n  max-width: 900px;\n  margin-right: auto;\n  margin-left: auto; }\n  .landing__social-icons:after {\n    display: table;\n    clear: both;\n    content: ''; }\n  .landing__social-icons li {\n    width: calc((100% - 20px * 2) / 2);\n    margin-right: 20px;\n    float: left; }\n    .landing__social-icons li:nth-child(2n+2) {\n      margin-right: 0;\n      float: right; }\n\n.landing__social-icon {\n  display: block;\n  text-indent: -9999px;\n  width: 60px;\n  height: 60px;\n  background-size: 60px 60px;\n  fill: #fff; }\n  .landing__social-icon:hover {\n    transition: fill 0.3s;\n    fill: #005960; }\n\n.landing__item {\n  padding-bottom: 48px; }\n  .landing__item--dark {\n    color: #bbb;\n    font-family: \"Libre Franklin\", sans-serif;\n    line-height: 1.2em; }\n\n.landing__item-heading {\n  color: #bbb;\n  font-family: \"Raleway\", sans-serif;\n  text-align: center; }\n\n.landing__item-description {\n  text-align: center;\n  font-family: \"Libre Franklin\", sans-serif;\n  line-height: 1.8em;\n  color: #333; }\n  .landing__item-description a {\n    color: #bbb; }\n  .landing__item-description--alt {\n    color: #fff; }\n\n.landing__image {\n  width: 100%;\n  margin-top: 48px; }\n\n.landing__description {\n  text-align: center;\n  font-family: \"Libre Franklin\", sans-serif;\n  line-height: 1.8em;\n  color: #333;\n  padding-bottom: 48px; }\n  .landing__description a {\n    color: #bbb; }\n  .landing__description--alt {\n    color: #fff; }\n\n.landing__list {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n  .landing__list li {\n    font-family: \"Libre Franklin\", sans-serif;\n    color: #fff;\n    margin-bottom: 48px; }\n    .landing__list li span {\n      display: inline-block;\n      margin-left: 12px;\n      vertical-align: middle; }\n\n@media (min-width: 1024px) {\n  .landing__item {\n    width: calc((100% - 20px * 2) / 2);\n    margin-right: 20px;\n    float: left; }\n    .landing__item:nth-child(2n+2) {\n      margin-right: 0;\n      float: right; }\n  .landing__list {\n    max-width: 900px;\n    margin-right: auto;\n    margin-left: auto; }\n    .landing__list:after {\n      display: table;\n      clear: both;\n      content: ''; }\n    .landing__list li {\n      width: calc((100% - 20px * 2) / 3);\n      margin-right: 20px;\n      float: left; }\n      .landing__list li:nth-child(3n+3) {\n        margin-right: 0;\n        float: right; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */]
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCheckboxModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map