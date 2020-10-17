import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Store<T> {
    private _state$: BehaviorSubject<T>;
    public state$: Observable<T>;
    
    constructor(initialState: T) { 
        this._state$ = new BehaviorSubject<T>(initialState);
        this.state$ = this._state$.asObservable();
    }

    public getState() {
        return this._state$.getValue();        
    }

    protected setState(nextState: T): void {
        this._state$.next(nextState);
    }

}
