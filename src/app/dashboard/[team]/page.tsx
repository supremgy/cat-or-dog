import Chart from '@/components/Chart';
import GridSpinner from '@/components/GridSpinner';
import { Member } from '@/model/member';
import { getMembersByTeam } from '@/util/member';
import React, { Suspense } from 'react';

interface Props {
  params: { team: string };
}
export async function generateMetadata({ params: { team } }: Props) {
  return {
    title: `${team} Dashboard`,
  };
}

export default async function TeamDashboardPage({ params: { team } }: Props) {
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
