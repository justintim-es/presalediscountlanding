import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface ISearch {
    id: number;
    company_name: string;
}
export interface ISearchReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    searches: ISearch[]
}
export const searchInitial: ISearchReducer = {
    isFetch: false,
    isFetchSuccess: false,
    searches: []
}
export const RDX_SEARCH_FETCH = 'RDX_SEARCH_FETCH';
export const rdxSearchFetch = createAction(
    RDX_SEARCH_FETCH,
    props<IProps<any>>()
)
export const RDX_SEARCH_FETCH_SUCCESS = 'RDX_SEARCH_FETCH_SUCCESS';
export const rdxSearchFetchSuccess = createAction(
    RDX_SEARCH_FETCH_SUCCESS,
    props<IProps<ISearch[]>>()
)
export const searchReducer = createReducer(
    searchInitial,
    on(rdxSearchFetch, (state: ISearchReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            searches: []
        }
    }),
    on(rdxSearchFetchSuccess, (state: ISearchReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true,
            searches: action.payload!
        }
    })
)
const getSearchFeatureSelector = createFeatureSelector<ISearchReducer>('searchReducer');
export const getSearchIsFetch = createSelector(
    getSearchFeatureSelector,
    state => state.isFetch
)
export const getSearchIsFetchSuccess = createSelector(
    getSearchFeatureSelector,
    state => state.isFetchSuccess
)
export const getSearchSearches = createSelector(
    getSearchFeatureSelector,
    state => state.searches
)