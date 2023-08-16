'use client';

import { currencyFormat } from '@/helpers';
import { useQuiosco } from '@/hooks';
import Image from 'next/image';
import { Icons } from '.';
import { useEffect, useState } from 'react';
import { QuioscoActions } from '@/context/quiosco';
import { toast } from 'react-toastify';

export const ProductModal = () => {
    const [qty, setQty] = useState(1);
    const [isEdit, setIsEdit] = useState(false);

    const { state, dispatch } = useQuiosco();
    const { selectedProduct: product, orders } = state;
    const { image, name, price, id } = product!;

    const updateQty = (qty: number) => {
        if (qty >= 1) {
            setQty(qty);
        }
    };

    const addOrder = () => {
        dispatch({
            type: QuioscoActions.ADD_PRODUCT_TO_ORDERS,
            payload: {
                id,
                name,
                price,
                qty,
            },
        });

        dispatch({
            type: QuioscoActions.SET_SHOW_MODAL,
            payload: false,
        });

        if (isEdit) {
            toast.success('Producto actualizado');
        } else {
            toast.success('Producto agregado al carrito');
        }
    };

    useEffect(() => {
        const order = orders.find((order) => order.id === id);

        if (order) {
            setQty(order.qty);
            setIsEdit(true);
        }
    }, [id, orders]);

    return (
        <div className="md:flex gap-10">
            <div className="md:w-1/3">
                <Image
                    src={`/assets/images/${image}.jpg`}
                    width={300}
                    height={400}
                    alt={name}
                />
            </div>

            <div className="md:w-2/3">
                <h1 className="text-3xl font-bold mt-5">{name}</h1>

                <p className="mt-5 font-black text-5xl text-amber-500">
                    {currencyFormat(price)}
                </p>

                <div className="flex gap-4 mt-5">
                    <button type="button" onClick={() => updateQty(qty - 1)}>
                        <Icons.Minus />
                    </button>

                    <p className="text-3xl">{qty}</p>

                    <button type="button" onClick={() => updateQty(qty + 1)}>
                        <Icons.Plus />
                    </button>
                </div>

                <button
                    onClick={addOrder}
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                >
                    {isEdit ? 'Editar Pedido' : 'Agregar Pedido'}
                </button>
            </div>
        </div>
    );
};
