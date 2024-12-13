import { NextResponse } from 'next/server';
import prisma from '../../../../prisma-client';

export async function GET() {
  const schools = await prisma.school.findMany();
  return NextResponse.json(schools);
}
