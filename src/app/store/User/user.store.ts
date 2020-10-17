import { Injectable } from '@angular/core';
import { UserI } from 'src/app/_types/user';
import { Store } from '../store';

const initialState = {
    user: null
};

interface InitialStateI {
    user: UserI
};

@Injectable({
    providedIn: 'root',
})
export default class UserStore extends Store<InitialStateI> {
    
    constructor() { 
        super(initialState)
    }

    public setUser(nextState: InitialStateI): void {
        this.setState(nextState);
    }

}
