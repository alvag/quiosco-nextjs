'use client';

import { QuioscoActions } from '@/context/quiosco';
import { useQuiosco } from '@/hooks';
import Modal from 'react-modal';
import { Icons } from './Icons';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

interface Props {
    children: React.ReactNode;
}

export const BaseModal = ({ children }: Props) => {
    const { state, dispatch } = useQuiosco();
    const { showModal } = state;

    const closeModal = () => {
        dispatch({
            type: QuioscoActions.SET_SHOW_MODAL,
            payload: false,
        });
    };

    return (
        <>
            {showModal && (
                <Modal isOpen={showModal} style={customStyles}>
                    <div
                        className="absolute right-4 top-4 cursor-pointer"
                        onClick={closeModal}
                    >
                        <Icons.Close />
                    </div>
                    {children}
                </Modal>
            )}
        </>
    );
};
