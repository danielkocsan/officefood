import {Component} from 'angular2/core';
import {RouteParams, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {DailyMenuComponent} from './daily-menu.component'

@Component({
    template: `
        <h1>Restaurant {{id}}</h1>
        <router-outlet></router-outlet>
    `,
    directives: [DailyMenuComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/daily-menu',
        name: 'DailyMenu',
        component: DailyMenuComponent,
        useAsDefault: true
    }
])

export class RestaurantComponent {
    public id;

    constructor (private routeParams: RouteParams) {

    }
    ngOnInit() {
        this.id = this.routeParams.get('id');
    }
}