import { createAction, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export const RDX_MAIN_MENU_TOGGLE = 'RDX_MAIN_MENU_TOGGLE';
export const rdxMainMenuToggle = createAction(
    RDX_MAIN_MENU_TOGGLE
)

export const RDX_MAIN_CARDS_FETCH = 'RDX_MAIN_CARDS_FETCH';
export const rdxMainCardsFetch = createAction(
    RDX_MAIN_CARDS_FETCH,
)
export interface IMainCardsFetchSuccess {
    value: number;
    discount: number;
}
export const RDX_MAIN_CARDS_FETCH_SUCCESS = 'RDX_MAIN_CARD_FETCH_SUCCESS';
export const rdxMainCardsFetchSuccess = createAction(
    RDX_MAIN_CARDS_FETCH_SUCCESS,
    props<IProps<IMainCardsFetchSuccess[]>>()
)

