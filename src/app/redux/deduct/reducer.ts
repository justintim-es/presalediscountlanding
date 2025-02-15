import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface IFetchErrorMessage {
    is: boolean;
    formcontrol: string;
    message: string;
}
export interface IDeductReducer {
    isAskAmount: boolean;
    isFetch: boolean;
    isFetchSuccesss: boolean;
    // isFetchError: boolean;
    fetchError: IFetchErrorMessage;
}
export const deductInitial: IDeductReducer = {
    isAskAmount: false,
    isFetch: false,
    isFetchSuccesss: false,
    // isFetchError: false,
    fetchError: {
        is: false,
        formcontrol: '',
        message: ''
    },
}
export interface IDeduct {
    recognition: string;
    cents: number;
    shopcode: number;
}

export const RDX_DEDUCT_FETCH = 'RDX_DEDUCT_FETCH';
export const rdxDeductFetch = createAction(
    RDX_DEDUCT_FETCH,
    props<IProps<IDeduct>>()
)
export const RDX_DEDUCT_FETCH_SUCCESS = 'RDX_DEDUCT_FETCH_SUCCESS';
export const rdxDeductFetchSuccess = createAction(
    RDX_DEDUCT_FETCH_SUCCESS
)
export const RDX_DEDUCT_FETCH_ERROR = 'RDX_DEDUCT_FETCH_ERROR';
export const rdxDeductFetchError = createAction(
    RDX_DEDUCT_FETCH_ERROR,
    props<IProps<IFetchErrorMessage>>()
)
export const RDX_DEDUCT_RESEND = 'RDX_DEDUCT_RESEND';
export const rdxDeductResend = createAction(
    RDX_DEDUCT_RESEND,
    props<IProps<string>>()
)
export const RDX_DEDUCT_RESEND_SUCCESS = 'RDX_DEDUCT_RESEND_SUCCESS';
export const rdxDeductResendSuccess = createAction(
    RDX_DEDUCT_RESEND_SUCCESS
)
export const deductReducer = createReducer(
    deductInitial,
    on(rdxDeductFetch, (state: IDeductReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccesss: false,
            // isFetchError: false,
            // fetchError: ''
        }
    }),
    on(rdxDeductFetchSuccess, (state: IDeductReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccesss: true
        }
    }),
    on(rdxDeductFetchError, (state: IDeductReducer, action) => {
        return {
            ...state,
            isFetch: false,
            // isFetchError: true,
            fetchError: action.payload!
        }
    })
)
const getDeductFeatureSelector = createFeatureSelector<IDeductReducer>('deductReducer');
export const getDeductIsFetch = createSelector(
    getDeductFeatureSelector,
    state => state.isFetch
)
export const getDeductIsFetchSuccess = createSelector(
    getDeductFeatureSelector,
    state => state.isFetchSuccesss
)
// export const getDeductIsFetchError = createSelector(
//     getDeductFeatureSelector,
//     state => state.isFetchError
// )
export const getDeductFetchErrorMessage = createSelector(
    getDeductFeatureSelector,
    state => state.fetchError
)