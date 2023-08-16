'use client';

import { QuioscoActions } from '@/context/quiosco';
import { useQuiosco } from '@/hooks';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo } from 'react';

interface Step {
    step: number;
    name: string;
    path: string;
}

const steps: Step[] = [
    {
        step: 1,
        name: 'Menú',
        path: '/',
    },
    {
        step: 2,
        name: 'Resumen',
        path: '/resumen',
    },
    {
        step: 3,
        name: 'Datos y total',
        path: '/total',
    },
];

export const Steps = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { state, dispatch } = useQuiosco();
    const { step: currentStep } = state;

    const progress = useMemo(() => {
        return `${(currentStep / steps.length) * 100}%`;
    }, [currentStep]);

    useEffect(() => {
        let step = 1;
        if (pathname === '/resumen') {
            step = 2;
        } else if (pathname === '/total') {
            step = 3;
        }
        dispatch({
            type: QuioscoActions.SET_STEP,
            payload: step,
        });
    }, [pathname, dispatch]);

    return (
        <>
            <div className="flex justify-between mb-5">
                {steps.map((step) => (
                    <button
                        onClick={() => router.push(step.path)}
                        key={step.step}
                        className="text-2xl font-bold"
                    >
                        {step.name}
                    </button>
                ))}
            </div>

            <div className="bg-gray-100 mb-10">
                <div
                    className="rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white"
                    style={{ width: progress }}
                ></div>
            </div>
        </>
    );
};
