import { createReducer, on } from "@ngrx/store";
import { ILoginDashboardFetch, rdxLoginDashboardFetch, rdxLoginDashboardFetchError, rdxLoginDashboardFetchSuccess, rdxLoginDashboardIsRouteThroughTrue } from "./actions";

export interface ILoginDashboardReducer {
    isFetch: boolean;
    isFetchSuccess: boolean;
    isFetchError: boolean;
    fetchErrorMessage: string;
    isRouteThrough: boolean;
}
export const loginDashboardInitial: ILoginDashboardReducer = {
    isFetch: false,
    isFetchSuccess: false,
    isFetchError: false,
    fetchErrorMessage: '',
    isRouteThrough: false
}
export const loginDashboardReducer = createReducer(
    loginDashboardInitial,
    on(rdxLoginDashboardFetch, (state: ILoginDashboardReducer) => {
        return {
            ...state,
            isFetch: true,
            isFetchSuccess: false,
            isFetchError: false,
            fetchErrorMessage: ''
        }
    }),
    on(rdxLoginDashboardFetchSuccess, (state: ILoginDashboardReducer) => {
        return {
            ...state,
            isFetch: false,
            isFetchSuccess: true
        }
    }),
    on(rdxLoginDashboardFetchError, (state: ILoginDashboardReducer, action) => {
        return {
            ...state,
            isFetch: false,
            isFetchError: true,
            fetchErrorMessage: action.payload!
        }
    }),
    on(rdxLoginDashboardIsRouteThroughTrue, (state: ILoginDashboardReducer, action) => {
        return {
            ...state,
            isRouteThrough: true
        }
    })
)