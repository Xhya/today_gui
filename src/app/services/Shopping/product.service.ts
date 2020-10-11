import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: RestService) {}

    public getProductsByName(body: {
        searchedText: string,
    }): Observable<any> {
        return this.http.get('product/get-products-by-name', body);
    }
}
