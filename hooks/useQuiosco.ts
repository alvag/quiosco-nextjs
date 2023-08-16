import { useContext } from 'react';
import { QuioscoContext } from '@/context/QuioscoContextProvider';

export const useQuiosco = () => {
    return useContext(QuioscoContext);
};
