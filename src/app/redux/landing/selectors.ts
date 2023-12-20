import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ILandingReducer } from "./reducer";

export const getLandingFeatureState = createFeatureSelector<ILandingReducer>('landingReducer');

export const getLandingPDState = createSelector(
    getLandingFeatureState,
    state => state.PDState
)

export const getLandingTopState = createSelector(
    getLandingFeatureState,
    state => state.topState
)
export const getLandingBottomState = createSelector(
    getLandingFeatureState,
    state => state.bottomState
)
export const getLandingTopBelowState = createSelector(
    getLandingFeatureState,
    state => state.topBelowState
)
export const getLandingBottomBelowState = createSelector(
    getLandingFeatureState,
    state => state.bottomBelowState
)
export const getLandingIsTop = createSelector(
    getLandingFeatureState,
    state => state.isTop
)
export const getLandingIsTopBelow = createSelector(
    getLandingFeatureState,
    state => state.isTopBelow
)
export const getLandingIsBottom = createSelector(
    getLandingFeatureState,
    state => state.isBottom
)
export const getLandingIsBottomBelow = createSelector(
    getLandingFeatureState,
    state => state.isBottomBelow
)
export const getLandingFirstBelowSlideValue = createSelector(
    getLandingFeatureState,
    state => state.firstBelowSlideValue
)
export const getLandingSecondBelowSlideValue = createSelector(
    getLandingFeatureState,
    state => state.secondBelowSlideValue
)
export const getLandingIsAlive = createSelector(
    getLandingFeatureState,
    state => state.isAlive
)