import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Shopping } from '../entities/shopping/shopping';

@Injectable()
export class HomeService {
    private getShoppingListUrl = 'https://mainsite-restapi.ele.me/shopping/restaurants?extras%5B%5D=activities&geohash=wt3mfr6u7zf&latitude=30.58259&limit=24&longitude=114.36063&offset=0&terminal=web';

    constructor(private http: Http) {}

    getShoppingList(): Observable<Shopping[]> {
        return this.http
            .get(this.getShoppingListUrl)
            .map(response => response.json());
    }
}
