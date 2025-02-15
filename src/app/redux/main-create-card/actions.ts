import { createAction, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface IMainCreateCardFetch {
    value: number;
    discount: number;
}
export const RDX_MAIN_CREATE_CARD_FETCH = 'RDX_MAIN_CREATE_CARD_FETCH';
export const rdxMainCreateCardFetch = createAction(
    RDX_MAIN_CREATE_CARD_FETCH,
    props<IProps<IMainCreateCardFetch>>()
)
export const RDX_MAIN_CREATE_CARD_FETCH_SUCCESS = 'RDX_MAIN_CREATE_CARD_FETCH_SUCCESS';
export const rdxMainCreateCardFetchSuccess = createAction(
    RDX_MAIN_CREATE_CARD_FETCH_SUCCESS,
)
export const RDX_MAIN_CREATE_CARD_FETCH_ERROR = 'RDX_MAIN_CREATE_CARD_FETCH_ERROR';
export const rdxMainCreateCardFetchError = createAction(
    RDX_MAIN_CREATE_CARD_FETCH_ERROR,
    props<IProps<string>>()
)
export const RDX_MAIN_CREATE_CARD_ROUTE_BACK = 'RDX_MAIN_CREATE_CARD_ROUTE_BACK';
export const rdxMainCreateCardRouteBack = createAction(
    RDX_MAIN_CREATE_CARD_ROUTE_BACK
)
export const RDX_MAIN_CREATE_CARD_RESET = 'RDX_MAIN_CREATE_CARD_RESET';
export const rdxMainCreateCardReset = createAction(
    RDX_MAIN_CREATE_CARD_RESET
)
