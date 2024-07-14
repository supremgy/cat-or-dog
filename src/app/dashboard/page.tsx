import Chart from '@/components/Chart';
import React from 'react';
export interface Member {
  nickname: string;
  score: number;
  opinion: string;
}
interface TeamProps {
  DevOps: Member[];
  Product: Member[];
  Success: Member[];
  Laboratory: Member[];
}
export default function DashBoardPage() {
  const data: TeamProps = {
    DevOps: [
      {
        nickname: 'Levi',
        score: 29,
        opinion: 'excellent',
      },
      {
        nickname: 'Noah',
        score: 18,
        opinion: 'normal',
      },
      {
        nickname: 'Jeff',
        score: 9,
        opinion: 'consideration',
      },
    ],
    Product: [
      {
        nickname: 'Ethan',
        score: 29,
        opinion: 'excellent',
      },
      {
        nickname: 'Leo',
        score: 29,
        opinion: 'excellent',
      },
      {
        nickname: 'James',
        score: 29,
        opinion: 'excellent',
      },
    ],
    Success: [
      {
        nickname: 'Ryan',
        score: 29,
        opinion: 'excellent',
      },
      {
        nickname: 'Daniel',
        score: 6,
        opinion: 'consideration',
      },
      {
        nickname: 'Oliver',
        score: 9,
        opinion: 'consideration',
      },
    ],
    Laboratory: [
      {
        nickname: 'Lucas',
        score: 29,
        opinion: 'excellent',
      },
      {
        nickname: 'Samuel',
        score: 25,
        opinion: 'excellent',
      },
      {
        nickname: 'Michael',
        score: 11,
        opinion: 'normal',
      },
    ],
  };

  return (
    <section className='flex flex-col gap-10'>
      <Chart title='팀별 총합 차트' labels={[]} databases={[]} />
      <Chart title='팀별 평균 차트' labels={[]} databases={[]} />
      <Chart title='팀별 표준편차 차트' labels={[]} databases={[]} />
    </section>
  );
}
