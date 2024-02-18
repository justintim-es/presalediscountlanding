import { createReducer, on } from "@ngrx/store";
import { IMainCardsFetchSuccess, rdxMainCardsFetch, rdxMainCardsFetchSuccess, rdxMainMenuToggle } from "./actions";



export interface IMainReducer {
    isMenu: boolean;
    isFetch: boolean;
    isFetchSuccess: boolean;
    cards: IMainCardsFetchSuccess[];
}
export const mainInitial: IMainReducer = {
    isMenu: true,
    isFetch: false,
    isFetchSuccess: false,
    cards: []
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
    })

)