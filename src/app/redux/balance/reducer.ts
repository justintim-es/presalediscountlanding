import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface ibalancereducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
    balance: number;
    isLatestFetch: boolean;
    isLatestFetchSuccess: boolean;
    isLatestFetchError: boolean;
    isResendFetch: boolean;
    isResendFetchSuccess: boolean;
    isResendFetchError: boolean;
}
export const balanceinitial: ibalancereducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: '',
    balance: 0,
    isLatestFetch: false,
    isLatestFetchSuccess: false,
    isLatestFetchError: false,
    isResendFetch: false,
    isResendFetchSuccess: false,
    isResendFetchError: false
}
export const RDX_BALANCE_FETCH = 'RDX_BALANCE_FETCH';
export const rdxBalanceFetch = createAction(
    RDX_BALANCE_FETCH,
    props<IProps<string>>()
)
export const RDX_BALANCE_FETCH_SUCCESS = 'RDX_BALANCE_FETCH_SUCCESS';
export const rdxBalanceFetchSuccess = createAction(
    RDX_BALANCE_FETCH_SUCCESS,
    props<IProps<number>>()
)
export const RDX_BALANCE_FETCH_ERROR = 'RDX_BALANCE_FETCH_ERROR';
export const rdxBalanceFetchError = createAction(
    RDX_BALANCE_FETCH_ERROR,
    props<IProps<string>>()
)
export const RDX_BALANCE_IS_LATEST = 'RDX_BALANCE_IS_LATEST';
export const rdxBalanceIsLatest = createAction(
    RDX_BALANCE_IS_LATEST,
    props<IProps<string>>()
)
export const RDX_BALANCE_IS_LATEST_SUCCESS = 'RDX_BALANCE_IS_LATEST_SUCCESS';
export const rdxBalanceIsLatestSuccess = createAction(
    RDX_BALANCE_IS_LATEST_SUCCESS
)
export const RDX_BALANCE_IS_LATEST_ERROR = 'RDX_BALANCE_IS_LATEST_ERROR';
export const rdxBalanceIsLatestError = createAction(
    RDX_BALANCE_IS_LATEST_ERROR
)
export const RDX_BALANCE_IS_RESEND_FETCH = 'RDX_BALANCE_IS_RESEND_FETCH';
export const rdxBalanceIsResendFetch = createAction(
    RDX_BALANCE_IS_RESEND_FETCH,
    props<IProps<string>>()
)
export const RDX_BALANCE_IS_RESEND_FETCH_SUCCESS = 'RDX_BALANCE_IS_RESEND_FETCH_SUCCESS';
export const rdxBalanceIsResendFetchSuccess = createAction(
    RDX_BALANCE_IS_RESEND_FETCH_SUCCESS
)
export const balanceReducer = createReducer(
    balanceinitial,
    on(rdxBalanceFetch, (state: ibalancereducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            balance: 0      
        }
    }),
    on(rdxBalanceFetchSuccess, (state: ibalancereducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
            balance: action.payload!
        }
    }),
    on(rdxBalanceFetchError, (state: ibalancereducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    }),
    on(rdxBalanceIsLatest, (state: ibalancereducer, action) => {
        return {
            ...state,
            isLatestFetch: true,
            isLatestFetchSuccess: false,
        }
    }),
    on(rdxBalanceIsLatestSuccess, (state: ibalancereducer, action) => {
        return {
            ...state,
            isLatestFetch: false,
            isLatestFetchSuccess: true
        }
    }),
    on(rdxBalanceIsLatestError, (state: ibalancereducer) => {
        return {
            ...state,
            isLatestFetch: false,
            isLatestFetchError: true
        }
    }),
    on(rdxBalanceIsResendFetch, (state: ibalancereducer) => {
        return {
            ...state,
            isResendFetch: true,
            isResendFetchSuccess: false,
        }
    }),
    on(rdxBalanceIsResendFetchSuccess, (state: ibalancereducer) => {
        return {
            ...state,
            isResendFetch: false,
            isResendFetchError: true,
        }
    })
)
const getBalanceFeatureSelector = createFeatureSelector<ibalancereducer>('balanceReducer');
export const getBalanceIsFetch = createSelector(
    getBalanceFeatureSelector,
    state => state.isFetch
)
export const getBalanceIsFetchSuccess = createSelector(
    getBalanceFeatureSelector,
    state => state.isFetchSuccess
)
export const getBalanceIsFetchError = createSelector(
    getBalanceFeatureSelector,
    state => state.isFetchError
)
export const getBalanceFetchErrorMessage = createSelector(
    getBalanceFeatureSelector,
    state => state.fetchErrorMessage
)
export const getBalanceBalance = createSelector(
    getBalanceFeatureSelector,
    state => state.balance
)
export const getBalanceIsLatestFetch = createSelector(
    getBalanceFeatureSelector,
    state => state.isLatestFetch
)
export const getBalanceIsLatestFetchSuccess = createSelector(
    getBalanceFeatureSelector,
    state => state.isLatestFetchSuccess
)
export const getBalanceIsLatestFetchError = createSelector(
    getBalanceFeatureSelector,
    state => state.isLatestFetchError
)
export const getBalanceIsResendFetch = createSelector(
    getBalanceFeatureSelector,
    state => state.isResendFetch
)