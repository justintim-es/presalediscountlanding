import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILoginDashboardReducer } from "./reducer";

export const getLoginDashboardFeatureSelector = createFeatureSelector<ILoginDashboardReducer>('loginDashboardReducer');
export const getLoginDashboardIsFetch = createSelector(
    getLoginDashboardFeatureSelector,
    state => state.isFetch
)
export const getLoginDashboardIsFetchSuccess = createSelector(
    getLoginDashboardFeatureSelector,
    state => state.isFetchSuccess
)
export const getLoginDashboardIsFetchError = createSelector(
    getLoginDashboardFeatureSelector,
    state => state.isFetchError
)
export const getLoginDashboardFetchErrorMessage = createSelector(
    getLoginDashboardFeatureSelector,
    state => state.fetchErrorMessage
)
export const getLoginDashboardIsRouteThrough = createSelector(
    getLoginDashboardFeatureSelector,
    state => state.isRouteThrough
)