import {Component} from 'angular2/core';
import {DishCategoryComponent} from "./dish-category-editor.component";

@Component({
    selector: 'daily-menu',
    templateUrl: './app/daily-menu.template.html',
    directives: [DishCategoryComponent]
})

export class DailyMenuComponent {}