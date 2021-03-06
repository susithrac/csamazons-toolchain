(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/susithra/hackathon/ibmwitcsamazons/CarbonFootPrint/src/main.ts */"zUnb");


/***/ }),

/***/ "1efy":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/area/area.component.ts ***!
  \*******************************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-angular */ "kAVD");




highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
class AreaComponent {
    constructor() {
        this.updateFromInput = false;
        this.chartOptions = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Carbon Footprint'
            },
            subtitle: {
                text: 'Your annual emissions'
            },
            tooltip: {
                split: true,
                valueSuffix: ' Kgs'
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: []
        };
        this.chartConstructor = "chart";
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        const self = this;
        // saving chart reference using chart callback
        this.chartCallback = chart => {
            self.chart = chart;
        };
    }
    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
    ngOnChanges(change) {
        if (change.data.currentValue && change.data.currentValue.length > 0) {
            const self = this, chart = this.chart;
            chart.showLoading();
            self.updateFromInput = true;
            self.chartOptions.series = change.data.currentValue;
            chart.hideLoading();
        }
    }
}
AreaComponent.??fac = function AreaComponent_Factory(t) { return new (t || AreaComponent)(); };
AreaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: AreaComponent, selectors: [["app-widget-area"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["????NgOnChangesFeature"]], decls: 1, vars: 6, consts: [[2, "width", "100%", "height", "400px", "display", "block", 3, "Highcharts", "options", "update", "constructorType", "callbackFunction", "oneToOne", "updateChange"]], template: function AreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "highcharts-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("updateChange", function AreaComponent_Template_highcharts_chart_updateChange_0_listener($event) { return ctx.updateFromInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions)("update", ctx.updateFromInput)("constructorType", ctx.chartConstructor)("callbackFunction", ctx.chartCallback)("oneToOne", true);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_3__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmVhLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "58pj":
/*!********************************************!*\
  !*** ./src/app/travel/travel.component.ts ***!
  \********************************************/
/*! exports provided: TravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelComponent", function() { return TravelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class TravelComponent {
    constructor() { }
    ngOnInit() {
    }
}
TravelComponent.??fac = function TravelComponent_Factory(t) { return new (t || TravelComponent)(); };
TravelComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TravelComponent, selectors: [["app-travel"]], decls: 38, vars: 0, consts: [[1, "container"], [1, "title-bg-color"], [1, "example-button-row"], ["mat-button", "", "mat-raised-button", "", "a", "", "routerLink", "/articles", "color", "primary"]], template: function TravelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Because natural gas and renewable energy are increasingly used to generate power, transportation has become the largest source of CO2 emissions. Each year, the average car emits roughly five tonnes of CO2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Greenhouse gas (GHG) emissions account for around 29% of total U.S. GHG emissions, making it the greatest source of carbon footprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Carbon dioxide, the greenhouse gas, is released into the atmosphere when fossil fuels like gasoline and diesel are burned. Carbon dioxide (CO2) and other greenhouse gases such as methane (CH4), nitrous oxide (N2O), and hydrofluorocarbons (HFCs) are causing the Earth's atmosphere to warm, causing climate change.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Changing how we travel around can help us save a lot of money on your carbon footprint.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Steps to reduce carbon footprint while travelling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Drive less. Walk, take public transportation, carpool, rideshare or bike to your destination when possible. This not only reduces CO2 emissions, it also lessens traffic congestion and the idling of engines that accompanies it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Take care of your car. Keeping your tires properly inflated can increase your fuel efficiency by three percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Use traffic apps to help avoid getting stuck in traffic jams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "On longer trips, turn on the cruise control, which can save gas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Use less air conditioning while you drive, even when the weather is hot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "If you\u2019re shopping for a new car, consider purchasing a hybrid or electric vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Avoid flying if possible; on shorter trips, driving may emit fewer greenhouse gases");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Fly nonstop since landings and takeoffs use more fuel and produce more emissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "If you can\u2019t avoid flying, offset the carbon emissions of your travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".title-bg-color[_ngcontent-%COMP%] {\n  background: lightslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RyYXZlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FBQ0oiLCJmaWxlIjoidHJhdmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWJnLWNvbG9ye1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0c2xhdGVncmV5O1xufSJdfQ== */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _models_catagory_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/catagory.model */ "rFz8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/common.service */ "fvNU");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");

















function HomeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](1, "mat-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function HomeComponent_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const month_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", month_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](month_r3.title);
} }
function HomeComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const year_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", year_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](year_r4);
} }
class HomeComponent {
    constructor(commonService, _snackBar) {
        this.commonService = commonService;
        this._snackBar = _snackBar;
        this.catagory = new _models_catagory_model__WEBPACK_IMPORTED_MODULE_0__["Catagory"]();
        this.step = 0;
        this.isLoading = false;
        this.monthList = [
            { title: "JAN", value: "1" },
            { title: "FEB", value: "2" },
            { title: "MAR", value: "3" },
            { title: "APR", value: "4" },
            { title: "MAY", value: "5" },
            { title: "JUN", value: "6" },
            { title: "JUL", value: "7" },
            { title: "AUG", value: "8" },
            { title: "SEP", value: "9" },
            { title: "OCT", value: "10" },
            { title: "NOV", value: "11" },
            { title: "DEC", value: "12" }
        ];
        this.yearList = [
            "2019", "2020", "2021"
        ];
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
    ngOnInit() {
        // this.catagory.month="1";
        // this.catagory.year="2021"
    }
    save() {
        this.isLoading = true;
        this.commonService.GetUserData.subscribe(user => this.user = user);
        debugger;
        this.catagory._id = "csamazon:" + this.user.email;
        this.catagory.name = this.user.email;
        this.commonService.addCarbonData(this.catagory)
            .subscribe(data => {
            console.log(data);
        });
        setTimeout(() => {
            this.isLoading = false;
            this._snackBar.open("Record has been saved successfully", "Close", { duration: 3000 });
            this.catagory = new _models_catagory_model__WEBPACK_IMPORTED_MODULE_0__["Catagory"]();
        }, 3000);
    }
}
HomeComponent.??fac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
HomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HomeComponent, selectors: [["app-home"]], inputs: { displayState: "displayState", userName: "userName" }, decls: 167, vars: 23, consts: [["class", "loader-container", 4, "ngIf"], [1, "title-bg-color"], ["appearance", "fill", 1, "marginright"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill"], [1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], [1, "spacer"], ["matInput", "", "type", "number", "min", "0", 3, "ngModel", "ngModelChange"], [1, "unit"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], [1, "example-button-row"], ["mat-button", "", "mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", "mat-raised-button", "", "color", "accent"], [1, "loader-container"], [2, "top", "50%", "left", "50%"], [3, "value"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, HomeComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Calculate Carbon Emissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Select Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function HomeComponent_Template_mat_select_valueChange_7_listener($event) { return ctx.catagory.month = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, HomeComponent_mat_option_8_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Select Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("valueChange", function HomeComponent_Template_mat_select_valueChange_12_listener($event) { return ctx.catagory.year = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, HomeComponent_mat_option_13_Template, 2, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-accordion", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "mat-expansion-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("opened", function HomeComponent_Template_mat_expansion_panel_opened_15_listener() { return ctx.setStep(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, " Housing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Electricity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_28_listener($event) { return ctx.catagory.housing.electricity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "kWh");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](32, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "Fuel Oil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_35_listener($event) { return ctx.catagory.housing.fuelOil = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "litres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](41, "LPG");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_42_listener($event) { return ctx.catagory.housing.lPG = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](44, "litres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](46, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](48, "Waste");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_49_listener($event) { return ctx.catagory.housing.waste = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Water");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](56, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_56_listener($event) { return ctx.catagory.housing.water = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](58, "litres");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "mat-action-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeComponent_Template_button_click_60_listener() { return ctx.nextStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](61, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](62, "mat-expansion-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("opened", function HomeComponent_Template_mat_expansion_panel_opened_62_listener() { return ctx.setStep(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, " Travel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](67, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](69, "flight_takeoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](70, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](72, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](74, "Vehicle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_75_listener($event) { return ctx.catagory.travel.vehicle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](76, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](77, "km");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](78, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](82, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_82_listener($event) { return ctx.catagory.travel.bus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](84, "km");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Taxi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_89_listener($event) { return ctx.catagory.travel.taxi = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "km");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](94, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](95, "Rail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_96_listener($event) { return ctx.catagory.travel.rail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](97, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](98, "km");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](100, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](102, "Flying");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_103_listener($event) { return ctx.catagory.travel.flying = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105, "km");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "mat-action-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeComponent_Template_button_click_107_listener() { return ctx.prevStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeComponent_Template_button_click_109_listener() { return ctx.nextStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](110, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](111, "mat-expansion-panel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("opened", function HomeComponent_Template_mat_expansion_panel_opened_111_listener() { return ctx.setStep(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](114, " Food ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](116, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](117, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](118, "fastfood");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](123, "White Meat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_124_listener($event) { return ctx.catagory.food.whiteMeat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "kCal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](130, "Dairy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](131, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_131_listener($event) { return ctx.catagory.food.dairy = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](132, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](133, "kCal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](136, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](137, "Vegetables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](138, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_138_listener($event) { return ctx.catagory.food.vegetables = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](140, "kCal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](142, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](143, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](144, "Fruit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_145_listener($event) { return ctx.catagory.food.fruit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "kCal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](148, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](149, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](151, "Grains");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_152_listener($event) { return ctx.catagory.food.grains = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](153, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](154, "kCal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](155, "mat-action-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeComponent_Template_button_click_156_listener() { return ctx.prevStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](157, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](158, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeComponent_Template_button_click_158_listener() { return ctx.nextStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](159, "End");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](160, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](161, "mat-action-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](163, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HomeComponent_Template_button_click_163_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](164, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](165, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](166, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.catagory.month);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.monthList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("value", ctx.catagory.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.yearList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", ctx.step === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.housing.electricity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.housing.fuelOil);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.housing.lPG);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.housing.waste);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.housing.water);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", ctx.step === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.travel.vehicle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.travel.bus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.travel.taxi);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.travel.rail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.travel.flying);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("expanded", ctx.step === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.food.whiteMeat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.food.dairy);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.food.vegetables);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.food.fruit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx.catagory.food.grains);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelDescription"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-button-row[_ngcontent-%COMP%]   .mat-button-base[_ngcontent-%COMP%] {\n  margin: 8px 8px 8px 0;\n}\n\n.title-bg-color[_ngcontent-%COMP%] {\n  background: lightslategrey;\n  margin-bottom: 30px;\n}\n\n.unit[_ngcontent-%COMP%] {\n  color: grey;\n  margin-left: 5px;\n}\n\n.loader-container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: black;\n  opacity: 0.4;\n  z-index: 99;\n}\n\n.marginright[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNJLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSwwQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUE7RUFFRSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFFRSxrQkFBQTtBQUFGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5leGFtcGxlLWJ1dHRvbi1yb3cgLm1hdC1idXR0b24tYmFzZSB7XG4gICAgbWFyZ2luOiA4cHggOHB4IDhweCAwO1xuICB9XG4gIC50aXRsZS1iZy1jb2xvcntcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JleTtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udW5pdFxue1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmxvYWRlci1jb250YWluZXJcbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgb3BhY2l0eTogMC40O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLm1hcmdpbnJpZ2h0XG57XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "BAfr":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/user.model */ "Tj/N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/common.service */ "fvNU");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







class SidebarComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.user = new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
    }
    ngOnInit() {
        this.commonService.GetUserData.subscribe(user => this.user = user);
    }
    callfun(obj) {
        var noimg = "assets/usericon.jpg";
        obj.src = noimg;
    }
}
SidebarComponent.??fac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](src_app_Services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"])); };
SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 24, vars: 3, consts: [[1, "profile-card"], [1, "header"], ["onerror", "this.onerror=null;this.src='assets/usericon.jpg'", "alt", "No image found", 1, "thumbnail-image", 3, "src"], ["matSubheader", ""], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/home"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/dashboard"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/articles"], ["mat-list-item", "", "routerLinkActive", "list-item-active", "routerLink", "/team"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](17, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "people");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, " Team ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user.Name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("src", ctx.user.pic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["[_nghost-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 20px 20px 20px;\n}\n[_nghost-%COMP%]   .profile-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFRTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDTiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAubWF0LWljb24ge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5wcm9maWxlLWNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4O1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "CykS":
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/pie/pie.component.ts ***!
  \*****************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");



class PieComponent {
    constructor() {
        this.data = [];
        this.chartTitle = 'Title';
        this.updateFromInput = false;
        this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: this.chartTitle
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: []
        };
        this.chartConstructor = "chart";
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        const self = this;
        // saving chart reference using chart callback
        this.chartCallback = chart => {
            self.chart = chart;
        };
    }
    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
    ngOnChanges(change) {
        if (change.chartTitle) {
            this.chartTitle = change.chartTitle.currentValue;
        }
        if (change.data.currentValue && change.data.currentValue.length > 0) {
            const self = this, chart = this.chart;
            chart.showLoading();
            self.updateFromInput = true;
            self.chartOptions.title.text = this.chartTitle;
            self.chartOptions.series = [
                {
                    name: 'Brands',
                    colorByPoint: true,
                    data: change.data.currentValue,
                    type: undefined
                }
            ];
            chart.hideLoading();
        }
        console.log(change);
    }
}
PieComponent.??fac = function PieComponent_Factory(t) { return new (t || PieComponent)(); };
PieComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: PieComponent, selectors: [["app-widget-pie"]], inputs: { data: "data", chartTitle: "chartTitle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]], decls: 1, vars: 6, consts: [[2, "width", "100%", "display", "block", 3, "Highcharts", "options", "update", "constructorType", "callbackFunction", "oneToOne", "updateChange"]], template: function PieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "highcharts-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("updateChange", function PieComponent_Template_highcharts_chart_updateChange_0_listener($event) { return ctx.updateFromInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions)("update", ctx.updateFromInput)("constructorType", ctx.chartConstructor)("callbackFunction", ctx.chartCallback)("oneToOne", true);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "J7Q4":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ibmcloud_appid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ibmcloud-appid-js */ "Nj2v");
/* harmony import */ var ibmcloud_appid_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ibmcloud_appid_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "Tj/N");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/common.service */ "fvNU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










class WelcomeComponent {
    constructor(commonService, router) {
        this.commonService = commonService;
        this.router = router;
        this.style = 'show';
        this.buttonDisplay = 'show';
        this.errorStyle = 'hide';
        this.errorMessage = '';
        this.appid = new ibmcloud_appid_js__WEBPACK_IMPORTED_MODULE_2___default.a();
        this.changeState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userData = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.appid.init({
                    clientId: '38a66370-ceb3-4878-89ab-57cf3a3a7984',
                    "discoveryEndpoint": "https://eu-gb.appid.cloud.ibm.com/oauth/v4/cbd1c84c-fa8e-494e-92fc-898d621f6be8/.well-known/openid-configuration"
                });
            }
            catch (e) {
                this.errorMessage = e.message;
                this.errorStyle = 'show';
            }
        });
    }
    onLoginClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.buttonDisplay = 'hide';
                const tokens = yield this.appid.signin();
                const decodeIDTokens = tokens.idTokenPayload;
                //console.log(decodeIDTokens.email);
                //const userName = 'Hi ' + decodeIDTokens.name + ', Congratulations!';
                this.style = 'hide';
                this.changeState.emit({ userName: decodeIDTokens.name, email: decodeIDTokens.email, picture: decodeIDTokens.picture });
                this.userData.Name = decodeIDTokens.name;
                this.userData.email = decodeIDTokens.email;
                this.userData.pic = decodeIDTokens.picture;
                this.commonService.SetUser(this.userData);
                this.router.navigate(['/home']);
            }
            catch (e) {
                this.errorMessage = e.message;
                this.errorStyle = 'show';
                this.buttonDisplay = 'show';
            }
        });
    }
}
WelcomeComponent.??fac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_Services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
WelcomeComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], outputs: { changeState: "changeState" }, decls: 13, vars: 4, consts: [["id", "welcome", 2, "border", "solid 1px", "width", "100%", "height", "100%", "background", "url('../../assets/forestbridge.jpg') no-repeat", "background-size", "100% 100%", 3, "ngClass"], [1, "welcome-display"], ["alt", "App ID Logo", "src", "../../assets/reduce-your-carbon-footprint-logo.png", 1, "logo-icon", "top-animation"], [2, "margin-top", "40px"], [1, "title-class", "top-animation", "multicolortext", 2, "line-height", "1em"], ["id", "login", "mat-button", "", "mat-raised-button", "", "color", "accent", 3, "ngClass", "click"], ["id", "error", 3, "ngClass"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, " TRACK YOUR CARBON FOOTPRINT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function WelcomeComponent_Template_button_click_9_listener() { return ctx.onLoginClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.buttonDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.errorStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](ctx.errorMessage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".top-animation[_ngcontent-%COMP%]\n{\n    position: relative; \n    -webkit-animation: animatetop 0.9s; \n            animation: animatetop 0.9s; \n    margin-top: 30px;\n}\n.title-class[_ngcontent-%COMP%]{\n    font-size: 39px\n}\n.multicolortext[_ngcontent-%COMP%] {\n    -webkit-background-clip: text;\n    -moz-background-clip: text;\n    background-clip: text;\n    color: white;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFlBQVk7RUFDZCIsImZpbGUiOiJ3ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLWFuaW1hdGlvblxue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gICAgYW5pbWF0aW9uOiBhbmltYXRldG9wIDAuOXM7IFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG4udGl0bGUtY2xhc3N7XG4gICAgZm9udC1zaXplOiAzOXB4XG59XG4ubXVsdGljb2xvcnRleHQge1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuXG4iXX0= */"] });


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/sidebar/sidebar.component */ "BAfr");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ "aF9I");










class LandingComponent {
    constructor(router) {
        this.router = router;
        this.title = 'dashboard';
        this.sideBarOpen = true;
        this.src = "";
    }
    ngOnInit() {
    }
    sideBarToggler() {
        if (this.router.url == '/' || this.router.url == '/welcome') {
            this.sideBarOpen = false;
        }
        else
            this.sideBarOpen = !this.sideBarOpen;
    }
    toggleSideBar() {
        //this.toggleSideBarForMe.emit();
        this.sideBarToggler();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
    hideSidebar() {
        this.sideBarOpen = false;
    }
    logOut() {
        this.sideBarOpen = false;
        this.router.navigate(['/']);
    }
}
LandingComponent.??fac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LandingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], inputs: { displayState: "displayState", userName: "userName" }, decls: 19, vars: 2, consts: [[3, "ngClass"], ["color", "primary"], ["mat-icon-button", "", 3, "click"], [1, "spacer"], [1, "pointer-cursor", 3, "click"], ["mode", "side", 3, "opened"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LandingComponent_Template_button_click_3_listener() { return ctx.toggleSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " Carbon Footprint ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function LandingComponent_Template_span_click_9_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-drawer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.displayState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("opened", ctx.sideBarOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawer"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.pointer-cursor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0YiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubWF0LWRyYXdlciB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1kcmF3ZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ucG9pbnRlci1jdXJzb3J7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ "LvIC":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.??fac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "title-bg-color"], [1, "example-button-row"], ["mat-button", "", "mat-raised-button", "", "a", "", "routerLink", "/articles", "color", "primary"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Households are accountable for nearly three quarters of global carbon emissions. A carbon footprint is the entire quantity of greenhouse gas emissions produced by a product or service during its manufacture, use, and disposal. It comprises carbon dioxide, the most prevalent gas released by humans, as well as other gases such as methane, fluorinated gases and nitrous oxide, all of which trap heat in the atmosphere and contribute to global warming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The majority of a person's carbon footprint is usually created by housing, transportation, food, variety of effects on the environment, personal carbon footprint is influenced by how our house is designed and how we live in it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "A household's carbon footprint can be divided into two types. The first are direct emissions from residential energy consumption (for example, gas for space, water heating and electricity for lighting and powering appliances and gadgets). Second, are the embedded emissions. Embedded emissions from supply chains (both domestic and international) account for the majority of Western households' carbon footprints (approximately 60\u201370%).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "A typical U.S. household has a carbon footprint of 48 metric tons CO2e/yr.The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Steps to reduce carbon footprint at home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Recycle paper and steel and tin cans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Before throwing away, ask: Can I re-use or repair this? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Donate working electronics. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Don\u2019t put non-recyclables in the recycling bin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Insulate your home. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Plant shrubs and trees around your home. This is an easy, and pretty, insulation fix, especially for older homes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Check the energy-efficiency rating for your windows, doors and skylights. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Install a cool roof. This is made of a reflective material which redirects light away from your house, keeping it cool. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".title-bg-color[_ngcontent-%COMP%] {\n  background: lightslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtYmctY29sb3J7XG4gICAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyZXk7XG59Il19 */"] });


/***/ }),

/***/ "MzDm":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ServiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
ServiceComponent.??fac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(); };
ServiceComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "title-bg-color"], [1, "example-button-row"], ["mat-button", "", "mat-raised-button", "", "a", "", "routerLink", "/articles", "color", "primary"]], template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Households are accountable for nearly three quarters of global carbon emissions. A carbon footprint is the entire quantity of greenhouse gas emissions produced by a product or service during its manufacture, use, and disposal. It comprises carbon dioxide, the most prevalent gas released by humans, as well as other gases such as methane, fluorinated gases and nitrous oxide, all of which trap heat in the atmosphere and contribute to global warming.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The majority of a person's carbon footprint is usually created by housing, transportation, food, variety of effects on the environment, personal carbon footprint is influenced by how our house is designed and how we live in it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "A household's carbon footprint can be divided into two types. The first are direct emissions from residential energy consumption (for example, gas for space, water heating and electricity for lighting and powering appliances and gadgets). Second, are the embedded emissions. Embedded emissions from supply chains (both domestic and international) account for the majority of Western households' carbon footprints (approximately 60\u201370%).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "A typical U.S. household has a carbon footprint of 48 metric tons CO2e/yr.The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Steps to reduce carbon footprint at home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Recycle paper and steel and tin cans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Before throwing away, ask: Can I re-use or repair this? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Donate working electronics. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Don\u2019t put non-recyclables in the recycling bin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Insulate your home. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Plant shrubs and trees around your home. This is an easy, and pretty, insulation fix, especially for older homes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Check the energy-efficiency rating for your windows, doors and skylights. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Install a cool roof. This is made of a reflective material which redirects light away from your house, keeping it cool. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".title-bg-color[_ngcontent-%COMP%] {\n  background: lightslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKIiwiZmlsZSI6InNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtYmctY29sb3J7XG4gICAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyZXk7XG59Il19 */"] });


/***/ }),

/***/ "NcCX":
/*!************************************************!*\
  !*** ./src/app/planting/planting.component.ts ***!
  \************************************************/
/*! exports provided: PlantingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantingComponent", function() { return PlantingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class PlantingComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlantingComponent.??fac = function PlantingComponent_Factory(t) { return new (t || PlantingComponent)(); };
PlantingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PlantingComponent, selectors: [["app-planting"]], decls: 26, vars: 0, consts: [[1, "container"], [1, "title-bg-color"], [1, "example-button-row"], ["mat-button", "", "mat-raised-button", "", "a", "", "routerLink", "/articles", "color", "primary"]], template: function PlantingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Planting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Planting billions of trees across the world is one of the biggest and cheapest ways of taking CO2 out of the atmosphere to tackle the climate crisis, according to scientists, who have made the first calculation of how many more trees could be planted without encroaching on crop land or urban areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Growing a garden is not only beneficial for us, but it is also good for the environment since it minimises the number of miles it takes to bring food from the farm to our kitchen table, lowering the carbon footprint of our food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Planting trees aids in the storage of carbon from the atmosphere in the soil.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Steps to reduce carbon footprint with Planting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Dig a pond - ponds increase garden biodiversity and help prevent flooding by slowing down the flow of water in heavy rains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Planting a tree");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Grow plants from seed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Prepare compost at home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".title-bg-color[_ngcontent-%COMP%] {\n  background: lightslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BsYW50aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSiIsImZpbGUiOiJwbGFudGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1iZy1jb2xvcntcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JleTtcbn0iXX0= */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "aZ8m");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "aF9I");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "BAfr");
/* harmony import */ var _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/area/area.component */ "1efy");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/card/card.component */ "SHZb");
/* harmony import */ var _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/pie/pie.component */ "CykS");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _widgets_bar_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgets/bar/bar.component */ "am/Q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class SharedModule {
}
SharedModule.??fac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineNgModule"]({ type: SharedModule });
SharedModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            // FlexLayoutModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["????setNgModuleScope"](SharedModule, { declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_5__["AreaComponent"],
        _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"],
        _widgets_bar_bar_component__WEBPACK_IMPORTED_MODULE_15__["BarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        // FlexLayoutModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_6__["HighchartsChartModule"]], exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"],
        _widgets_area_area_component__WEBPACK_IMPORTED_MODULE_5__["AreaComponent"],
        _widgets_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"],
        _widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"],
        _widgets_bar_bar_component__WEBPACK_IMPORTED_MODULE_15__["BarComponent"]] }); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/common.service */ "fvNU");
/* harmony import */ var _shared_widgets_area_area_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/widgets/area/area.component */ "1efy");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/widgets/pie/pie.component */ "CykS");
/* harmony import */ var _shared_widgets_bar_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/widgets/bar/bar.component */ "am/Q");










const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
class DashboardComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.bigChart = [];
        this.cards = [];
        this.pieChartHousing = [];
        this.pieChartTravel = [];
        this.pieChartFood = [];
        this.barChartData = [];
        this.pieChartHousingTitle = "Housing";
        this.pieChartTravelTitle = "Travel";
        this.pieChartFoodTitle = "Foods";
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_0__["MatTableDataSource"](ELEMENT_DATA);
        this.bigChart = [];
        this.cards = [];
        this.pieChartHousing = [];
        this.pieChartTravel = [];
        this.pieChartFood = [];
        this.barChartData = [];
    }
    ngOnInit() {
        this.commonService.GetUserData.subscribe(user => this.user = user);
        this.getbigChartData();
        this.getPieChartHousing();
        this.getPieChartFood();
        this.getPieChartTravel();
        this.getBarChart();
    }
    getbigChartData() {
        this.commonService.getMainchatData(this.user.email).subscribe((data) => this.bigChart = data);
    }
    getPieChartFood() {
        this.commonService.getPieChartFood(this.user.email).subscribe((data) => this.pieChartFood = data);
    }
    getPieChartHousing() {
        this.commonService.getPieChartHousing(this.user.email).subscribe((data) => this.pieChartHousing = data);
    }
    getPieChartTravel() {
        this.commonService.getPieChartTravel(this.user.email).subscribe((data) => this.pieChartTravel = data);
    }
    getBarChart() {
        this.commonService.getBarChart(this.user.email).subscribe((data) => {
            this.barChartData = [
                {
                    name: 'Current Emission',
                    data: [814, 841, 3714]
                },
                {
                    name: 'Future Emission',
                    data: [693, 785, 2414]
                }
            ];
        });
    }
}
DashboardComponent.??fac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_Services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"])); };
DashboardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????viewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????loadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 16, vars: 8, consts: [[3, "data"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px", 1, "stats-cards"], ["fxFlex", "40"], [3, "data", "chartTitle"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", "fxLayoutGap", "20px"], ["fxFlex", "100"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "app-widget-area", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](7, "app-widget-pie", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](9, "app-widget-pie", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](11, "app-widget-pie", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "app-widget-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("data", ctx.bigChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("data", ctx.pieChartHousing)("chartTitle", ctx.pieChartHousingTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("data", ctx.pieChartTravel)("chartTitle", ctx.pieChartTravelTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("data", ctx.pieChartFood)("chartTitle", ctx.pieChartFoodTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("data", ctx.barChartData);
    } }, directives: [_shared_widgets_area_area_component__WEBPACK_IMPORTED_MODULE_4__["AreaComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _shared_widgets_pie_pie_component__WEBPACK_IMPORTED_MODULE_8__["PieComponent"], _shared_widgets_bar_bar_component__WEBPACK_IMPORTED_MODULE_9__["BarComponent"]], styles: [".stats-cards[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxXQUFBO0FBREYiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRzLWNhcmRzIHtcbiAgLm1hdC1jYXJkIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "SHZb":
/*!*******************************************************!*\
  !*** ./src/app/shared/widgets/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts/modules/exporting */ "AxlJ");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts-angular */ "kAVD");





class CardComponent {
    constructor() {
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        this.chartOptions = {};
        this.label = '';
        this.total = '';
        this.percentage = '';
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: 'area',
                backgroundColor: null,
                borderWidth: 0,
                margin: [2, 2, 2, 2],
                height: 60
            },
            title: {
                text: null
            },
            subtitle: {
                text: null
            },
            tooltip: {
                split: true,
                outside: true
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false,
            },
            xAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            yAxis: {
                labels: {
                    enabled: false,
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickOptions: []
            },
            series: [{
                    data: this.data
                }]
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_1___default()(highcharts__WEBPACK_IMPORTED_MODULE_0__);
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
}
CardComponent.??fac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: CardComponent, selectors: [["app-widget-card"]], inputs: { label: "label", total: "total", percentage: "percentage", data: "data" }, decls: 14, vars: 5, consts: [[1, "text"], [1, "total"], ["color", "primary"], [1, "description"], [1, "widget"], [2, "width", "100%", "height", "60px", "display", "block", 3, "Highcharts", "options"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, " of target");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](13, "highcharts-chart", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", ctx.percentage, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], highcharts_angular__WEBPACK_IMPORTED_MODULE_4__["HighchartsChartComponent"]], styles: ["h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.total[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.mat-icon[_ngcontent-%COMP%], .description[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 2em;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px;\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQUNGIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnRvdGFsIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5tYXQtaWNvbixcbi5kZXNjcmlwdGlvbiB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5tYXQtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB0b3A6IDVweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");





function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "app-welcome", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("changeState", function AppComponent_ng_container_0_Template_app_welcome_changeState_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r2.onChangeState($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-landing", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("userName", "Susi");
} }
class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'dashboard';
        this.sideBarOpen = true;
        this.src = "";
        this.isShowmaster = false;
        this.userNameStatus = '';
    }
    ngOnInit() {
        this.isShowmaster = false;
    }
    onChangeState(value) {
        console.log("Sush");
        console.log(value.email);
        this.isShowmaster = true;
        this.userNameStatus = value.userName;
        this.src = value.picture;
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [2, "width", "100%", "height", "100%", 3, "changeState"], [3, "userName"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, AppComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AppComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx.isShowmaster);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isShowmaster);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7QUFFSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBtYXQtZHJhd2VyIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cbiAgXG4gIG1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIG1hdC1kcmF3ZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! highcharts-angular */ "kAVD");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _artical_artical_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./artical/artical.component */ "cJI2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _housing_housing_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./housing/housing.component */ "m6jn");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./travel/travel.component */ "58pj");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./food/food.component */ "jLrB");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _planting_planting_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./planting/planting.component */ "NcCX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/core */ "fXoL");









































class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_40__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_40__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_13__["HighchartsChartModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_40__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
        _artical_artical_component__WEBPACK_IMPORTED_MODULE_19__["ArticalComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_27__["WelcomeComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_29__["LandingComponent"],
        _housing_housing_component__WEBPACK_IMPORTED_MODULE_30__["HousingComponent"],
        _travel_travel_component__WEBPACK_IMPORTED_MODULE_31__["TravelComponent"],
        _product_product_component__WEBPACK_IMPORTED_MODULE_32__["ProductComponent"],
        _food_food_component__WEBPACK_IMPORTED_MODULE_33__["FoodComponent"],
        _service_service_component__WEBPACK_IMPORTED_MODULE_34__["ServiceComponent"],
        _planting_planting_component__WEBPACK_IMPORTED_MODULE_35__["PlantingComponent"],
        _team_team_component__WEBPACK_IMPORTED_MODULE_39__["TeamComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_38__["MatSelectModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
        highcharts_angular__WEBPACK_IMPORTED_MODULE_13__["HighchartsChartModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_36__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]] }); })();


/***/ }),

/***/ "aF9I":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.??fac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " \u00A9 All rights reserved 2021\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: ["footer[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "aZ8m":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HeaderComponent {
    constructor() {
        this.toggleSideBarForMe = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    toggleSideBar() {
        this.toggleSideBarForMe.emit();
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { toggleSideBarForMe: "toggleSideBarForMe" }, decls: 14, vars: 0, consts: [["color", "primary"], ["mat-icon-button", "", 3, "click"], [1, "spacer"], ["mat-button", "", "routerLink", "/register"], ["mat-button", "", "routerLink", "/login"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleSideBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Carbon Footprint ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuIl19 */"] });


/***/ }),

/***/ "am/Q":
/*!*****************************************************!*\
  !*** ./src/app/shared/widgets/bar/bar.component.ts ***!
  \*****************************************************/
/*! exports provided: BarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarComponent", function() { return BarComponent; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "6n/F");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-angular */ "kAVD");



class BarComponent {
    constructor() {
        this.updateFromInput = false;
        this.chartOptions = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Future analysis Carbon Footprint'
            },
            subtitle: {
                text: 'Your can reduce your emissions'
            },
            xAxis: {
                categories: ['Housing', 'Traves', 'Food'],
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Co2 emmisions (millions)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                split: true,
                valueSuffix: ' Kgs'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_0__["defaultOptions"].legend.backgroundColor || '#FFFFFF',
                shadow: true
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true,
            },
            series: []
        };
        this.chartConstructor = "chart";
        this.data = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
        const self = this;
        // saving chart reference using chart callback
        this.chartCallback = chart => {
            self.chart = chart;
        };
    }
    ngOnInit() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    }
    ngOnChanges(change) {
        if (change.data.currentValue && change.data.currentValue.length > 0) {
            const self = this, chart = this.chart;
            chart.showLoading();
            self.updateFromInput = true;
            self.chartOptions.series = change.data.currentValue;
            chart.hideLoading();
        }
        console.log(change);
    }
}
BarComponent.??fac = function BarComponent_Factory(t) { return new (t || BarComponent)(); };
BarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: BarComponent, selectors: [["app-widget-bar"]], inputs: { data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]], decls: 1, vars: 6, consts: [[2, "width", "100%", "height", "350px", "display", "block", 3, "Highcharts", "options", "update", "constructorType", "callbackFunction", "oneToOne", "updateChange"]], template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "highcharts-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("updateChange", function BarComponent_Template_highcharts_chart_updateChange_0_listener($event) { return ctx.updateFromInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("Highcharts", ctx.Highcharts)("options", ctx.chartOptions)("update", ctx.updateFromInput)("constructorType", ctx.chartConstructor)("callbackFunction", ctx.chartCallback)("oneToOne", true);
    } }, directives: [highcharts_angular__WEBPACK_IMPORTED_MODULE_2__["HighchartsChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "cJI2":
/*!**********************************************!*\
  !*** ./src/app/artical/artical.component.ts ***!
  \**********************************************/
/*! exports provided: ArticalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticalComponent", function() { return ArticalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ArticalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticalComponent.??fac = function ArticalComponent_Factory(t) { return new (t || ArticalComponent)(); };
ArticalComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ArticalComponent, selectors: [["app-artical"]], inputs: { displayState: "displayState", userName: "userName", imageSrc: "imageSrc" }, decls: 40, vars: 0, consts: [[1, "title-bg-color"], ["cols", "3", "rowHeight", "2:1", 1, "articleMargin"], [1, "item"], ["routerLink", "/housing"], [1, "home"], [1, "caption"], ["routerLink", "/travel"], [1, "plane"], ["routerLink", "/product"], [1, "cart"], ["routerLink", "/food"], [1, "food"], ["routerLink", "/service"], [1, "hospital"], ["routerLink", "/planting"], [1, "plant"]], template: function ArticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Carbon Emissions Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Housing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "mat-grid-tile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Planting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridTile"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".title-bg-color[_ngcontent-%COMP%] {\n  background: lightslategrey;\n}\n\n.img-width[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\ndiv.item[_ngcontent-%COMP%] {\n  \n  vertical-align: top;\n  display: inline-block;\n  \n  text-align: center;\n  \n  width: 120px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  background-color: grey;\n}\n\n.caption[_ngcontent-%COMP%] {\n  \n  display: block;\n  padding-top: 10%;\n}\n\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 1s ease;\n}\n\n.item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n  transition: 1s ease;\n}\n\n.articleMargin[_ngcontent-%COMP%] {\n  margin-top: 5%;\n}\n\n.plane[_ngcontent-%COMP%] {\n  background: url(\"/assets/plane.png\") no-repeat;\n  background-size: cover;\n  padding-bottom: 82%;\n}\n\n.plane[_ngcontent-%COMP%]:hover {\n  background: url(\"/assets/plane-hover.png\") no-repeat;\n  background-size: cover;\n}\n\n.plant[_ngcontent-%COMP%] {\n  background: url(\"/assets/plant.png\") no-repeat;\n  background-size: cover;\n  padding-bottom: 82%;\n}\n\n.plant[_ngcontent-%COMP%]:hover {\n  background: url(\"/assets/plant-hover.png\") no-repeat;\n  background-size: cover;\n}\n\n.cart[_ngcontent-%COMP%] {\n  background: url(\"/assets/cart.png\") no-repeat;\n  background-size: cover;\n  padding-bottom: 82%;\n}\n\n.cart[_ngcontent-%COMP%]:hover {\n  background: url(\"/assets/cart-hover.png\") no-repeat;\n  background-size: cover;\n}\n\n.hospital[_ngcontent-%COMP%] {\n  background: url(\"/assets/hospital.png\") no-repeat;\n  background-size: cover;\n  padding-bottom: 82%;\n}\n\n.hospital[_ngcontent-%COMP%]:hover {\n  background: url(\"/assets/hospital-hover.png\") no-repeat;\n  background-size: cover;\n}\n\n.food[_ngcontent-%COMP%] {\n  background: url(\"/assets/food.png\") no-repeat;\n  background-size: cover;\n  padding-bottom: 82%;\n}\n\n.food[_ngcontent-%COMP%]:hover {\n  background: url(\"/assets/food-hover.png\") no-repeat;\n  background-size: cover;\n}\n\n.home[_ngcontent-%COMP%] {\n  background: url(\"/assets/home.png\") no-repeat;\n  background-size: cover;\n  padding-bottom: 82%;\n}\n\n.home[_ngcontent-%COMP%]:hover {\n  background: url(\"/assets/home-hover.png\") no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FydGljYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksNERBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLHNFQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFBO0VBQ0ksMERBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBQUk7RUFHQSxxQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBQUk7RUFDSSxjQUFBO0FBR1I7O0FBQUk7RUFDSSw4Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFHUjs7QUFESTtFQUNJLG9EQUFBO0VBQ0Esc0JBQUE7QUFJUjs7QUFGSTtFQUNJLDhDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUtSOztBQUhJO0VBQ0ksb0RBQUE7RUFDQSxzQkFBQTtBQU1SOztBQUpJO0VBQ0ksNkNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBT1I7O0FBTEk7RUFDSSxtREFBQTtFQUNBLHNCQUFBO0FBUVI7O0FBTkk7RUFDSSxpREFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFTUjs7QUFQSTtFQUNJLHVEQUFBO0VBQ0Esc0JBQUE7QUFVUjs7QUFSSTtFQUNJLDZDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVdSOztBQVRJO0VBQ0ksbURBQUE7RUFDQSxzQkFBQTtBQVlSOztBQVZJO0VBQ0ksNkNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBYVI7O0FBWEk7RUFDSSxtREFBQTtFQUNBLHNCQUFBO0FBY1IiLCJmaWxlIjoiYXJ0aWNhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1iZy1jb2xvcntcbiAgICBiYWNrZ3JvdW5kOiBsaWdodHNsYXRlZ3JleTtcbn1cblxuLmltZy13aWR0aHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbmRpdi5pdGVtIHtcbiAgICAvKiBUbyBjb3JyZWN0bHkgYWxpZ24gaW1hZ2UsIHJlZ2FyZGxlc3Mgb2YgY29udGVudCBoZWlnaHQ6ICovXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgLyogVG8gaG9yaXpvbnRhbGx5IGNlbnRlciBpbWFnZXMgYW5kIGNhcHRpb24gKi9cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLyogVGhlIHdpZHRoIG9mIHRoZSBjb250YWluZXIgYWxzbyBpbXBsaWVzIG1hcmdpbiBhcm91bmQgdGhlIGltYWdlcy4gKi9cbiAgICB3aWR0aDogMTIwcHg7XG59XG5pbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG59XG4uY2FwdGlvbiB7XG4gICAgLyogTWFrZSB0aGUgY2FwdGlvbiBhIGJsb2NrIHNvIGl0IG9jY3VwaWVzIGl0cyBvd24gbGluZS4gKi9cbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uaXRlbSBpbWd7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcbn1cbiAgICBcbiAgICAuaXRlbSBpbWc6aG92ZXJ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcbiAgICB9XG5cbiAgICAuYXJ0aWNsZU1hcmdpbiB7XG4gICAgICAgIG1hcmdpbi10b3A6NSU7XG4gICAgfVxuXG4gICAgLnBsYW5lIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9wbGFuZS5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogODIlO1xuICAgIH1cbiAgICAucGxhbmU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3BsYW5lLWhvdmVyLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIC5wbGFudCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvcGxhbnQucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDgyJTtcbiAgICB9XG4gICAgLnBsYW50OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9wbGFudC1ob3Zlci5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuY2FydCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvY2FydC5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogODIlO1xuICAgIH1cbiAgICAuY2FydDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvY2FydC1ob3Zlci5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuaG9zcGl0YWwge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2hvc3BpdGFsLnBuZ1wiKSBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4MiU7XG4gICAgfVxuICAgIC5ob3NwaXRhbDpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaG9zcGl0YWwtaG92ZXIucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgLmZvb2Qge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2Zvb2QucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDgyJTtcbiAgICB9XG4gICAgLmZvb2Q6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2Zvb2QtaG92ZXIucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgLmhvbWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2hvbWUucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDgyJTtcbiAgICB9XG4gICAgLmhvbWU6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2hvbWUtaG92ZXIucG5nXCIpIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9Il19 */"] });


/***/ }),

/***/ "fvNU":
/*!********************************************!*\
  !*** ./src/app/Services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "Tj/N");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "vLqr");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class CommonService {
    constructor(http) {
        this.http = http;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.user);
        this.GetUserData = this.userData.asObservable();
        this.isshowSideBar = true;
        this.baseURL = "https://csamazons-toolchain.eu-gb.mybluemix.net";
        //this.user.email="lande.amol.b@gmail.com";
    }
    SetUser(setUser) {
        this.userData.next(setUser);
    }
    addCarbonData(catagory) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(catagory);
        console.log(body);
        return this.http.post(this.baseURL + '/users/user', body, { 'headers': headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getMainchatData(username) {
        return this.http.get(this.baseURL + '/users/' + username + '/abc').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPieChartHousing(username) {
        return this.http.get(this.baseURL + '/users/piechart/' + username + '/housing/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPieChartTravel(username) {
        return this.http.get(this.baseURL + '/users/piechart/' + username + '/travel/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getPieChartFood(username) {
        return this.http.get(this.baseURL + '/users/piechart/' + username + '/food/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getBarChart(username) {
        return this.getMainchatData(username);
    }
    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
}
CommonService.??fac = function CommonService_Factory(t) { return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
CommonService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: CommonService, factory: CommonService.??fac, providedIn: 'root' });


/***/ }),

/***/ "jLrB":
/*!****************************************!*\
  !*** ./src/app/food/food.component.ts ***!
  \****************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class FoodComponent {
    constructor() { }
    ngOnInit() {
    }
}
FoodComponent.??fac = function FoodComponent_Factory(t) { return new (t || FoodComponent)(); };
FoodComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: FoodComponent, selectors: [["app-food"]], decls: 32, vars: 0, consts: [[1, "container"], [1, "title-bg-color"], [1, "example-button-row"], ["mat-button", "", "mat-raised-button", "", "a", "", "routerLink", "/articles", "color", "primary"]], template: function FoodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "The greenhouse gas emissions produced by growing, rearing, farming, processing, transporting, storing, cooking, and disposing of the food we eat are referred to as the foodprint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Eat low on the food chain. This means eating mostly fruits, veggies, grains, and beans, mainly from feed production and processing and the methane (25 times more potent than CO2 at trapping heat in the atmosphere over 100 years) that beef and sheep belch out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Every day that we forgo meat and dairy, we can reduce our carbon footprint by 8 pounds\u2014that\u2019s 2,920 pounds a year. We can start by joining Meatless Mondays");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Steps to reduce carbon footprint with food usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Choose organic and local foods that are in season");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Buy foodstuffs in bulk when possible using your own reusable container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Reduce your food waste by planning meals ahead of time, freezing the excess");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Compost your food waste if possible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Start your own garden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Buy locally sourced food");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Store your food properly so it stays fresher for longer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".title-bg-color[_ngcontent-%COMP%] {\n  background: lightslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKIiwiZmlsZSI6ImZvb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtYmctY29sb3J7XG4gICAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyZXk7XG59Il19 */"] });


/***/ }),

/***/ "m6jn":
/*!**********************************************!*\
  !*** ./src/app/housing/housing.component.ts ***!
  \**********************************************/
/*! exports provided: HousingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousingComponent", function() { return HousingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HousingComponent {
    constructor() { }
    ngOnInit() {
    }
}
HousingComponent.??fac = function HousingComponent_Factory(t) { return new (t || HousingComponent)(); };
HousingComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HousingComponent, selectors: [["app-housing"]], decls: 36, vars: 0, consts: [[1, "container"], [1, "title-bg-color"], [1, "example-button-row"], ["mat-button", "", "mat-raised-button", "", "a", "", "routerLink", "/articles", "color", "primary"]], template: function HousingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Housing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Households are accountable for nearly three quarters of global carbon emissions. A carbon footprint is the entire quantity of greenhouse gas emissions produced by a product or service during its manufacture, use, and disposal. It comprises carbon dioxide, the most prevalent gas released by humans, as well as other gases such as methane, fluorinated gases and nitrous oxide, all of which trap heat in the atmosphere and contribute to global warming. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "The majority of a person's carbon footprint is usually created by housing, transportation, food, variety of effects on the environment, personal carbon footprint is influenced by how our house is designed and how we live in it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "A household's carbon footprint can be divided into two types. The first are direct emissions from residential energy consumption (for example, gas for space, water heating and electricity for lighting and powering appliances and gadgets). Second, are the embedded emissions. Embedded emissions from supply chains (both domestic and international) account for the majority of Western households' carbon footprints (approximately 60\u201370%).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "A typical U.S. household has a carbon footprint of 48 metric tons CO2e/yr.The average carbon footprint for a person in the United States is 16 tons, one of the highest rates in the world");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Steps to reduce carbon footprint at home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Recycle paper and steel and tin cans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Before throwing away, ask: Can I re-use or repair this? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Donate working electronics. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Don\u2019t put non-recyclables in the recycling bin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Insulate your home. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Plant shrubs and trees around your home. This is an easy, and pretty, insulation fix, especially for older homes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "Check the energy-efficiency rating for your windows, doors and skylights. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Install a cool roof. This is made of a reflective material which redirects light away from your house, keeping it cool. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".title-bg-color[_ngcontent-%COMP%] {\n  background: lightslategrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvdXNpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwQkFBQTtBQUNKIiwiZmlsZSI6ImhvdXNpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtYmctY29sb3J7XG4gICAgYmFja2dyb3VuZDogbGlnaHRzbGF0ZWdyZXk7XG59Il19 */"] });


/***/ }),

/***/ "mGeP":
/*!****************************************!*\
  !*** ./src/app/team/team.component.ts ***!
  \****************************************/
/*! exports provided: TeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamComponent", function() { return TeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TeamComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamComponent.??fac = function TeamComponent_Factory(t) { return new (t || TeamComponent)(); };
TeamComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: TeamComponent, selectors: [["app-team"]], decls: 60, vars: 0, consts: [[1, "row"], [1, "column"], [1, "card"], ["src", "/assets/profile_susithra.jpg", "alt", "Susithra", 1, "logoImage"], [1, "container"], [2, "text-align", "center"], [1, "button"], ["href", "https://github.com/susithrac", "target", "_blank"], ["src", "/assets/profile_amol.jpg", "alt", "Amol", 1, "logoImage"], ["href", "https://github.com/amoll", "target", "_blank"], ["src", "/assets/profile_megha.jpg", "alt", "Megha", 1, "logoImage"], ["href", "https://github.com/megha-30", "target", "_blank"], ["src", "/assets/profile_chikla.jpg", "alt", "Chitkla", 1, "logoImage"], ["href", "https://GitHub.com/chitklak", "target", "_blank"]], template: function TeamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "CS Amazons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Susithra Chandrabose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "susithra.chandrabose@credit-suisse.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Github account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Amol B Lande");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "amolbaburao.lande@credit-suisse.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Github account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Megha M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "megha.m@credit-suisse.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Github account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Chitkla S Khandekar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, "chitkla.khandekar@credit-suisse.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59, "Github account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: inherit;\n}\n\n.column[_ngcontent-%COMP%] {\n  float: left;\n  width: 25%;\n  margin-bottom: 16px;\n  padding: 0 8px;\n}\n\n@media screen and (max-width: 650px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n    display: block;\n  }\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.container[_ngcontent-%COMP%]::after, .row[_ngcontent-%COMP%]::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.button[_ngcontent-%COMP%] {\n  border: none;\n  outline: 0;\n  display: inline-block;\n  padding: 8px;\n  color: white;\n  background-color: #000;\n  text-align: center;\n  cursor: pointer;\n  width: 100%;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #555;\n}\n\n.logoImage[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-left: 25%;\n  padding-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RlYW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGNBQUE7RUFDSjtBQUNGOztBQUVFO0VBQ0UsMENBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUFKOztBQUdFO0VBQ0UsV0FBQTtBQUFKOztBQUdFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0U7RUFDRSxzQkFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJ0ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIH1cbiAgXG4gIC5jb2x1bW4ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBwYWRkaW5nOiAwIDhweDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcbiAgICAuY29sdW1uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG4gIFxuICAuY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbiAgXG4gIC5jb250YWluZXI6OmFmdGVyLCAucm93OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBjbGVhcjogYm90aDtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgfVxuICBcbiAgLnRpdGxlIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgfVxuICBcbiAgLmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICB9XG5cbiAgLmxvZ29JbWFnZSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG4gIH0iXX0= */"] });


/***/ }),

/***/ "rFz8":
/*!******************************************!*\
  !*** ./src/app/models/catagory.model.ts ***!
  \******************************************/
/*! exports provided: Catagory, Housing, Travel, Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Catagory", function() { return Catagory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Housing", function() { return Housing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Travel", function() { return Travel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
class Catagory {
    constructor() {
        this.month = "1";
        this.year = "2021";
        this.housing = new Housing();
        this.travel = new Travel();
        this.food = new Food();
        // products:Products=new Products();
        // services:Services=new Services();
    }
}
class Housing {
    constructor() {
        this.electricity = 0;
        // naturalGas:number=0;
        this.fuelOil = 0;
        this.lPG = 0;
        this.waste = 0;
        this.water = 0;
    }
}
class Travel {
    constructor() {
        this.vehicle = 0;
        this.bus = 0;
        // metro:number=0;
        this.taxi = 0;
        this.rail = 0;
        this.flying = 0;
    }
}
class Food {
    constructor() {
        this.whiteMeat = 0;
        this.dairy = 0;
        this.vegetables = 0;
        this.fruit = 0;
        this.grains = 0;
        // oils:number=0;
        // snacks:number=0;
        // cereals:number=0;
        // redMeat:number=0;
    }
}
// export class Products
// {
//     electronics:number=0;
//     household:number=0;
//     clothes:number=0;
//     medical:number=0;
//     recreational:number=0;
//     other:number=0;
// }
// export class Services
// {
//     health:number=0;
//     finance:number=0;
//     recreation:number=0;
//     education:number=0;
//     communications:number=0;
//     other:number=0;
// }


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _housing_housing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./housing/housing.component */ "m6jn");
/* harmony import */ var _artical_artical_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./artical/artical.component */ "cJI2");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "J7Q4");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./travel/travel.component */ "58pj");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "LvIC");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food/food.component */ "jLrB");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _planting_planting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./planting/planting.component */ "NcCX");
/* harmony import */ var _team_team_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./team/team.component */ "mGeP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'articles', component: _artical_artical_component__WEBPACK_IMPORTED_MODULE_3__["ArticalComponent"] },
    { path: 'housing', component: _housing_housing_component__WEBPACK_IMPORTED_MODULE_2__["HousingComponent"] },
    { path: 'travel', component: _travel_travel_component__WEBPACK_IMPORTED_MODULE_6__["TravelComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"] },
    { path: 'food', component: _food_food_component__WEBPACK_IMPORTED_MODULE_8__["FoodComponent"] },
    { path: 'service', component: _service_service_component__WEBPACK_IMPORTED_MODULE_9__["ServiceComponent"] },
    { path: 'planting', component: _planting_planting_component__WEBPACK_IMPORTED_MODULE_10__["PlantingComponent"] },
    { path: 'team', component: _team_team_component__WEBPACK_IMPORTED_MODULE_11__["TeamComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map