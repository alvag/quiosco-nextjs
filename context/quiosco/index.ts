import { Category } from '@prisma/client';

export enum QuioscoActions {
    SET_CATEGORIES = 'SET_CATEGORIES',
    SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY',
}

export type ActionType = {
    type: QuioscoActions;
    payload: any;
};

export type StateType = {
    categories: Category[];
    currentCategory: Category | null;
};

export const initialState: StateType = {
    categories: [],
    currentCategory: null,
};
