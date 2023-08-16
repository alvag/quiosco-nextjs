'use client';

import { CategoryProducts } from '@/components';
import { useQuiosco } from '@/hooks';

export default function Home() {
    const { currentCategory } = useQuiosco().state;

    return (
        <>
            <h1 className="text-4xl font-black">{currentCategory?.name}</h1>

            <p className="text-2xl mb-10 mt-5">
                Elije y personaliza tu pedido a continuacion
            </p>

            {currentCategory && (
                <CategoryProducts categoryId={currentCategory?.id} />
            )}
        </>
    );
}
