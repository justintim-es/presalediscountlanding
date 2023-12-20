import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IRegisterReducer } from "./reducer";

export const getRegisterFeatureState = createFeatureSelector<IRegisterReducer>('registerReducer');

export const getRegisterIsFetch = createSelector(
    getRegisterFeatureState,
    state => state.isFetch
)
export const getRegisterIsFetchSuccess = createSelector(
    getRegisterFeatureState,
    state => state.isFetchSuccess
)
export const getRegisterIsEmailFetchError = createSelector(
    getRegisterFeatureState,
    state => state.isEmailFetchError
)
export const getRegisterIsFirstPasswordFetchError = createSelector(
    getRegisterFeatureState,
    state => state.isFirstPasswordFetchError
)
export const getRegisterIsSecondPasswordFetchError = createSelector(
    getRegisterFeatureState,
    state => state.isSecondPasswordFetchError
)
export const getRegisterFetchErrorMessage = createSelector(
    getRegisterFeatureState,
    state => state.fetchErrorMessage
)
export const getRegisterIsRoutePlease = createSelector(
    getRegisterFeatureState,
    state => state.isRoutePlease
)
