import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface IOnboardReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string
}
export const onboardInitial: IOnboardReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: ''
}
export const RDX_ONBOARD_FETCH = 'RDX_ONBOARD_FETCH';
export const rdxOnboardFetch = createAction(
    RDX_ONBOARD_FETCH,
    props<IProps<string>>()
)
export const RDX_ONBOARD_FETCH_SUCCESS = 'RDX_ONBOARD_FETCH_SUCCESS';
export const rdxOnboardFetchSuccess = createAction(
    RDX_ONBOARD_FETCH_SUCCESS
)
export const RDX_ONBOARD_FETCH_ERROR = 'RDX_ONBOARD_FETCH_ERROR';
export const rdxOnboardFetchError = createAction(
    RDX_ONBOARD_FETCH_ERROR,
    props<IProps<string>>()
)
export const onboardReducer = createReducer(
    onboardInitial,
    on(rdxOnboardFetch, (state: IOnboardReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            fetchErrorMessage: ''       
        }
    }),
    on(rdxOnboardFetchSuccess, (state: IOnboardReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxOnboardFetchError, (state: IOnboardReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true
        }
    })
)
const getOnboardFeatureSelector = createFeatureSelector<IOnboardReducer>('onboardReducer');
export const getOnboardIsFetch = createSelector(
    getOnboardFeatureSelector,
    state => state.isFetch
)
export const getOnboardIsFetchSuccess = createSelector(
    getOnboardFeatureSelector,
    state => state.isFetchSuccess
)
export const getOnboardIsFetchError = createSelector(
    getOnboardFeatureSelector,
    state => state.isFetchError
)
export const getOnboardFetchErrorMessage = createSelector(
    getOnboardFeatureSelector,
    state => state.fetchErrorMessage
)