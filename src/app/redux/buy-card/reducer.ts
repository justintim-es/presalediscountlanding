import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IBuyCard, IProps } from "../interfaces";

export interface IBuyCardReducer {
    isFetchInfo: boolean;
    isFetchInfoSuccess: boolean;
    card: IBuyCard;
    shopName: string;
    isProceed: boolean;
    isProceedSuccess: boolean;
    sessionurl: string;
}
export const buyCardInitial: IBuyCardReducer = {
    isFetchInfo: false,
    isFetchInfoSuccess: false,
    card: {
        discount: 0,
        value: 0,
        id: 0
    },
    shopName: '',
    isProceed: false,
    isProceedSuccess: false,
    sessionurl: ''
}
export interface IBuyCardFetchInfo {
    shopId: number;
    cardId: number;
}
export const RDX_BUY_CARD_FETCH_INFO = 'RDX_BUY_CARD_FETCH_INFO';
export const rdxBuyCardFetchInfo = createAction(
    RDX_BUY_CARD_FETCH_INFO,
    props<IProps<IBuyCardFetchInfo>>()
)
export const RDX_BUY_CARD_FETCH_INFO_SUCCESS = 'RDX_BUY_CARD_FETCH_INFO_SUCCESS';
export const rdxBuyCardFetchInfoSuccess = createAction(
    RDX_BUY_CARD_FETCH_INFO_SUCCESS,
    props<IProps<{ card: IBuyCard, shop: string }>>()
)
export interface IBuyCardProceed {
    cardId: number;
    email: string;
}
export const RDX_BUY_CARD_PROCEED = 'RDX_BUY_CARD_PROCEED';
export const rdxBuyCardProceed = createAction(
    RDX_BUY_CARD_PROCEED,
    props<IProps<IBuyCardProceed>>()
)
export const RDX_BUY_CARD_PROCEED_SUCCESS = 'RDX_BUY_CARD_PROCEED_SUCCESS';
export const rdxBuyCardProceedSuccess = createAction(
    RDX_BUY_CARD_PROCEED_SUCCESS,
    props<IProps<string>>()
)   
export const buyCardReducer = createReducer(
    buyCardInitial,
    on(rdxBuyCardFetchInfo, (state: IBuyCardReducer) => {
        return {
            ...state,
            isFetchInfo: true,
            isFetchInfoError: false,
            isFetchInfoSuccess: false
        }
    }),
    on(rdxBuyCardFetchInfoSuccess, (state: IBuyCardReducer, action) => {
        return {
            ...state,
            isFetchInfo: false,
            isFetchInfoSuccess: true,
            card: action.payload!.card,
            shopName: action.payload!.shop
        }
    }),
    on(rdxBuyCardProceed, (state: IBuyCardReducer) => {
        return {
            ...state,
            isProceed: true,
            isProceedSuccess: false
        }
    }),
    on(rdxBuyCardProceedSuccess, (state: IBuyCardReducer, action) => {
        return {
            ...state,
            isProceed: false,
            isProceedSuccess: true,
            sessionurl: action.payload!
        }    
    })
)
const getBuyCardFeatureSelector = createFeatureSelector<IBuyCardReducer>('buyCardReducer');
export const getBuyCardIsFetchInfo = createSelector(
    getBuyCardFeatureSelector,
    state => state.isFetchInfo
)
export const getBuyCardIsFetchInfoSuccess = createSelector(
    getBuyCardFeatureSelector,
    state => state.isFetchInfoSuccess
)
export const getBuyCardCard = createSelector(
    getBuyCardFeatureSelector,
    state => state.card
)
export const getBuyCardShopName = createSelector(
    getBuyCardFeatureSelector,
    state => state.shopName
)
export const getBuyCardIsProceed = createSelector(
    getBuyCardFeatureSelector,
    state => state.isProceed
)
export const getBuyCardIsProceedSuccess = createSelector(
    getBuyCardFeatureSelector,
    state => state.isProceedSuccess
)
export const getBuyCardSessionUrl = createSelector(
    getBuyCardFeatureSelector,
    state => state.sessionurl
)