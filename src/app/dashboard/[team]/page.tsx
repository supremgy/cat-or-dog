import { authOptions } from '@/app/api/auth/authOptions';
import Chart from '@/components/Chart';
import { Member } from '@/model/member';
import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';
interface Props {
  params: { team: string };
}

async function fetchMembersByTeam(team: string) {
  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';

  const response = await fetch(`${protocal}://${host}/api/member/${team}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch members');
  }

  return await response.json();
}

export default async function TeamDashboardPage({ params: { team } }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect('/');
  const teamResult: Member[] = await fetchMembersByTeam(team);

  const teamName = teamResult.map((member) => member.nickname);
  const teamScore = teamResult.map((member) => member.score);
  const databases = [
    {
      label: '총 점수',
      data: teamScore,
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // 파란색 계열
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ];
  return (
    <section className='h-dvh'>
      <Chart
        title='팀원별 총 점수 차트'
        labels={teamName}
        databases={databases}
      />
    </section>
  );
}
