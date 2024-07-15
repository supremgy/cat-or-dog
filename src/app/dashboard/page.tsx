import Chart from '@/components/Chart';
import React from 'react';
import {
  getTeamAverageScores,
  getTeamCountsByScoreRange,
  getTeamScoreStandardDeviations,
} from '../../util/chart';
import { Member } from '@/model/member';
import { Team } from '@/model/team';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/authOptions';
import { members } from './[team]/page';
export default async function DashBoardPage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect('/');
  // const infograbTeamBgColor = [
  //   '#9966FF33', // Purple (HEX with alpha)
  //   '#36A2EB33', // Blue (HEX with alpha)
  //   '#FF9F4033', // Orange (HEX with alpha)
  //   '#FF638433', // Red (HEX with alpha)
  // ];
  // const infograbBorderColor = [
  //   '#9966FF', // Purple
  //   '#36A2EB', // Blue
  //   '#FF9F40', // Orange
  //   '#FF6384', // Red
  // ];

  const teams: Team[] = [
    { id: 1, name: 'product' },
    { id: 2, name: 'devops' },
    { id: 3, name: 'success' },
    { id: 4, name: 'laboratory' },
  ];
  const labels = teams.map((team) => team.name);

  //직원수

  const label = ['강추! 😆', '추천 😁', '고려 🤔'];

  const teamCountsByScoreRange = getTeamCountsByScoreRange(members);
  const teamAverageScores = getTeamAverageScores(members);
  const teamScoreStandardDeviations = getTeamScoreStandardDeviations(members);

  const totalDatabases = [
    {
      label: '강추! 😆',
      data: teamCountsByScoreRange.high,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: '추천 😁',
      data: teamCountsByScoreRange.medium,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
    {
      label: '고려 🤔',
      data: teamCountsByScoreRange.low,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    },
  ];
  const averageDatabases = [
    {
      label: '평균 점수',
      data: teamAverageScores,
      backgroundColor: 'rgba(54, 162, 235, 0.2)', // 파란색 계열
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    },
  ];
  const SDDatabases = [
    {
      label: '표준 편차',
      data: teamScoreStandardDeviations,
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // 빨간색 계열
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ];
  return (
    <section className='flex flex-col gap-10 mb-8'>
      <Chart
        title='팀별 결과 총합 차트'
        labels={labels}
        databases={totalDatabases}
      />
      <Chart
        title='팀별 점수 평균 차트'
        labels={labels}
        databases={averageDatabases}
      />
      <Chart
        title='팀별 점수 표준편차 차트'
        labels={labels}
        databases={SDDatabases}
      />
    </section>
  );
}
