import { createReducer, on } from '@ngrx/store';
import * as ListOrProductAction from '../actions/listOfProduct.action';

export const initialState = {
    listOfProduct: [],
};

const _reducer = createReducer(
    initialState,
    on(ListOrProductAction.addListOfProduct, (state, { listOfProduct }) => ({
        listOfProduct: [...state.listOfProduct, listOfProduct],
    })),
    on(ListOrProductAction.setListOfProduct, (state, { listOfProduct }) => ({
        listOfProduct: listOfProduct,
    })),
);

export default function reducer(state, action) {
    return _reducer(state, action);
}
