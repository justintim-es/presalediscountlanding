import { createReducer, on } from "@ngrx/store";
import { rdxConfirmFetch, rdxConfirmFetchError, rdxConfirmFetchSuccess, rdxConfirmIsRouteLoginTrue } from "./actions";

export interface IConfirmReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    onboardLink: string;
    isFetchError: boolean;
    fetchErrorMessage: string; 
    isRouteLogin: boolean
}
export const confirmInitial: IConfirmReducer = {
    isFetch: false,
    isFetchSuccess: false,
    onboardLink: '',
    isFetchError: false,
    fetchErrorMessage: '',
    isRouteLogin: false,
}
export const confirmReducer = createReducer(
    confirmInitial,
    on(rdxConfirmFetch, (state: IConfirmReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            fetchErrorMessage: ''
        }
    }),
    on(rdxConfirmFetchSuccess, (state: IConfirmReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
            onboardLink: action.payload! 
        }
    }),
    on(rdxConfirmFetchError, (state: IConfirmReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    }),
    on(rdxConfirmIsRouteLoginTrue, (state: IConfirmReducer, action) => {
        return {
            ...state,
            isRouteLogin: true
        }
    })

)