import { Category, Product } from '@prisma/client';

export enum QuioscoActions {
    SET_CATEGORIES = 'SET_CATEGORIES',
    SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY',
    SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT',
    SET_SHOW_MODAL = 'SET_SHOW_MODAL',
    ADD_PRODUCT_TO_ORDERS = 'ADD_PRODUCT_TO_ORDERS',
    SET_STEP = 'SET_STEP',
}

export type ActionType = {
    type: QuioscoActions;
    payload: any;
};

export type StateType = {
    categories: Category[];
    currentCategory: Category | null;
    selectedProduct?: Product;
    showModal?: boolean;
    orders: any[];
    step: number;
};

export const initialState: StateType = {
    categories: [],
    currentCategory: null,
    orders: [],
    step: 1,
};
