webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapview_mapview__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SinglePage = /** @class */ (function () {
    function SinglePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = navParams.get('item');
    }
    SinglePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SinglePage');
    };
    SinglePage.prototype.viewMap = function () {
        __WEBPACK_IMPORTED_MODULE_2__mapview_mapview__["a" /* MapviewPage */].item = this.item;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mapview_mapview__["a" /* MapviewPage */]);
    };
    SinglePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single',template:/*ion-inline-start:"/home/marwa/aionic/myApp/src/pages/single/single.html"*/'<!--\n  Generated template for the SinglePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>single</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n    <ion-card-header>\n  {{item.username}}\n    </ion-card-header>\n    <ion-card-content>\n   {{item.note}}\n   {{item.date}}\n   {{item.time}}\n   <ion-icon item-end (click)="viewMap()" name="pin"></ion-icon>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/marwa/aionic/myApp/src/pages/single/single.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SinglePage);
    return SinglePage;
}());

//# sourceMappingURL=single.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapviewPage = /** @class */ (function () {
    function MapviewPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.pos1 = null;
        this.pos2 = null;
        this.coordinate = [];
    }
    MapviewPage_1 = MapviewPage;
    MapviewPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapviewPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.addMarker();
        }, function (err) {
            console.log(err);
        });
    };
    MapviewPage.prototype.addMarker = function () {
        this.pos1 = JSON.parse(MapviewPage_1.item.loc);
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.pos1
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
        this.coordinate.push(this.pos1);
        this.pos2 = JSON.parse(MapviewPage_1.item.dest);
        var marker2 = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.pos2
        });
        this.addInfoWindow(marker2, content);
        this.coordinate.push(this.pos2);
        var path = new google.maps.Polyline({
            path: this.coordinate,
            geodesic: true,
            strokeColor: "#ff0000",
            strokeOpacity: 1.0,
            strokeWeight: 2.0
        });
        path.setMap(this.map);
    };
    MapviewPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    MapviewPage.item = null;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], MapviewPage.prototype, "mapElement", void 0);
    MapviewPage = MapviewPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mapview',template:/*ion-inline-start:"/home/marwa/aionic/myApp/src/pages/mapview/mapview.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Map\n      </ion-title>\n    \n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n    <div #map id="map"></div> \n  </ion-content>'/*ion-inline-end:"/home/marwa/aionic/myApp/src/pages/mapview/mapview.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _c || Object])
    ], MapviewPage);
    return MapviewPage;
    var MapviewPage_1, _a, _b, _c;
}());

//# sourceMappingURL=mapview.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_trip_add_trip__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, geolocation) {
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.pos1 = null;
        this.pos2 = null;
        this.coordinate = [];
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
        }, function (err) {
            console.log(err);
        });
    };
    MapPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<h4>Information!</h4>";
        this.addInfoWindow(marker, content);
        if (this.pos1 == null) {
            this.pos1 = JSON.stringify(marker.position);
            this.coordinate.push(JSON.parse(this.pos1));
        }
        else {
            this.pos2 = JSON.stringify(marker.position);
            this.coordinate.push(JSON.parse(this.pos2));
            var path = new google.maps.Polyline({
                path: this.coordinate,
                geodesic: true,
                strokeColor: "#ff0000",
                strokeOpacity: 1.0,
                strokeWeight: 2.0
            });
            path.setMap(this.map);
            __WEBPACK_IMPORTED_MODULE_3__add_trip_add_trip__["a" /* AddTripPage */].fromdect = this.pos1;
            __WEBPACK_IMPORTED_MODULE_3__add_trip_add_trip__["a" /* AddTripPage */].todest = this.pos2;
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__add_trip_add_trip__["a" /* AddTripPage */]);
        }
    };
    MapPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/home/marwa/aionic/myApp/src/pages/map/map.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Map\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="addMarker()"><ion-icon name="add"></ion-icon>Add Marker</button>\n    </ion-buttons> \n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <div #map id="map"></div> \n</ion-content>'/*ion-inline-end:"/home/marwa/aionic/myApp/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


var LoginPage = /** @class */ (function () {
    function LoginPage(alertCtrl, storage, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
        this.storage.get('name').then(function (data) { _this.username = data; });
        this.storage.get('password').then(function (data) { _this.userpass = data; });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.addPerson = function () {
        if (this.username == this.form.value.name && this.userpass == this.form.value.password) {
            console.log("ok");
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'New Friend!',
                subTitle: 'invalid user plz try again',
                buttons: ['ok']
            });
            alert_1.present();
        }
    };
    LoginPage.prototype.Register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], LoginPage.prototype, "nav", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/marwa/aionic/myApp/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Person</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n  <ion-content>\n    <form (submit)="addPerson()" [formGroup]="form">\n        <ion-list>\n  \n        <ion-item>\n          <ion-input formControlName="name" type="text" placeholder="name"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input formControlName="password" type="password" placeholder="password"></ion-input>\n        </ion-item>\n\n      \n  \n      </ion-list>\n      <div padding>\n        <button ion-button block type="submit">Save</button>\n      </div>\n    </form>\n      <div padding>\n        <button ion-button block (click)="Register()">Register</button>\n      </div>\n     \n\n\n  \n</ion-content>'/*ion-inline-end:"/home/marwa/aionic/myApp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-trip/add-trip.module": [
		280,
		5
	],
	"../pages/login/login.module": [
		281,
		4
	],
	"../pages/map/map.module": [
		282,
		3
	],
	"../pages/mapview/mapview.module": [
		283,
		2
	],
	"../pages/register/register.module": [
		285,
		1
	],
	"../pages/single/single.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_add_trip_add_trip__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_map_map__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_single_single__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mapview_mapview__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_trip_add_trip__["a" /* AddTripPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_single_single__["a" /* SinglePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapview_mapview__["a" /* MapviewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-trip/add-trip.module#AddTripPageModule', name: 'AddTripPage', segment: 'add-trip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mapview/mapview.module#MapviewPageModule', name: 'MapviewPage', segment: 'mapview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/single/single.module#SinglePageModule', name: 'SinglePage', segment: 'single', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_add_trip_add_trip__["a" /* AddTripPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_single_single__["a" /* SinglePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_mapview_mapview__["a" /* MapviewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_list_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_trip_add_trip__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */] },
            { title: 'Register', component: __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_4__pages_list_list__["a" /* ListPage */] },
            { title: 'Add Trip', component: __WEBPACK_IMPORTED_MODULE_7__pages_add_trip_add_trip__["a" /* AddTripPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/marwa/aionic/myApp/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/marwa/aionic/myApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__map_map__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddTripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


var AddTripPage = /** @class */ (function () {
    function AddTripPage(navCtrl, storage, navParams) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.form = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            note: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            Date: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            Time: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            Destination: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required),
            Location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required)
        });
    }
    AddTripPage_1 = AddTripPage;
    AddTripPage.prototype.addTrip = function () {
        var _this = this;
        this.storage.get("trips").then(function (val) {
            var TripLIst = val || [];
            TripLIst = TripLIst.concat([{
                    username: _this.form.value.name,
                    note: _this.form.value.note,
                    date: _this.form.value.Date,
                    time: _this.form.value.Time,
                    dest: _this.form.value.Destination,
                    loc: _this.form.value.Location
                }]);
            _this.storage.set("trips", TripLIst);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_list__["a" /* ListPage */]);
    };
    AddTripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTripPage');
        this.form.controls["Location"].setValue(AddTripPage_1.fromdect);
        this.form.controls["Destination"].setValue(AddTripPage_1.todest);
    };
    AddTripPage.prototype.viewMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__map_map__["a" /* MapPage */]);
        this.form.controls[""];
    };
    AddTripPage.fromdect = "";
    AddTripPage.todest = "";
    AddTripPage = AddTripPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-trip',template:/*ion-inline-start:"/home/marwa/aionic/myApp/src/pages/add-trip/add-trip.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Trip</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n  <form (submit)="addTrip()" [formGroup]="form">\n    <ion-list>\n\n    <ion-item>\n      <ion-input formControlName="name" type="text" placeholder="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input formControlName="note" type="text" placeholder="note"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-datetime displayFormat="MM/DD/YYYY" formControlName="Date"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-datetime displayFormat="HH:mm" formControlName="Time"  ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-input formControlName="Location" type="text" placeholder="Location"></ion-input>\n     \n    </ion-item>\n   \n   \n\n\n    <ion-item>\n      <ion-input formControlName="Destination" type="text" placeholder="Destination"></ion-input>\n      <ion-icon item-end (click)="viewMap()" name="pin"></ion-icon>\n\n   </ion-item>\n \n\n  </ion-list>\n  <div padding>\n    <button ion-button block type="submit" >Save</button>\n  </div>\n</form>\n</ion-content>\n'/*ion-inline-end:"/home/marwa/aionic/myApp/src/pages/add-trip/add-trip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddTripPage);
    return AddTripPage;
    var AddTripPage_1;
}());

//# sourceMappingURL=add-trip.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

var RegisterPage = /** @class */ (function () {
    function RegisterPage(storage, navCtrl, navParams) {
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.form = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]("", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required)
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddPersonPage');
    };
    RegisterPage.prototype.addPerson = function () {
        this.storage.set('name', this.form.value.name);
        this.storage.set('password', this.form.value.password);
        this.storage.set('email', this.form.value.email);
        this.storage.get('email').then(function (val) {
            console.log('Your age is', val);
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/marwa/aionic/myApp/src/pages/register/register.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Person</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n  <ion-content>\n    <form (submit)="addPerson()" [formGroup]="form">\n        <ion-list>\n  \n        <ion-item>\n          <ion-input formControlName="name" type="text" placeholder="name"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-input formControlName="password" type="password" placeholder="password"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input formControlName="email" type="text" placeholder="Email"></ion-input>\n        </ion-item>\n  \n  \n      </ion-list>\n      <div padding>\n        <button ion-button block type="submit">Save</button>\n      </div>\n    </form>\n\n  \n</ion-content>'/*ion-inline-end:"/home/marwa/aionic/myApp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__single_single__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(storage, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.storage.get("trips").then(function (val) {
            _this.items = val || [];
        });
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        /*  this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
          'american-football', 'boat', 'bluetooth', 'build'];
          
          this.items = [];
          for (let i = 1; i < 11; i++) {
            this.items.push({
              title: 'Item ' + i,
              note: 'This is item #' + i,
              icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
          }*/
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__single_single__["a" /* SinglePage */], {
            item: item
        });
    };
    ListPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.items;
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/marwa/aionic/myApp/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n     \n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        <ion-avatar item-start>\n            <img src="assets/imgs/1.jpeg">\n          </ion-avatar>\n      {{item.username}}\n      </button>\n  </ion-list>\n \n</ion-content>\n'/*ion-inline-end:"/home/marwa/aionic/myApp/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map