import { createReducer, on } from '@ngrx/store';
import * as ShoppingDataAction from '../../actions/Shopping/data.action';

export const initialState = {
    listOfProduct: [],
};

const _reducer = createReducer(
    initialState,
    on(ShoppingDataAction.addListOfProduct, (state, { listOfProduct }) => ({
        listOfProduct: [...state.listOfProduct, listOfProduct],
    })),
    on(ShoppingDataAction.setListOfProduct, (state, { listOfProduct }) => ({
        listOfProduct: listOfProduct,
    })),
);

export default function reducer(state, action) {
    return _reducer(state, action);
}
