import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IFetchErrorMessage } from "../deduct/reducer";
import { IProps } from "../interfaces";

export interface IResetReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    fetchError: IFetchErrorMessage;
}
export const resetIntial: IResetReducer = {
    isFetch: false,
    isFetchSuccess: false,
    fetchError: {
        is: false,
        formcontrol: '',
        message: ''
    }
}
export interface IResetFetch {
    first: string;
    second: string;
    token: string
}
export const RDX_RESET_FETCH = 'RDX_RESET_FETCH';
export const rdxResetFetch = createAction(
    RDX_RESET_FETCH,
    props<IProps<IResetFetch>>()
)
export const RDX_RESET_FETCH_SUCCESS = 'RDX_RESET_FETCH_SUCCESS';
export const rdxResetFetchSuccess = createAction(
    RDX_RESET_FETCH_SUCCESS,
)
export const RDX_RESET_FETCH_ERROR = 'RDX_RESET_FETCH_ERROR';
export const rdxResetFetchError = createAction(
    RDX_RESET_FETCH_ERROR,
    props<IProps<IFetchErrorMessage>>()
)
export const resetReducer = createReducer(
    resetIntial,
    on(rdxResetFetch, (state: IResetReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: true,
            fetchError: {
                is: false,
                formcontrol: '',
                message: ''
            }
        }    
    }),
    on(rdxResetFetchSuccess, (state: IResetReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
        }
    }),
    on(rdxResetFetchError, (state: IResetReducer, action) => {
        return {
            ...state,
            isFetch: false,
            fetchError: action.payload!
        }
    })
)
const getResetFeatureSelector = createFeatureSelector<IResetReducer>('resetReducer');
export const getResetIsFetch = createSelector(
    getResetFeatureSelector,
    state => state.isFetch
)
export const getResetIsFetchSuccess = createSelector(
    getResetFeatureSelector,
    state => state.isFetchSuccess
)
export const getResetFetchError = createSelector(
    getResetFeatureSelector,
    state => state.fetchError
)