import { Component, Inject, Pipe} from '@angular/core';
import { RouteSegment, Routes, Router, RouterUrlSerializer, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { MainPageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { AddRoom } from './addroom/addroom.component';
import { LoginComponent}  from './login/login.component';
import { AllRoomsComponent}  from './allrooms/allrooms.component';

@Component({
    selector: 'moja-aplikacija',
    templateUrl: 'app/router.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
@Routes([
    { path: '/', name: 'MainPage', component: MainPageComponent, useAsDefault: true },
    { path: '/register', name: 'RegisterPage', component: RegisterComponent },
    { path: '/login', name: 'LoginPage', component: LoginComponent },
    { path: '/addroom', name: 'AddRoom', component: AddRoom },
    { path: '/allrooms', name: 'AllRoomsPage', component: AllRoomsComponent }
])

export class AppComponent {
    router: Router;
    isAuth: String;
    currentUrl: String;
    location: Location;
    routeSerializer: RouterUrlSerializer;
    constructor(private router: Router, private routeSerializer: RouterUrlSerializer) {
        this.router = router;
        this.currentUrl = '';
        this.routeSerializer = routeSerializer;


    }

    ngOnInit() {
        this.router.changes.subscribe(
            next => {
                this.currentUrl = JSON.stringify(this.router.urlTree);
                if (localStorage.getItem('token') !== null) {
                    this.isAuth = "yes";
                } else {
                    this.isAuth = "no";
                }
            }
        )
    }
    isCurrentRoute(route: string): boolean {
        return this.currentUrl === route;
    }

    onLogout(): void {
        localStorage.removeItem("token");
        this.router.navigate(['./']);
        if (localStorage.getItem('token') !== null) {
            this.isAuth = "yes";
        } else {
            this.isAuth = "no";
        }
    }
}
