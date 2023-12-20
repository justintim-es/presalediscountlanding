import { createReducer, on } from "@ngrx/store";
import { rdxRegisterFetch, rdxRegisterFetchSuccess, rdxRegisterFetchError, rdxRegisterIsRoutePleaseTrue } from "./actions";

export interface IRegisterReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isRoutePlease: boolean;
    isEmailFetchError: boolean;
    isFirstPasswordFetchError: boolean;
    isSecondPasswordFetchError: boolean;
    fetchErrorMessage: string;
    isUnexpectedError: boolean;
}
const registerInitial: IRegisterReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isRoutePlease: false,
    isEmailFetchError: false,
    isFirstPasswordFetchError: false,
    isSecondPasswordFetchError: false,
    fetchErrorMessage: '',
    isUnexpectedError: false
}
export const registerReducer = createReducer(
    registerInitial,
    on(rdxRegisterFetch, (state: IRegisterReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            isEmailFetchError: false,
            isFirstPasswordFetchError: false,
            isSecondPasswordFetchError: false,
            fetchError: ''
        }
    }),
    on(rdxRegisterFetchSuccess, (state: IRegisterReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,   
        }
    }),
    on(rdxRegisterFetchError, (state: IRegisterReducer, action) => {
        switch (action.payload?.error) {
            case 'e-mail': {
                return {
                    ...state,
                    isFetch: false,
                    isEmailFetchError: true,
                    fetchErrorMessage: action.payload.message
                }
            }
            case 'first-password': {
                return {
                    ...state,
                    isFetch: false,
                    isFirstPasswordFetchError: true,
                    fetchErrorMessage: action.payload.message
                }
            }
            case 'second-password': {
                return {
                    ...state,
                    isFetch: false,
                    isSecondPasswordFetchError: true,
                    fetchErrorMessage: action.payload.message
                }
            }
            default: {
                return {
                    ...state,
                    isFetch: false,
                }
            }
        }
    }),
    on(rdxRegisterIsRoutePleaseTrue, (state: IRegisterReducer) => {
        return {
            ...state,
            isRoutePlease: true
        }
    })
)