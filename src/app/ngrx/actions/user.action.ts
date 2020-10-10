import { createAction, props } from '@ngrx/store';
import { UserI } from 'src/app/_types/user';

export const setUser = createAction('[User Component] setUser',  props<{user: UserI}>());