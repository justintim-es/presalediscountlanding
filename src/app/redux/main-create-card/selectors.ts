import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainCreateCardReducer } from "./reducer";

export const getMainCreateCardFeatureStateSelector = createFeatureSelector<IMainCreateCardReducer>('mainCreateCardReducer');
export const getMainCreateCardIsFetch = createSelector(
    getMainCreateCardFeatureStateSelector,
    state => state.isFetch
)
export const getMainCreateCardIsFetchSuccess = createSelector(
    getMainCreateCardFeatureStateSelector,
    state => state.isFetchSuccess
)
export const getMainCreateCardIsFetchError = createSelector(
    getMainCreateCardFeatureStateSelector,
    state => state.isFetchError
)
export const getMainCreateCardFetchErrorMessage = createSelector(
    getMainCreateCardFeatureStateSelector,
    state => state.fetchErrorMessage
)
export const getMainCreateCardRouteBack = createSelector(
    getMainCreateCardFeatureStateSelector,
    state => state.isRouteBack
)