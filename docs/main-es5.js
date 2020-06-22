function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _comps_giraffes_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./comps/giraffes-administration/j-page/j-page.component */
    "./src/app/comps/giraffes-administration/j-page/j-page.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Giraffes';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-j-page");
        }
      },
      directives: [_comps_giraffes_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_1__["JPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _comps_giraffes_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comps/giraffes-administration/j-page/j-page.component */
    "./src/app/comps/giraffes-administration/j-page/j-page.component.ts");
    /* harmony import */


    var _comps_giraffes_administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comps/giraffes-administration/j-item/j-item.component */
    "./src/app/comps/giraffes-administration/j-item/j-item.component.ts");
    /* harmony import */


    var _comps_giraffes_administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/giraffes-administration/j-details/j-details.component */
    "./src/app/comps/giraffes-administration/j-details/j-details.component.ts");
    /* harmony import */


    var _comps_giraffes_administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/giraffes-administration/j-label-span/j-label-span.component */
    "./src/app/comps/giraffes-administration/j-label-span/j-label-span.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_giraffes_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__["JPageComponent"], _comps_giraffes_administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_4__["JItemComponent"], _comps_giraffes_administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_5__["JDetailsComponent"], _comps_giraffes_administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_6__["JLabelSpanComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_giraffes_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__["JPageComponent"], _comps_giraffes_administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_4__["JItemComponent"], _comps_giraffes_administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_5__["JDetailsComponent"], _comps_giraffes_administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_6__["JLabelSpanComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_comps_giraffes_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__["JPageComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _comps_giraffes_administration_j_page_j_page_component__WEBPACK_IMPORTED_MODULE_3__["JPageComponent"], _comps_giraffes_administration_j_item_j_item_component__WEBPACK_IMPORTED_MODULE_4__["JItemComponent"], _comps_giraffes_administration_j_details_j_details_component__WEBPACK_IMPORTED_MODULE_5__["JDetailsComponent"], _comps_giraffes_administration_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_6__["JLabelSpanComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/comps/giraffes-administration/j-details/j-details.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/comps/giraffes-administration/j-details/j-details.component.ts ***!
    \********************************************************************************/

  /*! exports provided: JDetailsComponent */

  /***/
  function srcAppCompsGiraffesAdministrationJDetailsJDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JDetailsComponent", function () {
      return JDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../j-label-span/j-label-span.component */
    "./src/app/comps/giraffes-administration/j-label-span/j-label-span.component.ts");

    function JDetailsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-j-label-span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-j-label-span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j-item" + (ctx_r0.j.isBossy ? "bossy" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jid", ctx_r0.j.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.j.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.j.height);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx_r0.j.color);
      }
    }

    var JDetailsComponent = /*#__PURE__*/function () {
      function JDetailsComponent() {
        _classCallCheck(this, JDetailsComponent);
      }

      _createClass(JDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JDetailsComponent;
    }();

    JDetailsComponent.ɵfac = function JDetailsComponent_Factory(t) {
      return new (t || JDetailsComponent)();
    };

    JDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JDetailsComponent,
      selectors: [["app-j-details"]],
      inputs: {
        j: "j"
      },
      decls: 5,
      vars: 1,
      consts: [[3, "class", 4, "ngIf"], [1, "mmm"], ["label", "height", 3, "val"], ["label", "color", 3, "val"]],
      template: function JDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "j-details works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JDetailsComponent_div_4_Template, 6, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.j);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_2__["JLabelSpanComponent"]],
      styles: ["p[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-weight: 900;\r\n    color:black;\r\n    \r\n}\r\n.mmm[_ngcontent-%COMP%]{\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWZmZXMtYWRtaW5pc3RyYXRpb24vai1kZXRhaWxzL2otZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXOztBQUVmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2lyYWZmZXMtYWRtaW5pc3RyYXRpb24vai1kZXRhaWxzL2otZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIFxyXG59XHJcbi5tbW17XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-j-details',
          templateUrl: './j-details.component.html',
          styleUrls: ['./j-details.component.css']
        }]
      }], function () {
        return [];
      }, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/giraffes-administration/j-item/j-item.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/comps/giraffes-administration/j-item/j-item.component.ts ***!
    \**************************************************************************/

  /*! exports provided: JItemComponent */

  /***/
  function srcAppCompsGiraffesAdministrationJItemJItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JItemComponent", function () {
      return JItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../j-label-span/j-label-span.component */
    "./src/app/comps/giraffes-administration/j-label-span/j-label-span.component.ts");

    var JItemComponent = /*#__PURE__*/function () {
      function JItemComponent() {
        _classCallCheck(this, JItemComponent);

        this.clickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dbclickNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.randomColorNote = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(JItemComponent, [{
        key: "clickNoteFn",
        value: function clickNoteFn() {
          console.log('clickNoteFn for jiraff' + this.j.name);
          this.clickNote.emit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            _this.randomColorNote.emit(_this.j.color);
          }, 1000 * this.j.id);
        }
      }, {
        key: "deleteNoteFn",
        value: function deleteNoteFn() {
          this.deleteNote.emit(this.j.id);
        }
      }]);

      return JItemComponent;
    }();

    JItemComponent.ɵfac = function JItemComponent_Factory(t) {
      return new (t || JItemComponent)();
    };

    JItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JItemComponent,
      selectors: [["app-j-item"]],
      inputs: {
        j: "j"
      },
      outputs: {
        clickNote: "clickNote",
        dbclickNote: "dbclickNote",
        deleteNote: "deleteNote",
        randomColorNote: "randomColorNote"
      },
      decls: 8,
      vars: 6,
      consts: [[3, "click", "dbclick"], ["label", "height", 3, "val"], ["label", "color", 3, "val"], [3, "click"]],
      template: function JItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItemComponent_Template_div_click_0_listener() {
            return ctx.clickNote.emit();
          })("dbclick", function JItemComponent_Template_div_dbclick_0_listener() {
            return ctx.dbclickNote.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-j-label-span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-j-label-span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JItemComponent_Template_button_click_6_listener() {
            return ctx.deleteNoteFn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("j-item" + (ctx.j.isBossy ? "bossy" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("jid", ctx.j.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.j.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.j.height);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("val", ctx.j.color);
        }
      },
      directives: [_j_label_span_j_label_span_component__WEBPACK_IMPORTED_MODULE_1__["JLabelSpanComponent"]],
      styles: [".j-item[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    border: 1px solid;\r\n    margin: 4px;\r\n}\r\n\r\n.j-item.bossy[_ngcontent-%COMP%]{\r\n    background-color: pink;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    background-color: blue;\r\n    border: black double 1mm;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWZmZXMtYWRtaW5pc3RyYXRpb24vai1pdGVtL2otaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2lyYWZmZXMtYWRtaW5pc3RyYXRpb24vai1pdGVtL2otaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmotaXRlbXtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbn1cclxuXHJcbi5qLWl0ZW0uYm9zc3l7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xyXG59XHJcbmgze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICAgIGJvcmRlcjogYmxhY2sgZG91YmxlIDFtbTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-j-item',
          templateUrl: './j-item.component.html',
          styleUrls: ['./j-item.component.css']
        }]
      }], null, {
        j: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        clickNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        dbclickNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        randomColorNote: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/giraffes-administration/j-label-span/j-label-span.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/comps/giraffes-administration/j-label-span/j-label-span.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: JLabelSpanComponent */

  /***/
  function srcAppCompsGiraffesAdministrationJLabelSpanJLabelSpanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JLabelSpanComponent", function () {
      return JLabelSpanComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var JLabelSpanComponent = /*#__PURE__*/function () {
      function JLabelSpanComponent() {
        _classCallCheck(this, JLabelSpanComponent);

        this.label = "";
        this.val = "";
      }

      _createClass(JLabelSpanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return JLabelSpanComponent;
    }();

    JLabelSpanComponent.ɵfac = function JLabelSpanComponent_Factory(t) {
      return new (t || JLabelSpanComponent)();
    };

    JLabelSpanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JLabelSpanComponent,
      selectors: [["app-j-label-span"]],
      inputs: {
        label: "label",
        val: "val"
      },
      decls: 5,
      vars: 2,
      template: function JLabelSpanComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.val);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dpcmFmZmVzLWFkbWluaXN0cmF0aW9uL2otbGFiZWwtc3Bhbi9qLWxhYmVsLXNwYW4uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JLabelSpanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-j-label-span',
          templateUrl: './j-label-span.component.html',
          styleUrls: ['./j-label-span.component.css']
        }]
      }], function () {
        return [];
      }, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        val: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/comps/giraffes-administration/j-page/j-page.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/comps/giraffes-administration/j-page/j-page.component.ts ***!
    \**************************************************************************/

  /*! exports provided: JPageComponent, jiraff */

  /***/
  function srcAppCompsGiraffesAdministrationJPageJPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JPageComponent", function () {
      return JPageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jiraff", function () {
      return jiraff;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    function JPageComponent_app_j_item_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-j-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickNote", function JPageComponent_app_j_item_7_Template_app_j_item_clickNote_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var jiraff_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.selectedj = jiraff_r1;
        })("deleteNote", function JPageComponent_app_j_item_7_Template_app_j_item_deleteNote_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4["delete"] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var jiraff_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", jiraff_r1);
      }
    }

    var JPageComponent = /*#__PURE__*/function () {
      function JPageComponent() {
        _classCallCheck(this, JPageComponent);

        this.jiraffsArray = [{
          id: 1,
          name: 'aaa',
          height: 3.55,
          color: 'blue',
          isBossy: false
        }, {
          id: 2,
          name: 'bbb',
          height: 4.44,
          color: 'BLACK',
          isBossy: false
        }, {
          id: 3,
          name: 'ccc',
          height: 6.44,
          color: 'RED',
          isBossy: true
        }, {
          id: 4,
          name: 'ddd',
          height: 3.77,
          color: 'GREEN',
          isBossy: false
        }, {
          id: 5,
          name: 'eee',
          height: 8.44,
          color: 'PURPLE',
          isBossy: true
        }, {
          id: 6,
          name: 'fff',
          height: 9.11,
          color: 'NAVY',
          isBossy: false
        }, {
          id: 7,
          name: 'ggg',
          height: 2.44,
          color: 'TEAL',
          isBossy: true
        }, {
          id: 8,
          name: 'hhh',
          height: 2.44,
          color: 'TEAL',
          isBossy: true
        }, {
          id: 9,
          name: 'iii',
          height: 2.44,
          color: 'TEAL',
          isBossy: false
        }, {
          id: 10,
          name: 'jjj',
          height: 2.44,
          color: 'TEAL',
          isBossy: true
        }, {
          id: 11,
          name: 'kkk',
          height: 2.44,
          color: 'TEAL',
          isBossy: false
        }, {
          id: 12,
          name: 'lll',
          height: 2.44,
          color: 'TEAL',
          isBossy: true
        }];
      }

      _createClass(JPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "deletej",
        value: function deletej(jid) {
          var index = this.jiraffsArray.findIndex(function (j) {
            return j.id == j.id;
          });
          this.jiraffsArray.splice(index, 1);
        }
      }]);

      return JPageComponent;
    }();

    JPageComponent.ɵfac = function JPageComponent_Factory(t) {
      return new (t || JPageComponent)();
    };

    JPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JPageComponent,
      selectors: [["app-j-page"]],
      decls: 9,
      vars: 4,
      consts: [[1, "all"], [2, "display", "flex"], [1, "force-jitem"], ["class", "j-item-as-list", 3, "j", "clickNote", "deleteNote", 4, "ngFor", "ngForOf"], [3, "j"], [1, "j-item-as-list", 3, "j", "clickNote", "deleteNote"]],
      template: function JPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "giraffes-administration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JPageComponent_app_j_item_7_Template, 1, 1, "app-j-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-j-details", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.white, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jiraffsArray);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("j", ctx.selectedj);
        }
      },
      styles: [".force-jitem[_ngcontent-%COMP%]{\r\n    width: 70vw;\r\n    \r\n    \r\n}\r\n.j-item-as-list[_ngcontent-%COMP%]{\r\n    display: list-item;\r\n    background-color: tomato;\r\n    text-align: center;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n    border: blue double 4mm;\r\n    text-align: center;\r\n\r\n}\r\n.all[_ngcontent-%COMP%] {\r\n    background-image:url('data:image/jpeg;base64,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');\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2lyYWZmZXMtYWRtaW5pc3RyYXRpb24vai1wYWdlL2otcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7O0FBR2Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksbWphQUFtamE7QUFDdmphIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvZ2lyYWZmZXMtYWRtaW5pc3RyYXRpb24vai1wYWdlL2otcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmNlLWppdGVte1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbi5qLWl0ZW0tYXMtbGlzdHtcclxuICAgIGRpc3BsYXk6IGxpc3QtaXRlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5oMXtcclxuICAgIGJvcmRlcjogYmx1ZSBkb3VibGUgNG1tO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG4uYWxsIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LC85ai80QUFRU2taSlJnQUJBUUFBQVFBQkFBRC8yd0NFQUFrR0J4TVNFaFVURXhJV0ZoVVhHUnNiR1JnWUdSZ2VIUm9hR2hzWEdob2ZIaG9kSFNnZ0dob2xHeDRZSWpFaEpTa3JMaTR1R2g4ek9ETXROeWd0TGlzQkNnb0tEZzBPRnhBUUZ5c2RIUjB0TFMwdExTMHRMUzB0S3kwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwckxTMHRMVGN0TFMwdExTMHRMUzB0TnkwM0xmL0FBQkVJQUtnQkxBTUJJZ0FDRVFFREVRSC94QUFiQUFBQkJRRUJBQUFBQUFBQUFBQUFBQUFFQUFJREJRWUJCLy9FQUR3UUFBRUNCQVFFQXdZRkF3UUNBd0FBQUFFQ0VRQURJVEVFRWtGUkJTSmhjUk9Ca1FZeW9iSEI4QlFqUXRIaEZWSmlCek55OFVPQ0Y1S2kvOFFBRndFQkFRRUJBQUFBQUFBQUFBQUFBQUFBQUFFQ0EvL0VBQjhSQVFFQkFRQUNBd0VCQVFBQUFBQUFBQUFCRVFJU0lRTVRNVUZSY2YvYUFBd0RBUUFDRVFNUkFEOEE5cGpzY2pzYmNpaFFvVUFvVFIyRkFObUZnV0QwdHYwaWx3R0RTNlpoU3FXRXJVY2hVNlJSa2sxWVVZaG52NlQ0N2pxRUJXUUdZVXM0VG83czUwc2ZTS2crMUNGSlpVdEpVdEtqbEJjVUpBU2RISWFKdUswcWw1MHFDRk1haCt0aTBUaU1EdzNqcFNoYVZrL21PTXdORWxTblVvZ1dZS0IvOVRXTmZ3U2FsVW9aVlptSkJPNmhjdDF2NXhKUWZIWVVLS2hRb1VLQVVLRkNnT3h5T3dvS1VLRkNnRkNoUW9CUW9VSW1BVUtGQ2dGQ0VjSmlPWlBBek8vS014b2JWOWJHQWxqa0ovakNnRkNoUW9CUnlPeHlLSTVzeHRDZXc4b2lrVDFLZDBaYWhuSWR0WEF0ckJNRFRaaEMwcENSemd1cWpncFpxYWhpZlB2QVVYOVpUSm16RXJDMzk5am9WTUFuWnFEV0wzRFloSkRsVlgxSStIVFVSbnBrK1hKbFo4U2txV1ZGQktrMWNsUkp2Vk96ZEJEc1I3VnlVa0JDQ3BJQVlqS0I1QTFzMExScG83SEk3QkNoQ0ZDZ093MVFjRWI3UTZGQVpyak9IbDRjS21vU1FjcUpaRGdwVWFoRHBPZ0tuSkhXOFlERnoxUzFBS0RLVE1JeWswb0FPN1ZOVEhxUEVwR2RVcEpKeWxTZ3BMQmxKS0NhbHFNUUc3eGp2YXhNcVhqVXpIQ215VEZKb2F0bEhVREt5bTNJTVk3NTFVM0RoaHdwS3BrdEtpU29ESUxxTHJITHFBMW1abFBXTEwyUW5ITW9xUHZFSUh1Z0hJZ05SaHpVVlhWakZEaWNmV1lvTVF5dFFWcDhRdVZCSURxT1VLY0JtSGxHZjRkT1dram1jSnprcEJOUnlaVlUzSm8xZmVpV3lEMnVGR1A5a3VMeTBxTW96RkZTMUVnS3NrNkovZDlRWTJFYmwxQ2hRb1VGS094eU93Q2hRb1VBb1VLRkFLRkNnVEZMV2toUUlLS0FoaTlhTy8zOElDVEhZa1MwS1dYb05BVEZEUDRuK1lGQ2VDRXBDa3BmS0ZGUkFyU3RNM2FMREZjYVJLbEpWT0dWUlM1UUtsMkpiNE5HWjRqeEZNNVpNaVdsd29GUlppcERvU1hCYnZsT2cyZ05ad2ZFbGNvRmFncFJLcWl4R1loTnVqUWZHTjltaXRKT1JLdkJLbEhsS1dCSkJVZERsRFpYQmR3elJiNGpqc3FRR0tGNzBGd1ZWVmZjbUNqK0w4UEdJbEtsRlJSbUZGSm9VblFnN3dMaGNVOHNPck9Vakt0VEZMbE5EUTJxOEJuMnBscVJtU0ZNb3NsZ1hMRmpvd2ZUWHRFMks0Z2tCQlpSOGFnb0F4YXIxN255Z1IzaEdHOFNkTXhSbUtVRmNpRWtFQkFRNFV3TnlWUFVYaTZpRERUMFVRRkJ3QlR1N2ZKWG9ZSWlsY01LRVk0RmFSRUl4d3dQak1UbHlzYjJHN0VQWG9DVDVSdzR4QktrdVFRUW5aeW9PRy9lS2gwN0ZBQXNSbUNTV1BZa2VWRDZRSmpVQUtNeHdWcFR5QjJxUVJjMHI2VWloNDdnVlRaMHp3c3hJQUNrays4cktTa3ZvQTdkNHNjRmlwWWxsU0ZoUlBLQWJEd3dYRzRTS21zVFZVL0V1RXJYS09aUk0zT29vSk5naGJIS1A3Qzd2b0FtTTZNTWtEOHhTczJySk5Lc3hleHBhTGM4UWx6WnN1Yk5JbCtGbVhsU1M1SUtXQkJOQVF4cHNZam5vbHpUNGk1a3BCVS92SlBNQVNBb005QzJ0YUdPZlVsTWE3RCswTXRVeVZLSU9lWWdLcFVCdzVEOU40c3BlSlNTb1A3ck8reER1K3pSanBQRjA0ZktrSlV0QmxoS0ZJU0VzQXJWUk9ZcUNTSDArY1RyNHN1ZjRtU1Vjd1NvVkp5bktFNW0wemhLajZqYU9talhDWUtWRmJRK1BOK0RjZThHYUNwZWFXQVNiZ1pLak1IcUtnRnVzYkRnL0dVejVSbTFBQ215aXBkcVd1NzJpVHBGeEhJeWZ0VjdWR1VsS1pJck1Eb21hVXFXR290V0N1Q2NhOFRENWlyTk1BR1lrZ005NjlLL0tMczNCYThTeGN1VWtsWkFTWGYrR3JtN1I1bnhpVDRzMmEwd2xidUFRMlpLU2ZXZ1NBQlNrYm5GNDZSTmxCVHB5cGNoOHBybHIxSlltZ0RraU1maWNSS0dPZVdoU2g3b1RxamxTQXhzRUFxVVcveHZVUk92eFN3T0JFMUttbGdFckNVeml1cVNGSlNVcUJETXhjVXNSQk9FNENwTTByVEpVb0JTZ29VQ1ZxQ2cybEVqM3JmbzZ4b01Kdy9Nb3FRcFA1aHp1UXhscElDQ0VrWEp5bS9VNkNMakRZRW9tR1lLdTdoeldvWTF1b0FNL1U5R2VJeXVCOW5aOHFjbFNWdkxRa0xTVGxDbEtDZVhNTlRYbWZyMGpiR2VrWlhJQlZRZFRFR0FucEtCekI2djBhNHJXaGl0d3VUeGltY3Q1b0FXS0VBQlNsaEtRZGhTbDNNV1RCZWlPdzByQUxFZ0c3ZHJ3K0NPUjJPUkRoc1dpWm15cWZLb3BQUWloRUZUd25qa0JjVG5yVGtDR2RTbXFDMW1xM1VpQU1Fd09ROVFIYnBBTS9qTWxFd3lsTEFVQVZFYkFPNytrVXMvSEk4Zk1yRU1tVVdLR3FWTVFTOXFNR0RSQmc4QWxTWmkxRlB2dUppZ0NvcEpUbXpkaXc3bFVGYTJUUFN0SVVrdURZeFRjYzQvNFdWTW9lSXNtb0FKQURWclp4UXNkSWk0b2laTWxvbFN4WmdwaUVpZ0lZSFhtS2FhdEdLeFhFNWtsYXFrdWtKTGdBK0d3REU2S0xNZFJYYUpiZ0o0alBMcnI0bXhKcWN4QkNtZGpRQ21tYUNPR1RjT2pEVEZUS0tjNUZCbnJ5VVNkQTVCUFU3Um1KbUpPWlNpOXN4Wm51WCtCUHdpTkpKVVN1cUVkWDdOdUk1ZVYzUnM4QnhaSXdrcEVxWmttaFRGbTVxbFpOZjA1cWJPcUJzWHhKUzVFcVd2MzBrai9JRk9iT2s5QU1wNnhtanhKS2toQlNNb0xnaEljRXU5ZGlEOEJ0RUV0eUZLVW9nZ0FKNjJkOWdCNitzVzkwYnZndUluNGlXdFVsRW9JUXBJeWtFbFNnQTRkd0VBM29OWXVzVmhQeXBabUFHWWdnRWl3UFNnWWRHanpyZ1hGWm1HbUJVc2pub1FhcHFhVTNBamVyeFhpelNReFQ0WUlJSlluTUFvZ2QzRzlERzUxc0l1OE5KUVdYbEdabWZXR2NWNGltU2tFa1ppcEtRQ1c5NHMvWUFFK1VaZmkvRkZ5RktUTFVFbVloSmZVTTZhSFMxTzVNUVR2YUl6VUFsT1FnWlYxZFNxbG1VMUhZZy84b3ZsQ3IxUEhpdkVlSExUbVF4NW51UTVOV1pzcmY4QTJURDUzRXBXY2MyUllkU2ttN0pDZ1VxcTEyWWRSR000cnhiTVNwQnlKTkFsZzRTd0ZldEs3c0lyRXp5c21odVhMaXUwYzc4cy9pTmhPNDdLOFk1eXJLQ29naW9CYTQyY1VvMXp2U2svckpYTjhSTWxLRGxJUlQrMnhIK1FvMmtVOHFjVlV5MEZTZGg5dERNZFBPYTVjSkpKSis3eG43YU5ML1U4eVVxOFlwbUxvb2pvVnVUMGJMU0tnNGp3MUhuekt6RWxUTTVlaGIwK01WY3BXUUNyNitaTHhKUG5uS2w2N25wb1BoR2IzVVBtejB6SndNeXFsS2M2UFd2VGN4TGlPS1RFRmc0LzRnSHBWd2EvUm9xa3kwcEpWZlk5VEJFdkVsdXV2cit6UmVlbGpSOEI0bE1RcndXUVFCVUtBcVF6RnlMMEFxMmthbndaZmhIRHJtSld1ZVZnRklGTXdvNEJGR1RXdFdqejByeUxORlpWNXBZbUpCNXlGQjI3VmNkQkJXQ2xTVWVHcFJaUm1Nb1ppTXJFNUNVays0U0hPenRIWG0yZWlyajJ0d2MyVGtUSWxESWxIaEEwenVRZ1pnU1NTaW9TQnU3M0VCcHhLc0ZLeUlDMGxSQm1PS1pna1VTZFE3bCt3MmlmaTNHRGlVelNwQ2prSXlCT1lCSUN3U1NyVng0ZC9KbzBnbUs4SkVxWkx6UzhvUGlKVUZha0FIcWtzNXRUeWpYcTBaM0ZjTW1Za2tLazVweGxoU1pqNVdCQ1ZWU1RRbFZINm55cThUd3BXSFF4NWxMVWVaTGdaTXdDZ0NvVVVTU09rZWttVVV6d29KQ2lxbWF4U2dBRUE3ak1EYnBFV0w0ZEtVbEMxVXlxQ25GMVpWQlFOTDFBUFo5NGVFTVVmQS9aYVVpUWM2QzZpcjlidUVxVjRhZzFEeWFpN3hTOEt3aWNOT1hOVW1oSnlrRk9WYWZFSm9BV1NNb1NHMGpYY2F4TXNBb3lMU0V5emxXT1VKS2hrR1cxV0xQbzRqQ2NTa2VETkpRdE9SQlNDcWxWcHFRMzl0RkZ2S005K29OemdFb2xKWGlGcVV6RUZBQUlTRXFOY29xNUxubzVnZVg3VlNzNzFSS0FjS0lvb3NWRU5WaTNodHZuTzBZN0I4ZG1TMDUwckwwU2NxYVpPWW1odVFTNzlJRzRsUFpJSW1CVDg2Y3daWDVnZXJpcVFvZi9BS1BlRTcyRFc0UGozSUp1VktRaGVVQmlwWlF2M1FtdFNUbFNleVN6UktFemNSTmx6OHl3RXFVRnBTeENFaHlGQ2xYR1dqRXU1MEVZV1ZPbUxBeW9VdGFTVzFBb0NHSTFERlhiL2pHajRYN1FLVGhwc3FTVTUvMEVsbXpCU21TRFVrSkFBNnVkbjFPdERmeGN6Rnp5bEN6K1lETElZMFRXcWc1QU9Vb2NEVVJxWk9NbnlwWXptVW9CSUtTRmN5a29BSytWcmxMbnBickhtMHFhSlNlWlR6VmdrTFNwWEpVT2xRYXFuQ3FnM3E1YUkxOFRCV0ZrWHB5a2dFV05RZVdqQm1zVEV2V0sxeXZiS2N0S3NwUWhTUVZBRkw1bVB1aXRLTnZYdkZDdmpCSzFMWUo4UldjaEJxRkRxejNLbWF6eFd6cEJWTDhUTlhRYWszcDN2RmJNUW9VVWNxaGNGM0VjNzNVZWhwOXRKZ1RtQUNsS0xaQ0NTR1M1Vm1Cc1ZhYUF4WEgybG5sWUptRG1BRlR5ODFpd3V5aWJWYW0wVW1ENG10QVpLaW1oQUkyY1A5SWhTdEp1cjlodDV3dmRWYVRjU2pOK1d3QkJjRWttcjFyNmpXc05HTVZ5VnRVc1dMT0RmVXNIcnEwVlNwcVVGMjZqcjU3UkRKblppRFlYdDJqRzM5R20vcmMwelZyT1lvVUF3SjBCY096T2FBYVhWdkZGajU2NWhkWkpKVVNUcTV2ODd4RE5tNkRNMFJ5MTM1bnJEcnJxanB1UUhQZmFrUmlhRW1vREFNNG9XYWx0WDFoeWlIOVhMNlZGb0hUaGpsVVUxYjd0Y3hZSThRdGpsQ3N3dUc2L2JlVVQ0V1lwbUJJZlc4QnkwZ3F5cUlHdlZuMkVYS1FsS2tsSVlhQnFsNGxvNUpsTEFkTnRqKzBhMzJMVHp6VC9BSUFQL3dDd052V00vaUo0STVVczlBSHJTZ2k5OWl3MHlhR3NnVzFkUSsvT0p4K2svVW50YUduU3pVZ29zT2lsL3Y4QUNLU2NvdnpDNGNCM1lEdFkzalRlMThqOHBDMmNoUlQxclVEdDczd2pIbFlCRDliRzM4eGU3N0s1aThwTE1mdnJFR0hXeVFTRk1YYjVlY1M1RWtseXptNTMwaUNkaUNkaXpzVzd0NXh6a1FSS25ocVBVOHBicjFodU1JSjVoVnZWckUrZW5TSzR6VGxEVXpmV0Q4SE1CU3RTM09RQUpyWG1kL0poRzRPcFNqTUZGMklxMzBIYUc1UzkrUTFZOS9oRVNRSEpKdFkvRnUxdlNKWml5T1lpaFpnek8vMDBoaW84V0U1UUE5M2Q3RDk3d0thMXpOMi83Z2pFSUQ1V0dWcWttejM3d0VsUjBDVzB2KzluZUVScThUeFZlUXBUSkpWbUUzeERxbjNIVWdVQkpvL1V2ZUxuaEp3MDdMSW5TejRpOHhSeWpsekFFRlNoK3FpaU94ZU1Udy9INVZKR2RRREZKS1JkTkNBeHV4RCtVYWpoZ2tybDVGelpvVTZnaGljN0tLbFpsZ0ZsQU9IeTE5NjlXN2M5YlZPa0pWS1V3UU9kWGhvUWtrODB0U1JjMGJNd2MwTm1qVDhBU3J3MUhPbEtYTkFNNldKSUlDditRSUlEL0dNdGdrRk9LbEJKUk1WSlNTK2RrcUZWSE1zM3lrN2FDbEltNHR4dnhwYVRtVWdwbVppSlJPdENsNkZ3RG9RNTlZM0JxUEdtb25HU3RTVWtKU3FVdHFMU0hTcEtnVFFna1dOZ0RBM0JjYk9LRUpSS3pBU3dTdHd6SlV0T1JKWmp5aFBkeVRHU3h2RTVtSUNjeEtpQ3ljekRsTGJKRlhmMUcwSDRUaVUvRGtKbEtTVUpRU3BLcWU4VkZKT1k4cHFIN1JQTWF6Mmo0WU1USzhGVXdvWmxoWS94cFhlOXZPUE84WmhaYVVyUW5uNXI3NVFYSjJycEJmRU9KWWlaT0V4YWtNelpVekVrZG1KYW9pbjRqeFJPVEw0V1hJNEpCSWNtb0pGczJuVUppZGRiQkJNbkVqd1V5MkpxQzlkKzdOU0FzVktVbVVBdVdVcnp2bkJjRk9VQUlhejVxdkRFejBxbUJRUE1vWC90M0dwb0FLd1ljUmtITUtzQWtkbXIzamh1VkR1RThVS0pxV1g0YVNHVVIxdlRXcnR0RnFuaUtaS3hORFowY3lRQUhvbWdKc3pINnhUeXdGRXJaeW9nSlUxaXhLbE5Za01HMmZwRXM4WlVKQUlWTVV6ZFdZTmV2d3ZHclZMSGhVOXBtVkdkVHFJU0ZnZ0JrczFqWk5uOTdyRStGU2N2NWlVNVVnQTBxYVBUMXYwRURUemtTRUJRQkYyQmNNejlUOHFRUGk4UnlabnpXSTArOVBqRTZ0b1B4ZU1jQllGYUFkaVFEWm1zSWh4aVN0bmVsbFBvZFBXS25CNGtaZVl1WCtHemQ0UFRPTHV0OHA3YkQwYmFNK05nbVVvSmxsTHVBWEIxNjlvSExrRXV3K2ZhRXRaTDVXTnFscjdmZTBRVHB5bFZzUUdhM3dqVUNtWTVSVGxJREFuUVgwdERKU3ptdTRhMi9sOVlaTm0xWXBiNFIyV2tVVHFmdG8wb2tURmN6T0FkTmhmN01RTG1rRjh0VGNmV0RNR0ZycHBycnEwVHFTRE1VRkNnWWxoM2NmZTBadEFPSFNWZ2dNVFUvQXY4SGcxR0ZZQXBlekJ6cnI1TzdmekVrckRvUUNwSVp4OUxIYWtMeFJ5bEpaVEhNOXl6NmJWOVl2bC9naXhDTGdNQ0E5QnY5aUpFckpCS21wYnovaUdCWUJyVUFLb2UwTlROQVNRcTUxdS9ZaU1Jam16U3JtWnd3R1VBazNxWTJQc09yTXVZWERoSHpVblNNVGgwcUtxRm5OdzFQaSswZW1leHZEUEJ3eWxrRE5NVWEvNHBjQi9QTjhJM3hQWkZvckRDZExYSlVXemloL3ROd2ZXUE9PSlNGeTFMUW9CMEZxVlppM3JSbzlPd2NzdThBKzBYczJjUWM4cGFVck4wcUhLb2pYcDFqZlhPeGJIbU9JQkxFRkpCTDhvYTIvV0NFcTVRU1FWa1BrYTFUcjJyNXdSeFRoczZWTnlMbFpDWHFLaHExQjFFRHpaYVFBdElVcGRRVzBvQUQydUdqbCtmcUJsWVZuNVNDSFpPMUhjRHl2SEV5UVNVRytWelVYR2I2RmpEdkZ5cEttT2diZDd1L25DbHVSVUpCb1FhdlNqZVlKOUlRUkJKU3BrODNLQnBVa01QcjZSUGlKMnFpN0FKN2xKMCs5WWd4TTBvL3dCc0VtZ0ttWm5wUWFtOWZTOFE0akFybUlBTHBJSlZVR3ViSzF2UDBNYTJBZng4eFBLb2g5Sy9kSWhXcFNTMWZNR0NFNFRKVE1YTjl2WGVGT1NVbHN3ODRtamlsaDJCSUwxT2xPbS9XRGhpMVNtRXRaQlVISmN1UmNPUWU5b3E1UzZ1V0JCY0hyRC9BTVd4YzFhL1IvaEFYNTRrSnk4eFRtV1FjOTJOQUJhcmRMUFdKTURNUjRVeFJRbGJGMEVnaFRVY1BRS0Q3amRvcStIY29VRXBxcGdXTE9rZld6OTRmUFNvaWlYRnNwRkFPa1hWSDQ3SG53d29CeFIyQW9ITjl0WWJJZWJtS2xxVXhvRFVLY2FueitjUUxKU2dwQm9ReEZHcFdBY0pOSUlTazZmelh2RTFGenhIQzVWWkNQZXMxaW9BS0hrVTlLVWdmaU9IbUxsZ295OHRDbFRBa3MxVldVR0F1Yk52RmtyRStKS2xyVUJ5RUpJMUNWWmc3LzI5ZXNWbU53V1JmZ0ZSR1htUWFzVWJFUFdqK2NkR2xYdzNoNm1Xc3BZSlVRNnFNek9MM3FMYkdKcGhUbTUxV2VpUTVJTzJ4YUlzZHhEL0FNZFN4cGFndnZYV0xuaDNCSmMrV0owdVlyS1ZKUXBCYk1na3BDeUZXVUVoVGdFQzhaOGRxWUFrNDRLQWx5WlRJL3lVNTZrd3lYTmN1UDBnbFBrMVd1QTFmT0JzWG53ODB5MUVLSXFDR0FJME5PMXJ3d2xpVjdnRUo3QVArL1lpTlhrTEZZak1TUkxMbXBKVWZuZDc2eE5oNWt0Y3RLVktvRTVTbGcvNnlDRDJQd2dLYmozY0JBSU5HL21CWktTWEFTRHErb0ZMYU93aVpvbi9BQXpLR2lUOGY1dEJzNllLaG1yVDBnQXVTaTVTS0E2MTNpZk5ZMVp4V0Y1TVNxVGxTNzloOVlpbHpDVGVwMU1OVnpNTGdXTHdWSW5wQVU2UlcyNGF0OTJmMUVURWNSTUJ1a0V3eWJoeTVZaXZXb01PbFR3cjNHQis2ZFllUlV1QUhEWFlzK3BzVHA1UVViZ1VlR3ljMTZrc0tlZmVKY1JQQVM1cVRkWC9BRkZmTG9ySWI2Q2xCUWhxMWllU3BCQmZzdzBJMStjWXNCRXc1a2dLdXdKNjByNTI5VEVTRjVTV0lmN3BEVVRBbWprcUh1OUhiNHhFQ1ZraE5RN2w5QThNQkhFcGFWSVROU0ZBS2FqT0FhK2dJczI4QjUwNVFseFY2c1dCbzlQTm9KbDRhYUI0WUxvTFBWcU8xdnUwR3laUUNRNkVXZG0va2lIWGNrUzJIOEw0U2tyU1ZGbUJKWWFBUDZ4NnhrQ1phRUpBQVNrQnZLUEtjTnpxVExKWk14U1VNTmxrQS9PUFVNU1dVWTE4ZDJhYyt4TXRZU0lqbjRyS1VrYXY4R2lGWnpNMFJZd0RrNlA5STdSVlYvcUhNVDRFdVlkRkVlb2NmS1BQMDR5VzdoeDUvS05oN2VxZkNodjB6VS9GSzQ4ODhMWjcxL2lPSHl6YXpWc3Fjbm9hdlVoNlBDVGlnWFhja05UYnBBTWlXUU15bWZjVlBTb2prK2VwaTZxYTBzUHBISEVFTHhpUTRMbzYwK0VRVE1STWRMTEpBclc4RFRFdVF4TkhmcjVSUExsZzgyWUpHZzYvU0xnTThUTU15MkJGUTErdDRjTWhzaW5YTjlJQ3lBRXFVU1hvK3A4b1F4aEZBaFRkekU5L3cxVHlHY2hUdnVOZnZlT3pKZ1NDQnZRV2dWUzNPc0VKVG1hMzFqdldscGhad1dXREEzdWErZTBHSm5rSnE1WWF1MnRCc0lCd01oS1NIU3JtdDlYZUNNU29LU3dMVWF2bTBaVXpFa3FTNExFaWcwNndMTG5yUWt1bXV0ZnN3Y25EQWtCeWRONlBTMGQ0amdpbE9aTEM5TnlQc1JZaG5DT0lPdklUeUtCQkJKTGZ0WVFWamNReU1wZDBaa2cxb0N4YnRRUlU0WWwrWkNzdy9UclN0WGc3aUUwSHhDWFlsWkxYWnczb0k2UnFNOFM2aVhJdkc2OWhjUXJ3SjBwTkZnNWt2WjFweWgreTBvTVpoTXFWcUZLTnRtK0g3eG9QWUtzekVaUVFsTWxUUHZuUTBWRlB4SGpSeEdRcmxBTFRRa1hLZG1PeDlLeEN2RkFPQWtFRXZXNy9BRzFJZHhXU1JQbTNHV1pNYnNGcXRFS3BwSVlseHNmS0xhcmkwSlczaGtaZ0NTQ0sxTmF2V0FzelVmU0RjTktSbnpBa0hhOVlyc1JKVkxXVWtVdStoZ2czREtZR3R4V3hEYXVJZE14QklaYWdsU1RRTlFqU2xvbXdNcGJwSmExRzFGcTdRTGo1U3l0UVlBT3cvanBFb2xsVDNsa01BWHFmUGFJNU04a0tTUTVOZzFqdkhFUzFKekpYTGQ5WDI2eFljUHdZRmNwMG9UdmZ2RXR4RUhEOENWVlp4czltZXZha0dxUjRpaURRc0ttN2lENU1oS2VXV1N6N3dwaG9TN2JqOXFSeDY3OXBxSldBY0EwekpZUHVBekgxMWdTZktDU0hWem5TdjIwU3lKbjZnZEd1QVJvVzMwZ2hTa3BMRlFKcDNIbkdQT3A1SWtZY0JzNFlhS0RFUktFWkE2VzJja0dtN3d5YXJNbDh3Wit4YllEV0s3R3FDWFM1RGdhV2I1UkpiMGFzRGpXRHM1MXNEL01EVDhZVS93QzJXeTFZNnY4QU9LcEUwNTJZbUNFekN4YVVLQ2hQN2E5NDE0SmdxWHhOU1dWUUVFR2xLaXNleDQ2Y0NDUlkxSGFQRWhMS09xaTdwSURlc2VvK3p1SzhiQlNxdVVqdzFkMGN2eVkrY2RlUFV4dmhkY01uaFV0OWkzMStvZ1RINHdDWTJyQmhDNEtsaE1IK1ErVVZYRGxpY3RjMXJ6Rmdka3FLQjhFeHZXODlnUGJUSG1YSmxTLzFMV1NmL1VmdWZoR004VXFZS3pDaEhhRGZhN2lJbllnMGRFczVCNUhtUHI4aEZUTG51b3NhYld0MWpuMTdyRkVtV1F6cUJMRmlCVW1JMFM4bktvWmdTNnFpSWlFMUpVUE1ta054RXBBRHZVNkg0RUM4VEVHZmpaZFd6SjJIS1FPcjZ4Q3NxSmVXaFJCTlNRWXJDT254aVg4WW9NeEhrS1JQRC9DTGZLVTNKRzdNZmlZRlVtVWFsYW4rK3NWTTJhczFKODRpemY1Ulo4Wml4d3VFY01wd1dzems5dDRzWk9EQ1FuTWxRYTdhajkvcEJFbEF6QVhzRS9JZkdDRkxGYTlqdTFxYVVGNDNXakpLVXVDNUlGTFAwOG9iTWtPU1JaalRmNlF5WmlLOHZyWUU5dG9tVkxVRUQ3MjlJelRVdkM4SXBpUlJWUjJmWHZlREpFb0JLblB1NnRUTVFhMTJZUVR3N0NISUxnMkxhRTNMblJLVzgxUkJqOE90U2dCekFWQThoYzZreHFRWi9pWXpxT1JUbG5ldFJZMXZFdUhtRHhWNXJPVzlQM2cweU1wT25ZVWZxWUZ3UkhqekFkRm4wSUkrc2Fpd3laTHpFdFF1OGJIL0FFMTRTQUpzeFg2aWxIZG5VZm1tTXJpQXhVbGdGT0NEME40OUE5aTVnVGhwYkQzd3BUOVN0UVB3QTlJU014VGUxZnNRdnhUTWtjeVZJTG9CR1lLYXJBM0J2U3Q0eENjQ0FGWFNTYXVOQTNvOGV6NGpGa01UUmlHN3hndmJOS1B4QlVrVVdnTElEWEpVQ3c4Z2U1TVdyV2N3M0MwcWNwTldwRGNnVW5Jcm5EMDc5SW53YUNubXV4Y1V1SFllZnloNjhMbFVibEpOQzFkbzUyMk11SXdpaUF3RmdHTHV3cDYwaVJPQjNxZGEyN1JMN3RRc3Rva20wSldKSk5EWFcxS2ZHT043dW9hTUpMU0dVb2t2UU42ZWNTQ2Jsb0d2OTl1MFYwN0V0VnlTYlc3UUdNV29ROGVxTDZiTk5nM1ZuK3pBMHdESUNDV0YwaC9uRmVtYW9saSs0aWFTVjV1WXFHMUg2VmllT0dHVFphU2trQWl1Nzk0bHdLQ0FWRWpLMm9oOGlWTXpmN1k3QWk1NnhMK0JXdDh5Z21yQVhwM2NWdkMyUkVLRmsxS1ZVRkIrbC9MV0JGeWNoSlVXZjlKdjZ3ZXZoWlQ3aXFoaXhJK0RHRmhlRjVTNmxrazNUY2ZHMEoxQUd1VG1xR1pxc1E1cGJyQ1RJZGtxY0ViNWZMV0xmd2htb2FnVW9LRHlFS2NsRXdCNWVZVnFSdmZxS3hQc0ZVdEMwMElvYnFiNmlOZjdBcnlvbVNub1NGanFmZFY4TXNVNW1vUVQyYWxRRytSaVZHS3lFZUdzMnNCdjFBaXo1TXF5dHJPbmVGSm56SGJLRkVIcUV2OEFOb29PQXp2QndLVmlwWlNoMUpVb2oxTGVzQXplSXJVa29Vb2xLcmduNk0yZ2lYaUUwSERvbHkrVmlrTXhiS3grTHRIVDdvMzVNVXVRYWdrZ3U1MWZzWWltWVlWWUc5TnhGK2poeVM5VmV1dXRHaURFNE5jdGpMNXgxb3dqTStUV05VaVdTV1VIaHNvcGRUamR1bmFKWjR1VkpaeTJoRDBnT1loWDZudGRyZVVkWjdhUFZKVWhRVTRLVFhTbzZpT1RFb0xaRUU3MXRCR0R4S1R5cnFFc3oxOG4yRVRyd01zS2NUVXBEdmxIeTdRMUZVdVNTN2xoM2diS3FMbWVtV2YxSEwwdEFreVNnbmxCSTNqVXF5dGxOa0pRQ3JLd0ZCM0xnSHlaUjlJcnBjb2toUGsrMmtYS3ltWUZITXljL3dBQm1wMmdWZUlDVnRUZXpQMzZRdGxLaC9wb0Z6WS9BUmZjT3dxU2N5aTB0SWQzL1ZvL1NBcEtzeVFYclhtb2ZKb3NNUGhrK0VvRWxXWlExL3RIMUorVU9ab2xrNGp4RnNra0pzb0VCbXRlN3Y4QUdJNVJDZVN5aGYxMWlGUVpKQ2FIVWt1KzFZaU9MVW1wQ1RyeTNmdHJHc1U2ZGhnRktGMkpjZHY1K1VVWmxBWWhTbkFEVkI5SGZ1UkY1K0tKWTJGeWJFdm9SNnhXY1N3NVVVc0xpcldKMml5TEVQRThLVlpWQlh1bXA3R2orWHlqUjhNeDRsWWVVUi80eWtFZHpYNm1LbGk0WWc2TEhiVi9JUkxNQ1FnSkRPbzJ0UjZWMXNXN0hlRkkydkY1b3lvS2YxS1NQcjhnWXlmRzVCVlB6WlhBU0E3aXdiVHpNRXorSVRDa0p6UGxWVGxzUi9CTVZhd3BTcWwzSlB4ckdPdFNtVGdrSmNNZkxycEE4NmNsWE01S1U2blQ5NGVaWlVjb2NaVG8wZFVtclZXVmZBQnROUDVqbGVPcXpsVms5WUpkenBVUkhMS1NUY2VZNjlvdU1SZ1hTR1dFay9FZjlRSE00R3prcUpmeStzV2ZFbVVPckR1ZmRTMjZsVjlCSFVjUDBaOTJOTy8zdEJNakRwYlkxb1FXR3pIV0IxOG51cklKT2dldjdRc3FySmltampvTlA0aWJ4QmNrZVpjeFNUcGlram1VL2Y1d09aekRUMUpqajRVeGV6OFdnRU14SFNucTNuQWt3bFlOUXc3dVlxaGlDeCsrOFJJeFZXZGozTWFueEdMWXprSkJ6RTU5d0tnZjVmM0dPakdCVEFCYmJ0UTk0cXFtcFU1M2VKaklXRWx6eTdBL1NMOWNQRllyeDZRQ1VycHFQazNuQWt2R0ExemFHNHBXSytaTGY3dTBSVjBqVStPTDRqaGowYUlZalVFdzlIRUVQVE0rN3hWakNyTkdFTkVoUVV4cEd2cmhpNG1jVERseXNoaFpoWDBnaVRqa3F5MEl6T3hKMnU0cEZOTWtLQ2N4SEtDM25FYTBVRCtRNkdNMzRvbDVhR1p4R1dLWm43T0t4SC9WZzlIR2w0b3hoMHZtejEyaWRLd2tPMVJhTS9YRXhmeThlbFdoQjlmcEVjNUtKckpVQ0dORzM5SXE1UEZnRFZGZHgrME9QRVhzNDdDTStOaTRkUGtTa2hzcW50WDdwQVdNbUZBb2dBSHppeWw0MEZOem1yN3gvaXNDY1N6VGtCTHBER29vSDdHTjgyNzdNQkx4RXB5VlppU3pnRU5IVVRwUkZBMEFKd3F3U01wSmRtQStXOFRmaEd1VkpPeEVkTWd0TVBqQS9NZWdCTUZpYm1QdmVtOFFUK0JxSkpDcWdhN3RwdkJIRHVDS0xHcnRSUFcwV1JxRGNPVldCb2IxQStsNHRNTGlnT1Z5S0MrdHJRR2poVXd5d0N5VG5JZFg5ckpLZk44MGRsWUlpaEtpUlRPNENYTmFVTGl3cjFqU2pmeFkyMWV6UkIrSkJKSlRhSzlNMVlYbElDMnFjdW5TdEhGUFdKek5ObXZZZlNMcWlqTVFyVmdmcHIwMWpxank4cFBmNytrUVRDVklTcGxFVUxuUjZnMHMwUllrS2xqTW9VMXZSNkF0MHBEVEVpU0x2MDcyOVIrOEx4aTZCb0I2Q3Z4ZHZKNGZncEdaM0FjTlhvZGZYcEVPTm5nS0pTQ3pzTEFsSTFiMVBtSWVRc3BGaWFXYzl1M2xFSGkzcXdlaGY3N3hVcHhtWndrblM0ME85STZNVkxRT2RURVhkOS9qRTBXVXREUHpBYUJ2TjY2L3hBMkt4T1FoU2JWMXJlbHV3aWxYeGRCSlNnaGp2OVhzWUR4dU1WUm02RlB6NmVjVkZxdmplV21RUDZ3MytyTFVIYWxiVU5lOW9ySlFLdzZDZ3pOUlpUZko0Rm1URjBERjMyN1JsbmFzcG1QS2c0Q3ZPM3J2RUs4VXAzSUFCOVlqbVlraHMyYk1BelVGbi9tSk1QalVxRmdndlVrT09ubkVyS1E0MldCVkpJRGFtLzBoczNGSkxPaHFnZ01JV0t3Uzh3WUpJVlVmVHloMHJoSm1ObVVFa2xoVUYydlFSTWl1emNTbFZBbFQ5cnhQZ2NHbGFPVjBsOVErOVNOSWRpT0hvVFF6MUFnV1lVMERSRE1tQ1NsazV5NGR5R0ZMOTR6L0FNQjY4R3JLVStJRDBGdXZhSXVkTEpPdGpvZk9LeFdPZi94cXJZMVk2d3p4NWpONFpHeEpOSDFENlJaemY2c0hUcFlTeFAzcERaUUEwVGU5YVhnYVhpVktCR1RhdGR3UFFtQ1o2VklvVWtGaFE2dnFPa2F4VHZFSVU5ZmhwQi9BOEo0a3d6WnVYS21XcFRPNWNCa2cwMUp0Rk9sWW82U3d1UTlmb0E4YWoyY3cwbFVwYzdFWmtwSklUS1NEekJQNmowZXc2UEZ3Z0hqTW9maEZMUktKVDRwV1ZzQXdVb2hLUnFxNGRuQXRBM3REZ3Z3d2tCYm5QTGNnQUJqUncrclBHcjQ3eEREek1JWkNjNVhrUVJ5c09VZ2dkRFEra2Q5b3BVbkdCQVpSeUZUbGlMNWFpbFJReGY0dGVhUzhRVXFKdWpYempoeEJ2cGFORHhMMlRXUDlwRXhUMUFDRDBxKzE0QVQ3S1k0cEg1QzJPNlNQT3NQRFdWUW5HdGRMeDFlTlNmZHpBL0J2bkdqVC9wOWk4cjVIVUdZQ29OYTEzaDJHL3dCT01Zb09VSlJzNnZnMzNhTlRpTGpJenNZb2k1cERwZUlVQTVCSTNOZlFSc2YvQUl5eEtpMlpDVTljMWZRUllvLzB5VWtmbVQwMUhLd05DMnhOUkZ2TVhHTFZ4Um15cVYvUHJENWZFMHR6SnpIY2dSdDEvd0Ntc2hnVlloZ0UxeWloSTFxUzBMLzQ2a0RYRXFlcmdKakhoRThScTVCSjU1ZVJpNGR5K3ZWZzhPVXBNc096N0VFME5udFo0VUtNMWFxZ3Vlc094U25xRFZ0UlNEQm1DZXVwcWZnMUEya0tGR2pGbmhKUUFCOEp0eXpQQkUvQkpVbHpsSWV6ZGR0WVVLTWdYRWNJTGZscXlCbjVnNmF1TGFlclhwRUdHazVUNGM4QUVrTXRKZEtuMFVTQXgveGhRb3Y2b1JIQ2xJbW1RTDh1VXVHQ0NGVXF4SkJDNmJOV0pjYjdPeXBkWmluVm1aS2N4cjFZYUFYZTNXRkNpME93M3Mwa0JjeGJsS3c0SDlyQU1TbmU3UHZ2QTJGOWljS3RGVlRTMnZLa2x6WW42bU9Rb2ZpTGVYN0pZWDljdkttMzZTWElZa0VPQlRhR2oySXdBVTNpRlNqWU9XOVJyQ2hSTkU2UFozRHlnQUFCUXRsQVZicTd1NWhrL3dCbk1FNmxWS3EwTEJPWXNEUjl5TzBLRkFVa3ZoWW16MHlTanhFRndraG5DUUhJY1dVQUl2WjNzMWc1S0VvS1FKWU5TdGlTVDhpK3ZXRkNqUDVFRDRMZ3VGU3NJQ0hLbTk0bFFBSUxjcjB0ODRQbllPVExXRXBrRzdMVUVnY3RuQWF6dFNGQ2h6Ny9BRWhZbkJTVUt6SWtMV2JmN1k2TURRTjZ3TlB6TFlIQnJiOVFWbEk2dFY0NUNqZU5ZRDQ3aHpNRFNwU2tLQ1dCS2szNnBzS1VwVzBVNmVEenl0SzVrbk5sQXNyM2lMdSs5YldoUW9xWU14LzRxYWxTRTRkS0VLQlNSUTBvMVdETWF4Vko0Sml3QWtxMWNGZy91NVFITlFBTk55OTRVS0tvdzhNeHFFcFNHeXN6SkNCUVdGdTlZSWxZN2lLRTVBRUZqZklnNk5kdmoxTUtGRVJDUmphOGlodTFBVDZ3VGdzUmlwWmRUb0RFSkNxaEpMdVdKcldGQ2lVcTMvck9QS1FRSmFtdVFGQnpUUU93aCtDOW84UWtxTTZVVnV3Q1VnZ0RlcEQ2Nm1GQ2dETVA3VXpGS3lxa0ZBRlFjd3NPZ2dtYjdRSnNseWRNcnY4QUpvVUtKcHBtSzQ1TlJsZVVDOTZrTTI0SXNlbTBRbzR1Z2tyS3dsUW9BTXpCaGJRTTdtRkNob3R2eGdXbk9oaWJGcWFWcHFZQW1ZMG10UjBLUy93cENoUlZmLy9aJyk7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-j-page',
          templateUrl: './j-page.component.html',
          styleUrls: ['./j-page.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();

    var jiraff = function jiraff() {
      _classCallCheck(this, jiraff);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Desktop\Giraffes\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map