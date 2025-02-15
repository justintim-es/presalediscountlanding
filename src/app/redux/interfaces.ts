export interface IProps<T> {
    payload?: T;
}
export interface IDispatch<T> {
    type: string;
    payload?: T;
}
export interface IBuyCard {
    id: number;
    value: number;
    discount: number;
}