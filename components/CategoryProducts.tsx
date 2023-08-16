'use client';

import React, { useEffect, useState } from 'react';
import { getProductsByCategoryId } from '@/services';
import { Product } from '@prisma/client';
import { ProductItem } from '.';

interface Props {
    categoryId: number;
}

export const CategoryProducts = ({ categoryId }: Props) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProductsByCategoryId(categoryId)
            .then(setProducts)
            .catch(console.log);
    }, [categoryId]);

    return (
        <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};
