import { createReducer, on } from "@ngrx/store";
import { rdxLandingHeroHalfSlideFour, rdxLandingHeroHalfSlideOne, rdxLandingHeroHalfSlideThree, rdxLandingHeroHalfSlideTwo, rdxLandingPresaleDiscountElectrocuteOff, rdxLandingPresaleDiscountElectrocuteOn } from "./actions";

export interface ILandingReducer {
    topState: string;
    bottomState: string;
    topBelowState: string;
    bottomBelowState: string;
    isTop: boolean;
    isTopBelow: boolean;
    isBottom: boolean;
    isBottomBelow: boolean;
    PDState: string;
    firstBelowSlideValue: string;
    secondBelowSlideValue: string;
}
export const landingInitiail: ILandingReducer = {
    topState: 'invision',
    bottomState: 'left',
    topBelowState: 'invision',
    bottomBelowState: 'right',
    isTop: true,
    isTopBelow: true,
    isBottom: false,
    isBottomBelow: false,
    PDState: 'visible',
    firstBelowSlideValue: '€100 => €110',
    secondBelowSlideValue: '€1000 => €1100'
}
export const landingReducer = createReducer(
    landingInitiail,
    on(rdxLandingPresaleDiscountElectrocuteOff, (state: ILandingReducer) => {
        return {
            ...state,
            PDState: 'invisible'
        }
    }),
    on(rdxLandingPresaleDiscountElectrocuteOn, (state: ILandingReducer) => {
        return {
            ...state,
            PDState: 'visible'
        }
    }),
    on(rdxLandingHeroHalfSlideOne, (state: ILandingReducer) => {
        return {
            ...state,
            topState: 'prepared',
            isBottom: true,
            topBelowState: 'prepared',
            isBottomBelow: true,       
        }
    }),
    on(rdxLandingHeroHalfSlideTwo, (state: ILandingReducer) => {
        return {
            ...state,
            topState: 'right-absolute',
            bottomState: 'invision',
            topBelowState: 'left-absolute',
            bottomBelowState: 'invision',
        }
    }),
    on(rdxLandingHeroHalfSlideThree, (state: ILandingReducer) => {
        return {
            ...state,
            isTop: false,
            isTopBelow: false,
        }
    }),
    on(rdxLandingHeroHalfSlideFour, (state: ILandingReducer) => {
        return {
            ...state,
            isTop: true,
            isBottom: false,
            topState: 'invision',
            bottomState: 'left',
            isTopBelow: true,
            isBottomBelow: false,
            topBelowState: 'invision',
            bottomBelowState: 'right',
            firstBelowSlideValue: state.secondBelowSlideValue,
            secondBelowSlideValue: state.firstBelowSlideValue
        }
    }),
    on(rdxLandingPresaleDiscountElectrocuteOff, (state: ILandingReducer) => {
        return {
            ...state,
            pdState: 'invisible'
        }
    })
)