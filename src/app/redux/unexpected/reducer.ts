import { createAction, createReducer, on } from "@ngrx/store";
import { rdxUnexpectedFetch, rdxUnexpectedFetchError, rdxUnexpectedFetchSuccess, rdxUnexpectedIsTrue } from "./actions";

export interface IUnexpectedReducer {
    is: boolean;
    route:  string;
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
}
export const unexpectedInitial: IUnexpectedReducer = {
    is: false,
    route: '',
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false
}
export const unexpectedReducer = createReducer(
    unexpectedInitial,
    on(rdxUnexpectedIsTrue, (state: IUnexpectedReducer, action) => {
        return {
            ...state,
            is: true,
            route: action.payload!
        }
    }),
    on(rdxUnexpectedFetch, (state: IUnexpectedReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false
        }
    }),
    on(rdxUnexpectedFetchSuccess, (state: IUnexpectedReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxUnexpectedFetchError, (state: IUnexpectedReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true
        }
    })
)