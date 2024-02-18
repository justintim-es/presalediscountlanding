import { createReducer, on } from "@ngrx/store";
import { rdxTokenSet } from "./actions";

export interface ITokenReducer {
    token: string;
}
export const tokenInitial: ITokenReducer = {
    token: ''
}
export const tokenReducer = createReducer(
    tokenInitial,
    on(rdxTokenSet, (state: ITokenReducer, action) => {
        return {
            ...state,
            token: action.payload!
        }   
    })
)