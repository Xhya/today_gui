import { createAction, props } from '@ngrx/store';
import { ListOfProductI } from 'src/app/_types/listOfProduct';

export const setListOfProduct = createAction('[ListOfProduct Component] setListOfProduct',  props<{listOfProduct: ListOfProductI[]}>());
export const addListOfProduct = createAction('[ListOfProduct Component] addListOfProduct',  props<{listOfProduct: ListOfProductI}>());