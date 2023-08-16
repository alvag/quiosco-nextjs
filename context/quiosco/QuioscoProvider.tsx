'use client';

import { useEffect, useReducer } from 'react';
import { ActionType, QuioscoActions, StateType, initialState } from '.';
import axios from 'axios';
import { Category } from '@prisma/client';
import { QuioscoContext } from './QuioscoContext';
import { getCategories } from '@/services';
import { categories } from '@/prisma/data/categories';

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

    useEffect(() => {
        getCategories()
            .then((categories) => {
                dispatch({
                    type: QuioscoActions.SET_CATEGORIES,
                    payload: categories,
                });

                if (categories.length > 0) {
                    dispatch({
                        type: QuioscoActions.SET_CURRENT_CATEGORY,
                        payload: categories[0],
                    });
                }
            })
            .catch(console.log);
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
