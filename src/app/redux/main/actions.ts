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
    id: number;
    value: number;
    discount: number;
    is_visible: boolean;
    can_destroy: boolean;
}
export const RDX_MAIN_CARDS_FETCH_SUCCESS = 'RDX_MAIN_CARD_FETCH_SUCCESS';
export const rdxMainCardsFetchSuccess = createAction(
    RDX_MAIN_CARDS_FETCH_SUCCESS,
    props<IProps<IMainCardsFetchSuccess[]>>()
)
export const RDX_MAIN_LOGIN = 'RDX_MAIN_LOGIN';
export const rdxMainLogin = createAction(
    RDX_MAIN_LOGIN,
)
export const RDX_MAIN_LOGIN_SUCCESS = 'RDX_MAIN_LOGIN_SUCCESS';
export const rdxMainLoginSuccess = createAction(
    RDX_MAIN_LOGIN_SUCCESS,
    props<IProps<string>>()
)
export const RDX_MAIN_IS_VISIBLE_FETCH = 'RDX_MAIN_IS_VISIBLE_FETCH';
export const rdxMainIsVisibleFetch = createAction(
    RDX_MAIN_IS_VISIBLE_FETCH,
    props<IProps<number>>()
)
export const RDX_MAIN_IS_VISIBLE_FETCH_SUCCESS = 'RDX_MAIN_IS_VISIBLE_FETCH_SUCCESS';
export const rdxMainIsVisibleFetchSuccess = createAction(
    RDX_MAIN_IS_VISIBLE_FETCH_SUCCESS
)

