import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http'

@Injectable()
export class RestaurantService {
    constructor(
        private http: Http
    ) {
    }

    getAll() {
        return this.http.get('http://localhost:8282/restaurant');
    }
}