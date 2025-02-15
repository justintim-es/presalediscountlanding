import { createReducer, on } from "@ngrx/store";
import { rdxTokenSet } from "./actions";

export interface ITokenReducer {
    token: string;
    has: boolean;
}
export const tokenInitial: ITokenReducer = {
    token: '',
    has: false
}
export const tokenReducer = createReducer(
    tokenInitial,
    on(rdxTokenSet, (state: ITokenReducer, action) => {
        return {
            ...state,
            token: action.payload!,
            has: true
        }   
    }),
)
