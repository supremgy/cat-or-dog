import Chart from '@/components/Chart';
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import React from 'react';
interface Props {
  params: { team: string };
}
export default function TeamDashboardPage({ params: { team } }: Props) {
  return (
    <div>
      <Chart title={`${team} 총합 차트`} labels={[]} databases={[]} />
      <Chart title='팀별 총합 차트' labels={[]} databases={[]} />
      <Chart title='팀별 총합 차트' labels={[]} databases={[]} />
    </div>
  );
}
