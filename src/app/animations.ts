import { animate, state, style, transition, trigger } from "@angular/animations";

export const heroHalfSlide = trigger('heroHalfSlide', [
    state('invision', style({
        transform: 'translateX(0)',
    })),
    state('prepared', style({
        transform: 'translateX(0)',
        position: 'absolute',
        minWidth: '100%'
    })),
    state('left-absolute', style({
        transform: 'translateX(-100%)',
        position: 'absolute',
        minWidth: '100%'
    })),
    state('right-absolute', style({
        transform: 'translateX(100%)',
        position: 'absolute',
        minWidth: '100%'
    })),
    state('left', style({
        transform: 'translateX(-100%)',
    })),
    state('right', style({
        transform: 'translateX(100%)',
    })),
    transition('prepared => right-absolute', animate(1000)),
    transition('prepared => left-absolute', animate(1000)),
    transition('left => invision', animate(1000)),
    transition('right => invision', animate(1000))
])

export const enterFromTopText = trigger('enterFromTopText', [
    transition(':enter', [
        style({
            transform: 'translateY(-500%) scale(0.5)',
            opacity: 0,
        }), animate(1000, style({
            transform: 'translateY(0) scale(1)',
            opacity: 1
        }))
    ])
])
export const electrocutePresaleDiscount = trigger('electrocutePresaleDiscount', [
    state('visible', style({
        opacity: 1
    })),
    state('invisible', style({
        opacity: 0
    }))
])
export const enterFromLeft = trigger('enterFromLeft', [
    transition(':enter', [
        style({
            transform: 'translateX(-100%)'
        }), animate(1000, style({
            transform: 'translateX(0)'
        }))
    ])
])
export const enterFromRight = trigger('enterFromRight', [
    transition(':enter', [
        style({
            transform: 'translateX(100%)'
        }), animate(1000, style({
            transform: 'translateX(0)'
        }))
    ])
])