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
export const getRegisterIsFetchError = createSelector(
    getRegisterFeatureState,
    state => state.isFetchError
)
