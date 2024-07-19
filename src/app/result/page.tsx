import Header from '@/components/Header';
import ResultForm from '@/components/ResultForm';
import React from 'react';

export const metadata = {
  title: 'Result',
};

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

  return (
    <div className='main-theme h-dvh overflow-y-auto'>
      <Header />
      <ResultForm result={result} />
    </div>
  );
}
