import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
   try {
       const categories = await prisma.category.findMany();
       return NextResponse.json(categories);
   } catch (error) {
       console.log(error);
       return NextResponse.json('Internal Server Error', { status: 500 });
   }
}
