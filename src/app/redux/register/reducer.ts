import { createReducer, on } from "@ngrx/store";
import { rdxRegisterFetch, rdxRegisterFetchSuccess, rdxRegisterFetchError } from "./actions";

export interface IRegisterReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchError: string;
}
const registerInitial: IRegisterReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchError: ''
}
export const registerReducer = createReducer(
    registerInitial,
    on(rdxRegisterFetch, (state: IRegisterReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            fetchError: ''
        }
    }),
    on(rdxRegisterFetchSuccess, (state: IRegisterReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxRegisterFetchError, (state: IRegisterReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchError: action.payload!
        }
    })
)