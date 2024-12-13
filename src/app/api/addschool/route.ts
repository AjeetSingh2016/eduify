import { NextResponse } from 'next/server';
import prisma from '../../../../prisma-client'
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const school = await prisma.school.create({
      data: {
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        contact: data.contact,
        email_id: data.email_id,
        image: data.image,
      },
    });

    return NextResponse.json({ school }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to add school' }, { status: 500 });
  }
}
