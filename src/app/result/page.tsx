import Header from '@/components/Header';
import ResultForm from '@/components/ResultForm';
import { Member } from '@/model/member';
import { fetchMembersByTeam } from '@/service/member';
import React from 'react';

export const metadata = {
  title: 'Result',
};

export type ResultType = {
  excellent: { content: string };
  normal: { content: string };
  consideration: { content: string };
};

export default async function ResultPage(props: any) {
  let team = '';
  let members: Member[] = [];
  if (props.searchParams.team) {
    team = props.searchParams.team;
    members = await fetchMembersByTeam(team);
  }
  const result: ResultType = {
    excellent: {
      content: '매우 적합한 지원자입니다! 😆',
    },
    normal: {
      content: '적합한 지원자입니다 😁',
    },
    consideration: {
      content: '고려해볼만한 지원자입니다 🤔',
    },
  };

  return (
    <div className='main-theme h-dvh overflow-y-auto'>
      <Header />
      <ResultForm result={result} members={members} />
    </div>
  );
}
