import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface ICheckoutReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean
    fetchErrorMessage: string;
    isResend: boolean;
    isResendSuccesss: boolean;
}
export const checkoutInitial: ICheckoutReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: '',
    isResend: false,
    isResendSuccesss: false
}
export const RDX_CHECKOUT_FETCH  = 'RDX_CHECKOUT_FETCH';
export const rdxCheckoutFetch = createAction(
    RDX_CHECKOUT_FETCH,
    props<IProps<string>>()
)
export const RDX_CHECKOUT_FETCH_SUCCESS  = 'RDX_CHECKOUT_FETCH_SUCCESS';
export const rdxCheckoutFetchSuccess = createAction(
    RDX_CHECKOUT_FETCH_SUCCESS
)
export const RDX_CHECKOUT_FETCH_ERROR  = 'RDX_CHECKOUT_FETCH_ERROR';
export const rdxCheckoutFetchError = createAction(
    RDX_CHECKOUT_FETCH_ERROR,
    props<IProps<string>>()
)
export const RDX_CHECKOUT_RESEND = 'RDX_CHECKOUT_RESEND';
export const rdxCheckoutResend = createAction(
    RDX_CHECKOUT_RESEND,
    props<IProps<string>>()
)
export const RDX_CHECKOUT_RESEND_SUCCESS = 'RDX_CHECKOUT_RESEND_SUCCESS';
export const rdxCheckoutResendSuccess = createAction(
    RDX_CHECKOUT_RESEND_SUCCESS,
)
export const checkoutReducer = createReducer(
    checkoutInitial,
    on(rdxCheckoutFetch, (state: ICheckoutReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchError: false,
            isFetchSuccess: false,
            fetchErrorMessage: ''
        }
    }),
    on(rdxCheckoutFetchSuccess, (state: ICheckoutReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxCheckoutFetchError, (state: ICheckoutReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    }),
    on(rdxCheckoutResend, (state: ICheckoutReducer) => {
        return {
            ...state,
            isResend: true,
            isResendSuccesss: false
        }
    }),
    on(rdxCheckoutResendSuccess, (state: ICheckoutReducer) => {
        return {
            ...state,
            isResend: false,
            isResendSuccesss: true
        }
    })
)
const getCheckoutFeatureSelector = createFeatureSelector<ICheckoutReducer>('checkoutReducer')
export const getCheckoutIsFetch = createSelector(
    getCheckoutFeatureSelector,
    state => state.isFetch
)
export const getCheckoutIsFetchSuccess = createSelector(
    getCheckoutFeatureSelector,
    state => state.isFetchSuccess
)
export const getCheckoutIsFetchError = createSelector(
    getCheckoutFeatureSelector,
    state => state.isFetchError
)
export const getCheckoutFetchErrorMessage = createSelector(
    getCheckoutFeatureSelector,
    state => state.fetchErrorMessage
)
export const getCheckoutIsResend = createSelector(
    getCheckoutFeatureSelector,
    state => state.isResend
)
export const getCheckoutIsResendSuccess = createSelector(
    getCheckoutFeatureSelector,
    state => state.isResendSuccesss
)