'use client';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from './Button';

interface ContentProps {
  emoji: string;
  title: string;
  detail: string;
}
export interface Props {
  type: {
    cat: ContentProps;
    dog: ContentProps;
  };
}

export default function ResultForm({ type }: Props) {
  const router = useRouter();
  const total = useStore((state) => state.total);
  const resetRegisterData = useStore((state) => state.resetRegisterData);
  const resetUserData = useStore((state) => state.resetUserData);
  const animalType = total < 15 ? type.dog : type.cat;
  const handleGoHome = () => {
    resetUserData();
    resetRegisterData();
    router.push('/');
  };
  return (
    <div className='mt-10'>
      <section>
        <div className='text-center text-8xl'>{animalType.emoji}</div>
        <div className='mt-10 text-center text-lg font-semibold'>
          {animalType.title}
        </div>
        <div className='mt-5'>{animalType.detail}</div>
      </section>
      <section className='flex justify-center mt-10'>
        <Button text='홈으로' className='w-20 h-10' onClick={handleGoHome} />
      </section>
    </div>
  );
}
