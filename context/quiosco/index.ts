import { Category, Product } from '@prisma/client';

export enum QuioscoActions {
    SET_CATEGORIES = 'SET_CATEGORIES',
    SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY',
    SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT',
    SET_SHOW_MODAL = 'SET_SHOW_MODAL',
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
};

export const initialState: StateType = {
    categories: [],
    currentCategory: null,
};
