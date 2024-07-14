import Header from '@/components/Header';
import ResultForm from '@/components/ResultForm';
import React from 'react';

export type ResultType = {
  excellent: { content: string };
  normal: { content: string };
  consideration: { content: string };
};
export default function ResultPage() {
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
  const teamResult = [
    {
      nickname: 'Levi',
      score: 29,
    },
    {
      nickname: 'Noah',
      score: 18,
    },
    {
      nickname: 'Jeff',
      score: 9,
    },
    {
      nickname: 'Jeff',
      score: 9,
    },
    {
      nickname: 'Jeff',
      score: 9,
    },
    {
      nickname: 'Jeff',
      score: 9,
    },
    {
      nickname: 'Jeff',
      score: 9,
    },
  ];
  return (
    <div className='main-theme h-dvh overflow-y-auto'>
      <Header />
      <ResultForm result={result} teamResult={teamResult} />
    </div>
  );
}
