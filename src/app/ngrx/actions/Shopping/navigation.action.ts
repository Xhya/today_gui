import { createAction, props } from '@ngrx/store';

export const setPage = createAction('[Shopping Navigation Component] setPage',  props<{pageName: string}>());
export const setPageToListOfLists = createAction('[Shopping Navigation Component] setPageToListOfLists');
export const setPageToListOfProduct = createAction('[Shopping Navigation Component] setPageToListOfProduct');