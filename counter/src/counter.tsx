import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from './hooks';
import { decrement, increment, incrementByAmount } from './redux/counterReducer';

export function Counter() {
    const count = useAppSelector(state => state.counters.value);
    const dispatch = useAppDispatch()

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>10 increment</button>
        </>
    );
}