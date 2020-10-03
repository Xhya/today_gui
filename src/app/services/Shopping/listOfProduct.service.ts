import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root',
})
export class ListOfProductService {
    constructor(private http: RestService) {}

    public create(body: {
        name: string
    }): Observable<any> {
        return this.http.post('list-of-product/create', body);
    }

    public getByUserId(body: {
        userId: string
    }): Observable<any> {
        return this.http.get('list-of-product/by-user-id', body);
    }
}
