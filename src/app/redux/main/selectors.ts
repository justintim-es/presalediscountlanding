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
export const getMainIsLoginFetch = createSelector(
    getMainFeatureSelector,
    state => state.isLoginFetch
)
export const getMainIsLoginFetchSuccess = createSelector(
    getMainFeatureSelector,
    state => state.isLoginFetchSuccess
)
export const getMainLogin = createSelector(
    getMainFeatureSelector,
    state => state.login
)
export const getMainIsVisible = createSelector(
    getMainFeatureSelector,
    state => state.isVisible
)
export const getMainIsVisibleFetch = createSelector(
    getMainFeatureSelector,
    state => state.isVisibleFetch
)