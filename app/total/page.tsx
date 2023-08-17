'use client';

import { useQuiosco } from '@/hooks';
import { FC, useMemo, useState } from 'react';
import { currencyFormat } from '../../helpers/index';

interface TotalProps {}

const TotalPage: FC<TotalProps> = ({}) => {
    const [name, setName] = useState('');
    const { orders } = useQuiosco().state;

    const amount = useMemo(() => {
        return orders.reduce((acc, order) => {
            return acc + order.qty * order.price;
        }, 0);
    }, [orders]);

    const handleConfirm = () => {
        console.log('Confirmar pedido');
    };

    return (
        <>
            <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
            <p className="text-2xl mb-10 mt-5">
                Confirma tu pedido a continuación
            </p>

            <form onSubmit={handleConfirm}>
                <div>
                    <label
                        htmlFor="name"
                        className="block uppercase text-slate-800 font-bold text-xl"
                    >
                        Nombre
                    </label>

                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md"
                    />
                </div>

                <div className="mt-10">
                    <p>
                        Total a pagar{' '}
                        <span className="font-bold">
                            {currencyFormat(amount)}
                        </span>
                    </p>
                </div>

                <div className="mt-10">
                    <button
                        disabled={orders.length === 0 || name === ''}
                        type="submit"
                        className="w-full lg:w-auto px-5 py-2 bg-indigo-600 hover:bg-indigo-800 uppercase cursor-pointer font-bold text-white rounded text-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Confirmar Pedido
                    </button>
                </div>
            </form>
        </>
    );
};

export default TotalPage;
