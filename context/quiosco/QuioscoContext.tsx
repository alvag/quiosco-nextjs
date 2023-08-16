'use client';

import { Dispatch, createContext, useEffect, useReducer } from 'react';
import { ActionType, StateType, initialState } from '.';

export const QuioscoContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });
