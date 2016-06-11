"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var mainpage_component_1 = require('./mainpage/mainpage.component');
var register_component_1 = require('./register/register.component');
var addroom_component_1 = require('./addroom/addroom.component');
var login_component_1 = require('./login/login.component');
var allrooms_component_1 = require('./allrooms/allrooms.component');
var AppComponent = (function () {
    function AppComponent(router, routeSerializer) {
        this.router = router;
        this.routeSerializer = routeSerializer;
        this.router = router;
        this.currentUrl = '';
        this.routeSerializer = routeSerializer;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.changes.subscribe(function (next) {
            _this.currentUrl = JSON.stringify(_this.router.urlTree);
            if (localStorage.getItem('token') !== null) {
                _this.isAuth = "yes";
            }
            else {
                _this.isAuth = "no";
            }
        });
    };
    AppComponent.prototype.isCurrentRoute = function (route) {
        return this.currentUrl === route;
    };
    AppComponent.prototype.onLogout = function () {
        localStorage.removeItem("token");
        this.router.navigate(['./']);
        if (localStorage.getItem('token') !== null) {
            this.isAuth = "yes";
        }
        else {
            this.isAuth = "no";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'moja-aplikacija',
            templateUrl: 'app/router.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS]
        }),
        router_1.Routes([
            { path: '/', name: 'MainPage', component: mainpage_component_1.MainPageComponent, useAsDefault: true },
            { path: '/register', name: 'RegisterPage', component: register_component_1.RegisterComponent },
            { path: '/login', name: 'LoginPage', component: login_component_1.LoginComponent },
            { path: '/addroom', name: 'AddRoom', component: addroom_component_1.AddRoom },
            { path: '/allrooms', name: 'AllRoomsPage', component: allrooms_component_1.AllRoomsComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouterUrlSerializer])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map