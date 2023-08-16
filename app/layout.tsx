import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { QuioscoProvider } from '@/context/quiosco/QuioscoProvider';
import { ProductModal, Sidebar } from '@/components';
import { BaseModal } from '@/components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Café Quiosco',
    description: 'Quisco cafeteria',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className} id="root">
                <QuioscoProvider>
                    <div className="md:flex">
                        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                            <Sidebar />
                        </aside>
                        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                            <div className="p-10">{children}</div>
                        </main>
                        <BaseModal>
                            <ProductModal />
                        </BaseModal>

                        <ToastContainer />
                    </div>
                </QuioscoProvider>
            </body>
        </html>
    );
}
