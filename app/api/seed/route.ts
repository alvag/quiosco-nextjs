import prisma from '@/lib/prisma';
import { categories } from '@/prisma/data/categories';
import { products } from '@/prisma/data/products';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
    try {
        await prisma.category.deleteMany();
        await prisma.product.deleteMany();

        await prisma.category.createMany({
            data: categories,
        });

        await prisma.product.createMany({
            data: products,
        });

        return NextResponse.json({
            message: 'Seed executed successfully!',
        });
    } catch (error) {
        return NextResponse.json(
            {
                message: 'Error while seeding!',
                error,
            },
            { status: 500 }
        );
    }
}
