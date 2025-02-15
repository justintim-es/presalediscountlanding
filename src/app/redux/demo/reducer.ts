import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IProps } from "../interfaces";

export interface idemoreducer {
    isfetch: boolean;
    isfetchsuccess: boolean;
    url: string;
}
export const demoinitial: idemoreducer = {
    isfetch: false,
    isfetchsuccess: false,
    url: ''
}
export const rdxdemofetch = 'rdxdemofetch';
export const rdxdemofetcha = createAction(
    rdxdemofetch,
    props<IProps<number>>()
)
export const rdxdemofetchsuccess = 'rdxdemofetchsuccess';
export const rdxdemofetchsuccessa = createAction(
    rdxdemofetchsuccess,
    props<IProps<string>>()
)
export const demoreducer = createReducer(
    demoinitial,
    on(rdxdemofetcha, (state: idemoreducer) => {
        return {
            ...state,
            isfetch: true,
            isfetchsuccess: false,
            url: ''
        }    
    }),
    on(rdxdemofetchsuccessa, (state: idemoreducer, action) => {
        return {
            ...state,
            isfetch: false,
            isfetchsuccess: true,
            url: action.payload!
        }
    })

)
export const demofeatureselector = createFeatureSelector<idemoreducer>('demoreducer');
export const getdemoisfetch = createSelector(
    demofeatureselector,
    state => state.isfetch
)
export const getdemoisfetchsuccess = createSelector(
    demofeatureselector,
    state => state.isfetchsuccess
)

export const getdemourl = createSelector(
    demofeatureselector,
    state => state.url
)