import { fetchAllMembers, updateMember } from '@/service/member';
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

export async function GET(req: NextRequest) {
  try {
    const members = await fetchAllMembers();
    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}
