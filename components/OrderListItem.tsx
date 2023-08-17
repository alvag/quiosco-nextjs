import { currencyFormat } from '@/helpers';
import Image from 'next/image';
import { Icons } from '.';
import { QuioscoActions } from '@/context/quiosco';
import { useQuiosco } from '@/hooks';
import { toast } from 'react-toastify';

interface Props {
    order: any;
}

export const OrderListItem = ({ order }: Props) => {
    const { image, name, qty, price } = order;
    const { dispatch } = useQuiosco();

    const handleSelectOrder = () => {
        dispatch({
            type: QuioscoActions.SET_SELECTED_PRODUCT,
            payload: order,
        });

        dispatch({
            type: QuioscoActions.SET_SHOW_MODAL,
            payload: true,
        });
    };

    const handleDeleteOrder = () => {
        dispatch({
            type: QuioscoActions.REMOVE_PRODUCT_FROM_ORDERS,
            payload: order.id,
        });

        toast.success('Producto eliminado del carrito');
    };

    return (
        <div className="shadow p-5 mb-3 flex gap-10 items-center">
            <div className="md:w-1/6">
                <Image
                    width={300}
                    height={400}
                    alt={name}
                    src={`/assets/images/${image}.jpg`}
                />
            </div>

            <div className="md:w-4/6">
                <p className="text-3xl font-bold">{name}</p>
                <p className="text-xl font-bold mt-2">Cantidad: {qty}</p>
                <p className="text-xl font-bold text-amber-500 mt-2">
                    Precio: {currencyFormat(price)}
                </p>

                <p className="text-sm text-gray-700  mt-2">
                    Subtotal: {currencyFormat(price * qty)}
                </p>
            </div>

            <div className="md:w-1/6 flex flex-col gap-4">
                <button
                    onClick={handleSelectOrder}
                    type="button"
                    className="flex items-center gap-2 bg-sky-700 hover:bg-sky-900 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
                >
                    <Icons.Edit className="w-5 h-5" /> Editar
                </button>

                <button
                    onClick={handleDeleteOrder}
                    type="button"
                    className="flex items-center gap-2 bg-red-700 hover:bg-red-900 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full "
                >
                    <Icons.Delete className="w-5 h-5" /> Eliminar
                </button>
            </div>
        </div>
    );
};
