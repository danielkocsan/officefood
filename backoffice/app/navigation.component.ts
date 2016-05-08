import {Component} from 'angular2/core';

@Component({
    selector: 'my-navigation',
    template: `
        <div class="col-sm-3" id="sidebar">
            <ul class="nav nav-sidebar">
                <li class="active"><a href="/restaurant/Bolognia">Daily menu <span class="sr-only">(current)</span></a></li>
            </ul>
        </div>
    `
})

export class NavigationComponent { }

