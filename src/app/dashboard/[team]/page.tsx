import { authOptions } from '@/app/api/auth/authOptions';
import Chart from '@/components/Chart';
import { Member } from '@/model/member';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
interface Props {
  params: { team: string };
}
export const members: Member[] = [
  { nickname: 'Alice', team: 'Product', score: 25 },
  { nickname: 'Bob', team: 'Product', score: 18 },
  { nickname: 'Charlie', team: 'Product', score: 9 },
  { nickname: 'David', team: 'Product', score: 27 },
  { nickname: 'Eve', team: 'Product', score: 12 },
  { nickname: 'Frank', team: 'DevOps', score: 22 },
  { nickname: 'Grace', team: 'DevOps', score: 19 },
  { nickname: 'Hannah', team: 'DevOps', score: 15 },
  { nickname: 'Ivan', team: 'DevOps', score: 8 },
  { nickname: 'Jack', team: 'Success', score: 23 },
  { nickname: 'Karen', team: 'Success', score: 17 },
  { nickname: 'Leo', team: 'Success', score: 14 },
  { nickname: 'Mia', team: 'Success', score: 9 },
  { nickname: 'Nina', team: 'Laboratory', score: 26 },
  { nickname: 'Oscar', team: 'Laboratory', score: 21 },
  { nickname: 'Paul', team: 'Laboratory', score: 10 },
  { nickname: 'Quinn', team: 'Laboratory', score: 7 },
  { nickname: 'Ruth', team: 'Laboratory', score: 5 },
];
export default async function TeamDashboardPage({ params: { team } }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect('/');

  const data = [
    {
      team: 'product',
      members: [
        { nickname: 'Alice', score: 25 },
        { nickname: 'Bob', score: 18 },
        { nickname: 'Charlie', score: 9 },
        { nickname: 'David', score: 27 },
        { nickname: 'Eve', score: 12 },
      ],
    },
    {
      team: 'devops',
      members: [
        { nickname: 'Frank', score: 22 },
        { nickname: 'Grace', score: 19 },
        { nickname: 'Hannah', score: 15 },
        { nickname: 'Ivan', score: 8 },
      ],
    },
    {
      team: 'success',
      members: [
        { nickname: 'Jack', score: 23 },
        { nickname: 'Karen', score: 17 },
        { nickname: 'Leo', score: 14 },
        { nickname: 'Mia', score: 9 },
      ],
    },
    {
      team: 'laboratory',
      members: [
        { nickname: 'Nina', score: 26 },
        { nickname: 'Oscar', score: 21 },
        { nickname: 'Paul', score: 10 },
        { nickname: 'Quinn', score: 7 },
        { nickname: 'Ruth', score: 5 },
      ],
    },
  ];
  const getTeamData = (teamName: string) => {
    return data.find((item) => item.team === teamName);
  };
  const teamData = getTeamData(team);
  if (!teamData) return;
  const teamName = teamData?.members.map((member) => member.nickname);
  const teamScore = teamData?.members.map((member) => member.score);
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
