import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ITokenReducer } from "./reducer";

export const getTokenFeatureSelector = createFeatureSelector<ITokenReducer>('tokenReducer');
export const getTokenToken = createSelector(
    getTokenFeatureSelector,
    state => state.token
)