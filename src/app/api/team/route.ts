import { fetchTeams } from '@/service/team';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const teams = await fetchTeams();
    if (teams) {
      return NextResponse.json(teams);
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
