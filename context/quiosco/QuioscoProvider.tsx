'use client';

import { useEffect, useReducer } from 'react';
import { ActionType, QuioscoActions, StateType, initialState } from '.';
import { QuioscoContext } from './QuioscoContext';
import { getCategories } from '@/services';

const reducer = (state: StateType, action: ActionType): StateType => {
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
        case QuioscoActions.SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload,
            };
        case QuioscoActions.SET_SHOW_MODAL:
            return {
                ...state,
                showModal: action.payload,
            };
        case QuioscoActions.ADD_PRODUCT_TO_ORDERS:
            if (state.orders.some((order) => order.id === action.payload.id)) {
                return {
                    ...state,
                    orders: state.orders.map((order) =>
                        order.id === action.payload.id ? action.payload : order
                    ),
                };
            }

            return {
                ...state,
                orders: [...state.orders, action.payload],
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
