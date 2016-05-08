import {Component} from 'angular2/core';

@Component({
    selector: 'dish-category-editor',
    template: `
        <ul class="list-group">
            <li class="list-group-item active">
                Primeros
            </li>
            <li class="list-group-item">
                <span class="badge">3 EUR</span>
                Porra
            </li>
            <li class="list-group-item">
                <form class="form-inline">
                    <div class="form-group">
                        <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
                        <div class="input-group">
                            <input type="text" class="form-control" id="exampleInputAmount" placeholder="Dish">
                        </div>
                        <div class="input-group">
                            <input type="text" class="form-control" id="exampleInputAmount" placeholder="Price">
                            <div class="input-group-addon">EUR</div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
            </li>
        </ul>
    `
})

export class DishCategoryComponent { }
