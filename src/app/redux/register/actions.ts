import { createAction, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface IRegisterFetch {
    cn: string;
    em: string;
    fpw: string;
    spw: string;
}
export const RDX_REGISTER_FETCH = 'RDX_REGISTER_FETCH';
export const rdxRegisterFetch = createAction(
    RDX_REGISTER_FETCH,
    props<IProps<IRegisterFetch>>()
)
export const RDX_REGISTER_FETCH_SUCCESS = 'RDX_REGISTER_FETCH_SUCCESS';
export const rdxRegisterFetchSuccess = createAction(
    RDX_REGISTER_FETCH_SUCCESS
)
export const RDX_REGISTER_FETCH_ERROR = 'RDX_REGISTER_FETCH_ERROR';
export const rdxRegisterFetchError = createAction(
    RDX_REGISTER_FETCH_ERROR,
    props<IProps<string>>()
)