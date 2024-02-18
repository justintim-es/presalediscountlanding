import { createAction, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export const RDX_TOKEN_SET = 'RDX_TOKEN_SET';
export const rdxTokenSet = createAction(
    RDX_TOKEN_SET,
    props<IProps<string>>()
);