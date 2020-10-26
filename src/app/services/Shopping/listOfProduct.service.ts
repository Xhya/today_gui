import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root',
})
export class ListOfProductService {
    constructor(private http: RestService) {}

    public create(body: {
        name?: string,
        userId: string
    }): Observable<any> {
        return this.http.post('list-of-product/create', body);
    }

    public getByUserId(body: {
        userId: string
    }): Observable<any> {
        return this.http.get('list-of-product/by-user-id', body);
    }

    public addProductToListOfProduct(body: {
        product: ProductI,
        listOfProductId: string,
        userId: string
    }): Observable<any> {
        return this.http.post('list-of-product/add-product-to-list', body);
    }

    public setNameOfListOfProduct(body: {
        name: string,
        listOfProductId: string,
    }): Observable<any> {
        return this.http.post('list-of-product/set-name', body);
    }

    public toggleProductOfListChecked(body: {
        productId: string,
        userId: string,
    }): Observable<any> {
        return this.http.post('list-of-product/toggle-checked', body);
    }

    public setQuantityOfProduct(body: {
        quantity: number,
        quantityUnit: string,
        productId: string
    }): Observable<any> {
        return this.http.post('list-of-product/set-quantity-of-product', body);
    }
}
