import { Injectable } from '@angular/core';
import { SHOPPING_PAGE_NAMES } from 'src/app/helpers/navigation.helper';
import { Store } from '../../store';

const initialState = {
    pageName: SHOPPING_PAGE_NAMES.LISTS_OF_LIST,
};

interface initialStateI {
    pageName: string;
};

@Injectable({
    providedIn: 'root',
})
export default class ShoppingNavigationStore extends Store<initialStateI> {
    
    constructor() { 
        super(initialState)
    }

    public setPageToListOfLists(): void {
        this.setState({ pageName : SHOPPING_PAGE_NAMES.LISTS_OF_LIST });
    }

    public setPageToListOfProduct(): void {
        this.setState({ pageName : SHOPPING_PAGE_NAMES.LIST_OF_PRODUCT });
    }

}
