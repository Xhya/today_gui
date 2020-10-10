import { createReducer, on } from '@ngrx/store';
import * as UserAction from '../actions/user.action';

export const initialState = {
    user: null,
};

const _reducer = createReducer(
    initialState,
    on(UserAction.setUser, (state, { user }) => ({ user: user })),
);

export default function reducer(state, action) {
    return _reducer(state, action);
}
