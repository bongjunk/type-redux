import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

export const store = configureStore({
    reducer: {
        counters: counterReducer
    }, devTools: true
});

export default store;

// root state의 type을 유추하기 위해 사용
export type RootState = ReturnType<typeof store.getState> // custom hook
// dispatch되는 type을 유추하기 위해 사용
export type AppDispatch = typeof store.dispatch