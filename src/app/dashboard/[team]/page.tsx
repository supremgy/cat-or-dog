import { authOptions } from '@/app/api/auth/authOptions';
import Chart from '@/components/Chart';
import { Member } from '@/model/member';
import { getMembersByTeam } from '@/util/member';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

interface Props {
  params: { team: string };
}
export async function generateMetadata({ params: { team } }: Props) {
  return {
    title: `${team} Dashboard`,
  };
}

export default async function TeamDashboardPage({ params: { team } }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect('/');
  const teamResult: Member[] = await getMembersByTeam(team);

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
