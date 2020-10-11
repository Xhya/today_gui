import { createReducer, on } from '@ngrx/store';
import * as ShoppingDataAction from '../../actions/Shopping/data.action';

export const initialState = {
    listOfListOfProduct: [],
    currentListOfProduct: null,
};

const _reducer = createReducer(
    initialState,
    on(ShoppingDataAction.addListOfProduct, (state, { listOfProduct }) => ({
        listOfListOfProduct: [...state.listOfListOfProduct, listOfProduct],
        currentListOfProduct: state.currentListOfProduct,
    })),
    on(ShoppingDataAction.setListOfProduct, (state, { listOfListOfProduct }) => ({
        listOfListOfProduct: listOfListOfProduct,
        currentListOfProduct: state.currentListOfProduct,
    })),
    on(ShoppingDataAction.setCurrentListOfProduct, (state, { currentListOfProduct }) => ({
        listOfListOfProduct: state.listOfListOfProduct,
        currentListOfProduct: currentListOfProduct,
    })),
    on(ShoppingDataAction.addProductsInCurrentListOfProduct, (state, { product }) => ({
        listOfListOfProduct: state.listOfListOfProduct,
        currentListOfProduct: {
            ...state.currentListOfProduct,
            products: [...state.currentListOfProduct.products, product],
        },
    })),
);

export default function reducer(state, action) {
    return _reducer(state, action);
}
