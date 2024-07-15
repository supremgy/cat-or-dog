import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Chart from '@/components/Chart';
import { Member } from '@/model/member';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
interface Props {
  params: { team: string };
}
export default async function TeamDashboardPage({ params: { team } }: Props) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect('/');

  const members: Member[] = [
    { id: 1, nickname: 'Alice', team_id: 1, score: 25 },
    { id: 2, nickname: 'Bob', team_id: 1, score: 18 },
    { id: 3, nickname: 'Charlie', team_id: 1, score: 9 },
    { id: 4, nickname: 'David', team_id: 1, score: 27 },
    { id: 5, nickname: 'Eve', team_id: 1, score: 12 },
    { id: 6, nickname: 'Frank', team_id: 2, score: 22 },
    { id: 7, nickname: 'Grace', team_id: 2, score: 19 },
    { id: 8, nickname: 'Hannah', team_id: 2, score: 15 },
    { id: 9, nickname: 'Ivan', team_id: 2, score: 8 },
    { id: 10, nickname: 'Jack', team_id: 3, score: 23 },
    { id: 11, nickname: 'Karen', team_id: 3, score: 17 },
    { id: 12, nickname: 'Leo', team_id: 3, score: 14 },
    { id: 13, nickname: 'Mia', team_id: 3, score: 9 },
    { id: 14, nickname: 'Nina', team_id: 4, score: 26 },
    { id: 15, nickname: 'Oscar', team_id: 4, score: 21 },
    { id: 16, nickname: 'Paul', team_id: 4, score: 10 },
    { id: 17, nickname: 'Quinn', team_id: 4, score: 7 },
    { id: 18, nickname: 'Ruth', team_id: 4, score: 5 },
  ];
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
