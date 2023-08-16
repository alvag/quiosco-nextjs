import { currencyFormat } from '@/helpers';
import { Product } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

interface Props {
    product: Product;
}

export const ProductItem = ({ product }: Props) => {
    const { name, image, price } = product;

    return (
        <div className="border p-3">
            <Image
                src={`/assets/images/${image}.jpg`}
                alt={name}
                width={300}
                height={400}
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {currencyFormat(price)}
                </p>
            </div>
        </div>
    );
};
