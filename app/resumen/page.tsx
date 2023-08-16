import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
    title: 'Café Quiosco - Resumen',
    description: 'Quisco cafeteria',
};

interface ResumenProps {}

const ResumenPage: FC<ResumenProps> = ({}) => {
    return (
        <>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl mb-10 mt-5">Revisa tu pedido</p>
        </>
    );
};

export default ResumenPage;
