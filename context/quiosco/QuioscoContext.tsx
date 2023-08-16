'use client';

import { Dispatch, createContext, useReducer } from 'react';
import { ActionType, StateType, initialState } from '.';

export const QuioscoContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });
