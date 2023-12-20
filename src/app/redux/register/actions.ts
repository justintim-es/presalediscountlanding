import { createAction, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface IRegisterFetch {
    company_name: string;
    e_mail: string;
    first_password: string;
    second_password: string;
}
export const RDX_REGISTER_FETCH = 'RDX_REGISTER_FETCH';
export const rdxRegisterFetch = createAction(
    RDX_REGISTER_FETCH,
    props<IProps<IRegisterFetch>>()
)
export interface IRegisterFetchError {
    error: string;
    message: string
}
export const RDX_REGISTER_FETCH_SUCCESS = 'RDX_REGISTER_FETCH_SUCCESS';
export const rdxRegisterFetchSuccess = createAction(
    RDX_REGISTER_FETCH_SUCCESS,
)
export const RDX_REGISTER_FETCH_ERROR = 'RDX_REGISTER_FETCH_ERROR';
export const rdxRegisterFetchError = createAction(
    RDX_REGISTER_FETCH_ERROR,
    props<IProps<IRegisterFetchError>>()
)
export const RDX_REGISTER_IS_ROUTE_PLEASE_TRUE = 'RDX_REGISTER_IS_ROUTE_PLEASE_TRUE';
export const rdxRegisterIsRoutePleaseTrue = createAction(
    RDX_REGISTER_IS_ROUTE_PLEASE_TRUE
)