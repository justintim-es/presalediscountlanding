import { createAction, props } from "@ngrx/store";
import { IBuyCard, IProps } from "../interfaces";

export const RDX_BUY_CARDS_FETCH = 'RDX_BUY_CARDS_FETCH';
export const rdxBuyCardsFetch = createAction(
    RDX_BUY_CARDS_FETCH,
    props<IProps<number>>()
)

export interface IBuyCardsFetchSuccess {
    shop: string;
    cards: IBuyCard[];
}
export const RDX_BUY_CARDS_FETCH_SUCCESS = 'RDX_BUY_CARDS_FETCH_SUCCESS';
export const rdxBuyCardsFetchSuccess = createAction(
    RDX_BUY_CARDS_FETCH_SUCCESS,
    props<IProps<IBuyCardsFetchSuccess>>()
)
export const RDX_BUY_CARDS_FETCH_ERROR = 'RDX_BUY_CARDS_FETCH_ERROR';
export const rdxBuyCardsFetchError = createAction(
    RDX_BUY_CARDS_FETCH_ERROR
)