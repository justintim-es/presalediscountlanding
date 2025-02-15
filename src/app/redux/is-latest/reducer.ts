import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";
import { ILandingReducer } from "../landing/reducer";

export interface IIsLatestReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
}
export const isLatestInitial: IIsLatestReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false
}
export const RDX_IS_LATEST_FETCH = 'RDX_IS_LATEST_FETCH';
export const rdxIsLatestFetch = createAction(
    RDX_IS_LATEST_FETCH,
    props<IProps<string>>()
)
export const RDX_IS_LATEST_FETCH_SUCCESS = 'RDX_IS_LATEST_FETCH_SUCCESS';
export const rdxIsLatestFetchSuccess = createAction(
    RDX_IS_LATEST_FETCH_SUCCESS,
)
export const RDX_IS_LATEST_FETCH_ERROR = 'RDX_IS_LATEST_FETCH_ERROR';
export const rdxIsLatestFetchError = createAction(
    RDX_IS_LATEST_FETCH_ERROR,
)
export const isLatestReducer = createReducer(
    isLatestInitial,
    on(rdxIsLatestFetch, (state: IIsLatestReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false
        }
    }),
    on(rdxIsLatestFetchSuccess, (state: IIsLatestReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
        }
    }),
    on(rdxIsLatestFetchError, (state: IIsLatestReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true
        }
    })
)
const getIsLatestFeatureSelector = createFeatureSelector<IIsLatestReducer>('isLatestReducer');
export const getIsLatestIsFetch = createSelector(
    getIsLatestFeatureSelector,
    state => state.isFetch
)
export const getIsLatestIsFetchSuccess = createSelector(
    getIsLatestFeatureSelector,
    state => state.isFetchSuccess
)
export const getIsLatestIsFetchError = createSelector(
    getIsLatestFeatureSelector,
    state => state.isFetchError
)