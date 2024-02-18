import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IConfirmReducer } from "./reducer";

export const getConfirmFeatureSelector = createFeatureSelector<IConfirmReducer>('confirmReducer');

export const getConfirmIsFetch = createSelector(
    getConfirmFeatureSelector,
    state => state.isFetch
)
export const getConfirmIsFetchSuccess = createSelector(
    getConfirmFeatureSelector,
    state => state.isFetchSuccess
)
export const getConfirmIsFetchError = createSelector(
    getConfirmFeatureSelector,
    state => state.isFetchError
)
export const getConfirmFetchErrorMessage = createSelector(
    getConfirmFeatureSelector,
    state => state.fetchErrorMessage
)
export const getConfirmIsRouteLoginTrue = createSelector(
    getConfirmFeatureSelector,
    state => state.isRouteLogin
)