import { QuioscoActions } from '@/context/quiosco';
import { currencyFormat } from '@/helpers';
import { useQuiosco } from '@/hooks';
import { Product } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

interface Props {
    product: Product;
}

export const ProductItem = ({ product }: Props) => {
    const { name, image, price } = product;
    const { dispatch } = useQuiosco();

    const handleSelectProduct = () => {
        dispatch({
            type: QuioscoActions.SET_SELECTED_PRODUCT,
            payload: product,
        });

        dispatch({
            type: QuioscoActions.SET_SHOW_MODAL,
            payload: true,
        });
    };

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

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded mt-5 w-full uppercase"
                    onClick={handleSelectProduct}
                >
                    Agregar
                </button>
            </div>
        </div>
    );
};
