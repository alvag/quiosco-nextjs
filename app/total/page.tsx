import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
    title: 'Café Quiosco - Total',
    description: 'Quisco cafeteria',
};

interface TotalProps {}

const TotalPage: FC<TotalProps> = ({}) => {
    return (
        <>
            <h1 className="text-4xl font-black">Total y confirmar pedido</h1>
            <p className="text-2xl mb-10 mt-5">
                Confirma tu pedido a continuación
            </p>
        </>
    );
};

export default TotalPage;
