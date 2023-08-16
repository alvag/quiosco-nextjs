import { useContext } from 'react';
import { QuioscoContext } from '@/context/quiosco/QuioscoContext';

export const useQuiosco = () => {
    return useContext(QuioscoContext);
};
