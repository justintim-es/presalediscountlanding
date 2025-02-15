import { createReducer, on } from "@ngrx/store";
import { IMainCardsFetchSuccess, rdxMainCardsFetch, rdxMainCardsFetchSuccess, rdxMainLogin, rdxMainLoginSuccess, rdxMainMenuToggle } from "./actions";



export interface IMainReducer {
    isMenu: boolean;
    isFetch: boolean;
    isFetchSuccess: boolean;
    cards: IMainCardsFetchSuccess[];
    isLoginFetch: boolean;
    isLoginFetchSuccess: boolean;
    login: string;
    isVisible: boolean;
    isVisibleFetch: boolean;
}
export const mainInitial: IMainReducer = {
    isMenu: true,
    isFetch: false,
    isFetchSuccess: false,
    cards: [],
    isLoginFetch: false,
    isLoginFetchSuccess: false,
    isVisible: false,
    isVisibleFetch: false,
    login: ''
}
export const mainReducer = createReducer(
    mainInitial,
    on(rdxMainMenuToggle, (state: IMainReducer) => {
        return {
            ...state,
            isMenu: !state.isMenu
        }
    }),
    on(rdxMainCardsFetch, (state: IMainReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false
        }
    }),
    on(rdxMainCardsFetchSuccess, (state: IMainReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
            cards: action.payload!
        }
    }),
    on(rdxMainLogin, (state: IMainReducer) => {
        return {
            ...state,
            isLoginFetch: true,
            isLoginFetchSuccess: false
        }
    }),
    on(rdxMainLoginSuccess, (state: IMainReducer, action) => {
        return {
            ...state,
            isLoginFetch: false,
            isLoginFetchSuccess: true,
            login: action.payload!
        }
    })

)