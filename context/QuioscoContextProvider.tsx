'use client';

import { Dispatch, createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import { Category } from '@prisma/client';

export enum QuioscoActions {
    SET_CATEGORIES = 'SET_CATEGORIES',
    SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY',
}

type ActionType = {
    type: QuioscoActions;
    payload: any;
};

type StateType = {
    categories: Category[];
    currentCategory: Category | null;
};

const initialState: StateType = {
    categories: [],
    currentCategory: null,
};

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case QuioscoActions.SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case QuioscoActions.SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload,
            };
        default:
            return state;
    }
};

const QuioscoContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

interface QuiscoProviderProps {
    children: JSX.Element | JSX.Element[];
}

const QuioscoProvider = ({ children }: QuiscoProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getCategories = async () => {
        const response = await axios.get<Category[]>('/api/categories');
        dispatch({
            type: QuioscoActions.SET_CATEGORIES,
            payload: response.data,
        });
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <QuioscoContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </QuioscoContext.Provider>
    );
};

export { QuioscoProvider, QuioscoContext };
