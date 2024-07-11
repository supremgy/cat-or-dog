'use client';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ResultPage() {
  const router = useRouter();
  return (
    <div className='main-theme'>
      <Header />
      <div>당신의 결과는?</div>
      <button onClick={() => router.push('/')}>홈으로 가기</button>
    </div>
  );
}
