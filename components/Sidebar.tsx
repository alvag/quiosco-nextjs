'use client';

import { useQuiosco } from '@/hooks';
import Image from 'next/image';
import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
    const { categories } = useQuiosco().state;
    return (
        <>
            <Image
                width={300}
                height={100}
                src="/assets/images/logo.svg"
                alt="Logo"
            />

            <nav className="mt-10">
                {categories.map((category) => (
                    <SidebarItem key={category.id} category={category} />
                ))}
            </nav>
        </>
    );
};
