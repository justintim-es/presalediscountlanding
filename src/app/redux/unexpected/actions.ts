import { createAction, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export const RDX_UNEXPECTED_IS_TRUE = 'RDX_UNEXPECTED_IS_TRUE';
export const rdxUnexpectedIsTrue = createAction(
    RDX_UNEXPECTED_IS_TRUE,
    props<IProps<string>>()
)
export const RDX_UNEXPECTED_FETCH = 'RDX_UNEXPECTED_FETCH';
export const rdxUnexpectedFetch = createAction(
    RDX_UNEXPECTED_FETCH,
    props<IProps<string>>()
)
export const RDX_UNEXPECTED_FETCH_SUCCESS = 'RDX_UNEXPECTED_FETCH_SUCCESS';
export const rdxUnexpectedFetchSuccess = createAction(
    RDX_UNEXPECTED_FETCH_SUCCESS
)
export const RDX_UNEXPECTED_FETCH_ERROR = 'RDX_UNEXPECTED_FETCH_ERROR';
export const rdxUnexpectedFetchError = createAction(
    RDX_UNEXPECTED_FETCH_ERROR
)