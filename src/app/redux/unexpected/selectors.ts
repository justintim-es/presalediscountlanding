import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUnexpectedReducer } from "./reducer";

export const getUnexpectedFeatureState = createFeatureSelector<IUnexpectedReducer>('unexpectedReducer');

export const getUnexpectedIs = createSelector(
    getUnexpectedFeatureState,
    state => state.is
)
export const getUnexpectedRoute = createSelector(
    getUnexpectedFeatureState,
    state => state.route
)
export const getUnexpectedIsFetch = createSelector(
    getUnexpectedFeatureState,
    state => state.isFetch
)
export const getUnexpectedIsFetchSuccess = createSelector(
    getUnexpectedFeatureState,
    state => state.isFetchSuccess
)
export const getUnexpectedIsFetchError = createSelector(
    getUnexpectedFeatureState,
    state => state.isFetchError
)