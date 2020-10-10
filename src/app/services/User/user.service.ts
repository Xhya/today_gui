import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: RestService) {}

    public createEmptyUser(): Observable<any> {
        return this.http.post('user/create-empty');
    }

    public getUserById(body: {
        userId: string
    }): Observable<any> {
        return this.http.get('user/get-by-id');
    }
}
