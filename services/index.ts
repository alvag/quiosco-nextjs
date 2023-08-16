import { Category, Product } from '@prisma/client';
import axios from 'axios';
import { categories } from '@/prisma/data/categories';
import prisma from '@/lib/prisma';

export const getCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get<Category[]>('/api/categories');
        return response.data || [];
    } catch (error) {
        throw error;
    }
};

export const getProductsByCategoryId = async (
    categoryId: number
): Promise<Product[]> => {
    try {
        const response = await axios.get(
            `/api/categories/${categoryId}/products`
        );
        return response.data || [];
    } catch (error) {
        throw error;
    }
};
