import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBuyReducer } from "./reducer";

export const getBuyFeatureSelector = createFeatureSelector<IBuyReducer>('buyReducer');
export const getBuyIsFetch = createSelector(
    getBuyFeatureSelector,
    state => state.isFetch
)
export const getBuyIsFetchSuccess = createSelector(
    getBuyFeatureSelector,
    state => state.isFetchSuccess
)
export const getBuyIsFetchError = createSelector(
    getBuyFeatureSelector,
    state => state.isFetchError
)
export const getBuyFetchErrorMessage = createSelector(
    getBuyFeatureSelector,
    state => state.fetchErrorMessage
)
export const getBuyCards = createSelector(
    getBuyFeatureSelector,
    state => state.cards
)
export const getBuyCompanyName = createSelector(
    getBuyFeatureSelector,
    state => state.companyName
)