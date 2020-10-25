import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root',
})
export class CategoryOfProductService {
    constructor(private http: RestService) {}

    public getAllCategories(): Observable<any> {
        return this.http.get('category-of-product/get-all');
    }

    public searchCategoryByName(body: {
        name: string
    }): Observable<any> {
        return this.http.get('category-of-product/search-by-name', body);
    }

    public createCategory(body: {
        name: string
    }): Observable<any> {
        return this.http.post('category-of-product/create', body);
    }
}
