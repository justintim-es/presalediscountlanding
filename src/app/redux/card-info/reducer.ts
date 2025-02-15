import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface ICardInfoReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    data: ICardInfoFetchSuccess;
    isDelete: boolean;
    isDeleteSuccess: boolean;
}
export const cardInfoInitial: ICardInfoReducer = {
    isFetch: false,
    isFetchSuccess: false,
    data: {
        sold: 0,
        transactions: [],
        can_destroy: false
    },
    isDelete: false,
    isDeleteSuccess: false
}
export const RDX_CARD_INFO_FETCH = 'RDX_CARD_INFO_FETCH';
export const rdxCardInfoFetch = createAction(
    RDX_CARD_INFO_FETCH,
    props<IProps<number>>()
)
export interface ICardInfoFetchSuccessTransaction {
    value: number;
    date: Date;
}
export interface ICardInfoFetchSuccess {
    sold: number
    transactions: ICardInfoFetchSuccessTransaction[];
    can_destroy: boolean
}
export const RDX_CARD_INFO_FETCH_SUCCESS = 'RDX_CARD_INFO_FETCH_SUCCESS';
export const rdxCardInfoFetchSuccess = createAction(
    RDX_CARD_INFO_FETCH_SUCCESS,
    props<IProps<ICardInfoFetchSuccess>>()
)
export const RDX_CARD_INFO_DELETE = 'RDX_CARD_INFO_DELETE';
export const rdxCardInfoDelete = createAction(
    RDX_CARD_INFO_DELETE,
    props<IProps<number>>()
)
export const RDX_CARD_INFO_DELETE_SUCCESS = 'RDX_CARD_INFO_DELETE_SUCCESS';
export const rdxCardInfoDeleteSuccess = createAction(
    RDX_CARD_INFO_DELETE_SUCCESS
)
export const cardInfoReducer = createReducer(
    cardInfoInitial,
    on(rdxCardInfoFetch, (state: ICardInfoReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            data: {
                sold: 0,
                transactions: [],
                can_destroy: false
            }
        }
    }),
    on(rdxCardInfoFetchSuccess, (state: ICardInfoReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
            data: action.payload!
        }
    }),
    on(rdxCardInfoDelete, (state: ICardInfoReducer) => {
        return {
            ...state,
            isDelete: true,
            isDeleteSuccess: false
        }
    }),
    on(rdxCardInfoDeleteSuccess, (state: ICardInfoReducer) => {
        return {
            ...state,
            isDelete: false,
            isDeleteSuccess: true
        }
    })
)
export const getCardInfoFeatureSelector = createFeatureSelector<ICardInfoReducer>('cardInfoReducer');
export const getCardInfoIsFetch = createSelector(
    getCardInfoFeatureSelector,
    state => state.isFetch
)
export const getCardInfoIsFetchSuccess = createSelector(
    getCardInfoFeatureSelector,
    state => state.isFetchSuccess
)
export const getCardInfoData = createSelector(
    getCardInfoFeatureSelector,
    state => state.data
)
export const getCardInfoIsDelete = createSelector(
    getCardInfoFeatureSelector,
    state => state.isDelete
)
export const getCardInfoIsDeleteSuccess = createSelector(
    getCardInfoFeatureSelector,
    state => state.isDeleteSuccess
)