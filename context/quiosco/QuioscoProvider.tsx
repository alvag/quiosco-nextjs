'use client';

import { useEffect, useReducer } from 'react';
import { ActionType, QuioscoActions, StateType, initialState } from '.';
import axios from 'axios';
import { Category } from '@prisma/client';
import { QuioscoContext } from './QuioscoContext';

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

interface QuiscoProviderProps {
    children: JSX.Element | JSX.Element[];
}

export const QuioscoProvider = ({ children }: QuiscoProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getCategories = async () => {
        try {
            const response = await axios.get<Category[]>('/api/categories');
            dispatch({
                type: QuioscoActions.SET_CATEGORIES,
                payload: response.data,
            });
        } catch (error) {
            console.log(error);
        }
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
