import { createReducer, on } from "@ngrx/store";
import { IMainCreateCardFetch, rdxMainCreateCardFetch, rdxMainCreateCardFetchError, rdxMainCreateCardFetchSuccess, rdxMainCreateCardReset, rdxMainCreateCardRouteBack } from "./actions";

export interface IMainCreateCardReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
    isRouteBack: boolean;
}
export const mainCreateCardInitial: IMainCreateCardReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: '',
    isRouteBack: false
}
export const mainCreateCardReducer = createReducer(
    mainCreateCardInitial,
    on(rdxMainCreateCardFetch, (state: IMainCreateCardReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            fetchErrorMessage: ''
        }
    }),
    on(rdxMainCreateCardFetchSuccess, (state: IMainCreateCardReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
        }
    }),
    on(rdxMainCreateCardFetchError, (state: IMainCreateCardReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    }),
    on(rdxMainCreateCardRouteBack, (state: IMainCreateCardReducer) => {
        return {
            ...state,
            isRouteBack: true
        }
    }),
    on(rdxMainCreateCardReset, () => {
        return mainCreateCardInitial;
    })
)