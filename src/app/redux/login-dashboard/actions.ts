import { createAction, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface ILoginDashboardFetch {
    e_mail: string;
    first_password: string;
    second_password: string;
}
export const RDX_LOGIN_DASHBOARD_FETCH = 'RDX_LOGIN_DASHBOARD_FETCH';
export const rdxLoginDashboardFetch = createAction(
    RDX_LOGIN_DASHBOARD_FETCH,
    props<IProps<ILoginDashboardFetch>>()
)
export interface ILoginDashboardFetchSuccess {
    token: string;
    id: number;
}
export const RDX_LOGIN_DASHBOARD_FETCH_SUCCESS = 'RDX_LOGIN_DASHBOARD_FETCH_SUCCESS';
export const rdxLoginDashboardFetchSuccess = createAction(
    RDX_LOGIN_DASHBOARD_FETCH_SUCCESS,
    props<IProps<ILoginDashboardFetchSuccess>>()
)
export const RDX_LOGIN_DASHBOARD_FETCH_ERROR = 'RDX_LOGIN_DASHBOARD_FETCH_ERROR';
export const rdxLoginDashboardFetchError = createAction(
    RDX_LOGIN_DASHBOARD_FETCH_ERROR,
    props<IProps<string>>()
)
export const RDX_LOGIN_DASHBOARD_IS_ROUTE_THROUGH_TRUE = 'RDX_LOGIN_DASHBOARD_IS_ROUTE_THROUGH_TRUE';
export const rdxLoginDashboardIsRouteThroughTrue = createAction(
    RDX_LOGIN_DASHBOARD_IS_ROUTE_THROUGH_TRUE
)