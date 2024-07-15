import { updateMember } from '@/service/member';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const member = await req.json();

    const result = await updateMember(member);

    if (result) {
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
