import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from '../redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 
// TypedUseSelectorHook은 generic type을 받는다.

// 간단 예시
// interface Obj<T> {
//     name: T;
// }

// interface State {
//     state: {
//         data: string,
//         loading: boolean,
//     } 
// }

// const obj: Obj<State> = {name: {
//     state: {
//         data: 'abcd',
//         loading: false,
//     }
// }}