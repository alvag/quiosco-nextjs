'use client';

import { useQuiosco } from '@/hooks';
import { OrderListItem } from './OrderListItem';

export const OrderList = () => {
    const { orders } = useQuiosco().state;

    return (
        <>
            {!orders.length ? (
                <p className="text-center text-2xl">
                    No hay elementos en tu pedido
                </p>
            ) : (
                orders.map((order) => (
                    <OrderListItem key={order.id} order={order} />
                ))
            )}
        </>
    );
};
