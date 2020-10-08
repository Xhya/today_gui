import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {

    public getUserId(): string | null {
        return localStorage.getItem('today_uuid');
    }

    public setUserId(id: string): void {
        localStorage.setItem('today_uuid', id);
    }
}
