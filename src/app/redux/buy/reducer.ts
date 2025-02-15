import { createReducer, on } from "@ngrx/store";
import { Observable } from "rxjs";
import { IBuyCardsFetchSuccess, rdxBuyCardsFetch, rdxBuyCardsFetchError, rdxBuyCardsFetchSuccess } from "./actions";
import { IBuyCard } from "../interfaces";

export interface IBuyReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
    cards: IBuyCard[];
    companyName: string;
}
export const buyInitial: IBuyReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: '',
    cards: [],
    companyName: ''
}
export const buyReducer = createReducer(
    buyInitial,
    on(rdxBuyCardsFetch, (state: IBuyReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: true
        }
    }),
    on(rdxBuyCardsFetchSuccess, (state: IBuyReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
            companyName: action.payload!.shop,
            cards: action.payload!.cards
        }
    }),
    on(rdxBuyCardsFetchError, (state: IBuyReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true
        }
    })
)