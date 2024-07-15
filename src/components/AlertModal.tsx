'use client';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function AlertModal() {
  const router = useRouter();
  const setModalState = useStore((state) => state.setModalState);

  const handleGoHome = () => {
    setModalState(false);
    router.push('/');
  };
  return (
    <div className='absolute left-0 w-full h-full mx-auto bg-black/80 flex justify-center items-center'>
      <div className='fixed top-64 w-72 h-44 bg-zinc-50 rounded-xl px-3 py-5'>
        <section className='flex flex-col gap-3 mb-4'>
          <div className='text-center font-bold text-lg'>홈으로 가기</div>
          <div className='text-sm'>
            작성하신 내용이 사라집니다. <br />
            홈으로 가시겠습니까?
          </div>
        </section>
        <section className='flex gap-2'>
          <button
            onClick={() => setModalState(false)}
            className='w-full h-11 rounded-md text-lg duration-75 bg-neutral-200 active:bg-neutral-500'
          >
            취소
          </button>
          <button
            onClick={handleGoHome}
            className='w-full h-11 rounded-md text-zinc-50 text-lg duration-75 bg-teal-600 active:bg-teal-800'
          >
            확인
          </button>
        </section>
      </div>
    </div>
  );
}
