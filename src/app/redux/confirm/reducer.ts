import { createReducer, on } from "@ngrx/store";
import { rdxConfirmFetch, rdxConfirmFetchError, rdxConfirmFetchSuccess } from "./actions";

export interface IConfirmReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    onboardLink: string;
    isFetchError: boolean;
    fetchErrorMessage: string; 
}
export const confirmInitial: IConfirmReducer = {
    isFetch: false,
    isFetchSuccess: false,
    onboardLink: '',
    isFetchError: false,
    fetchErrorMessage: ''
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
    })

)