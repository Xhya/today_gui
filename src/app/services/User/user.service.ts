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
}
