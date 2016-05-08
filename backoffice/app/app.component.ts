import {Component, OnInit} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {RestaurantComponent} from './restaurant.component'
import {NavigationComponent} from './navigation.component'
import {RestaurantService} from './restaurant.service';

@Component({
    selector: 'my-app',
    template: `
        <my-navigation></my-navigation>
        <router-outlet></router-outlet>
    `,
    directives: [NavigationComponent, ROUTER_DIRECTIVES],
    providers:  [RestaurantService]
})

@RouteConfig([
    {
        path: '/restaurant/:id/...',
        name: 'Restaurant',
        component: RestaurantComponent
    }
])

export class AppComponent implements OnInit {
    constructor (
        private _service: RestaurantService
    ) {}

    ngOnInit() {
        this._service.getAll().subscribe(data => console.log(data.json()));
    }
}