import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IMainReducer } from "./reducer";

export const getMainFeatureSelector = createFeatureSelector<IMainReducer>('mainReducer');

export const getMainIsMenu = createSelector(
    getMainFeatureSelector,
    state => state.isMenu
)
export const getMainIsFetch = createSelector(
    getMainFeatureSelector,
    state => state.isFetch
)
export const getMainIsFetchSuccess = createSelector(
    getMainFeatureSelector,
    state => state.isFetchSuccess
)
export const getMainCards = createSelector(
    getMainFeatureSelector,
    state => state.cards
)