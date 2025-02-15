import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";


export interface IForgotReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
}
export const forgotInitial: IForgotReducer = {
    isFetch: false,
    isFetchSuccess: false
}
export const RDX_FORGOT_FETCH = 'RDX_FORGOT_FETCH';
export const rdxForgotFetch = createAction(
    RDX_FORGOT_FETCH,
    props<IProps<string>>()
)
export const RDX_FORGOT_FETCH_SUCCESS = 'RDX_FORGOT_FETCH_SUCCESS';
export const rdxForgotFetchSuccess = createAction(
    RDX_FORGOT_FETCH_SUCCESS
)
export const forgotReducer = createReducer(
    forgotInitial,
    on(rdxForgotFetch, (state: IForgotReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false
        }    
    }),
    on(rdxForgotFetchSuccess, (state: IForgotReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    })
)
const getForgotFeatureSelector = createFeatureSelector<IForgotReducer>('forgotReducer');
export const getForgotIsFetch = createSelector(
    getForgotFeatureSelector,
    state => state.isFetch
)
export const getForgotIsFetchSuccess = createSelector(
    getForgotFeatureSelector,
    state => state.isFetchSuccess
)