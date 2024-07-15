import { fetchMembersByTeam } from '@/service/member';
import { NextRequest, NextResponse } from 'next/server';
type Context = {
  params: { team: string };
};
export async function GET(
  req: NextRequest,
  { params }: { params: { team: string } }
) {
  const team = params.team;

  if (!team) {
    return NextResponse.json({ error: 'Team is required' }, { status: 400 });
  }

  try {
    const members = await fetchMembersByTeam(team);
    return NextResponse.json(members, { status: 200 });
  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch members' },
      { status: 500 }
    );
  }
}
