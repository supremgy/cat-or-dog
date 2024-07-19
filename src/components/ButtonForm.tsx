'use client';
import React from 'react';
import Button from './Button';
import Loader from './Loader';
import { useStore } from '@/store';

interface ButtonFromProps {
  nextText?: string;
  handleBack: () => void;
  handleNext: () => void;
}

export default function ButtonForm({
  nextText = '다음',
  handleBack,
  handleNext,
}: ButtonFromProps) {
  const isLoading = useStore((state) => state.isLoading);
  return (
    <section className='flex justify-between'>
      <Button onClick={handleBack} text='이전' className='w-16 h-10 text-lg ' />
      <div className='relative'>
        {isLoading && <Loader size={10} />}
        <Button
          disabled={isLoading}
          onClick={handleNext}
          text={nextText}
          className={`w-16 h-10 text-lg ${isLoading && 'opacity-80'}`}
        />
      </div>
    </section>
  );
}
