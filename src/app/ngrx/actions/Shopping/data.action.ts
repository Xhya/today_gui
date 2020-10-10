import { createAction, props } from '@ngrx/store';
import { ListOfProductI } from 'src/app/_types/listOfProduct';

export const setListOfProduct = createAction('[Shopping Data Component] setListOfProduct',  props<{listOfProduct: ListOfProductI[]}>());
export const addListOfProduct = createAction('[Shopping Data Component] addListOfProduct',  props<{listOfProduct: ListOfProductI}>());