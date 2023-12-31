import { QuioscoActions } from '@/context/quiosco';
import { useQuiosco } from '@/hooks';
import { Category } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
    category: Category;
}

export const SidebarItem = ({ category }: Props) => {
    const router = useRouter();
    const { name, icon, id } = category;
    const { dispatch } = useQuiosco();
    const { currentCategory } = useQuiosco().state;

    const handleClick = () => {
        dispatch({
            type: QuioscoActions.SET_CURRENT_CATEGORY,
            payload: category,
        });
        router.push('/');
    };

    return (
        <div
            className={`${
                currentCategory?.id === id ? 'bg-amber-400' : ''
            } flex items-center gap-4 cursor-pointer w-full border p-5 hover:bg-amber-400`}
            onClick={handleClick}
        >
            <Image
                alt="Image icon"
                width={70}
                height={70}
                src={`/assets/images/icono_${icon}.svg`}
            />

            <button type="button" className="text-2xl font-bold">
                {name}
            </button>
        </div>
    );
};
