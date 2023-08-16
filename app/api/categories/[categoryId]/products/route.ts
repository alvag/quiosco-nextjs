import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

interface Params {
    params: {
        categoryId: string;
    };
}

export async function GET(req: Request, { params }: Params) {
    const { categoryId } = params;

    try {
        const products = await prisma.product.findMany({
            where: {
                categoryId: Number(categoryId),
            },
        });
        return NextResponse.json(products);
    } catch (error) {
        console.log(error);
        return NextResponse.json('Internal Server Error', { status: 500 });
    }
}
