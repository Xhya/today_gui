import { createReducer, on } from '@ngrx/store';
import * as NavigationAction from '../../actions/Shopping/navigation.action';

import { SHOPPING_PAGE_NAMES } from 'src/app/helpers/navigation.helper';

export const initialState = {
    pageName: SHOPPING_PAGE_NAMES.LISTS_OF_LIST,
};

const _reducer = createReducer(
    initialState,
    on(NavigationAction.setPage, (state, { pageName }) => ({
        pageName: pageName,
    })),
    on(NavigationAction.setPageToListOfLists, () => ({
        pageName: SHOPPING_PAGE_NAMES.LISTS_OF_LIST,
    })),
    on(NavigationAction.setPageToListOfProduct, () => ({
        pageName: SHOPPING_PAGE_NAMES.LIST_OF_PRODUCT,
    })),
);

export default function reducer(state, action) {
    return _reducer(state, action);
}
