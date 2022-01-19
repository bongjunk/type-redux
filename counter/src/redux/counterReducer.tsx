import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            console.log('increment');
            state.value += 1;
        },
        decrement: (state) => {
            console.log('decrement');
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const selectValue = (state: RootState) => state.counters.value;
export default counterSlice.reducer
