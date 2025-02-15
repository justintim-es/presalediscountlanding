import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface ILoginQRReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    code: string;
}
export const loginQRInitial: ILoginQRReducer = {
    isFetch: false,
    isFetchSuccess: false,
    code: ''
}
export const RDX_LOGIN_QR_FETCH = 'RDX_LOGIN_QR_FETCH';
export const rdxLoginQrFetch = createAction(
    RDX_LOGIN_QR_FETCH
)
export const RDX_LOGIN_QR_FETCH_SUCCESS = 'RDX_LOGIN_QR_FETCH_SUCCESS';
export const rdxLoginQrFetchSuccess = createAction(
    RDX_LOGIN_QR_FETCH_SUCCESS,
    props<IProps<string>>()
)
export const loginQRReducer = createReducer(
    loginQRInitial,
    on(rdxLoginQrFetch, (state: ILoginQRReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            code: ''
        }   
    }),
    on(rdxLoginQrFetchSuccess, (state: ILoginQRReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
            code: action.payload!
        }
    })
)
const loginQRFeatureSelector = createFeatureSelector<ILoginQRReducer>('loginQRReducer');
export const loginQRIsFetch = createSelector(
    loginQRFeatureSelector,
    state => state.isFetch
)
export const loginQRIsFetchSuccess = createSelector(
    loginQRFeatureSelector,
    state => state.isFetchSuccess
)
export const loginQRCode = createSelector(
    loginQRFeatureSelector,
    state => state.code
)