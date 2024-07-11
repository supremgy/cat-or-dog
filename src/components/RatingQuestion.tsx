'use client';
import React, { useState } from 'react';
import { useStore } from '@/store';
import { StepProps } from './SingleChoice';

export default function RatingQuestion({ step, setStep }: StepProps) {
  const registerData = useStore((state) => state.registerData);
  const setRegisterData = useStore((state) => state.setRegisterData);

  const [score, setScore] = useState<number | undefined>(
    registerData[step].score as number
  );

  const handleNext = () => {
    if (score && score > 5) {
      alert('점수가 너무 높아요!');
      return;
    } else if (score && score < 1) {
      alert('점수가 너무 낮아요!');
      return;
    }
    const newRegisterData = registerData.map((item, i) => {
      if (i === step) {
        return {
          ...item,
          score,
        };
      }
      return item;
    });
    if (score) setRegisterData(newRegisterData);
    setStep(step + 1);
  };
  const handleBack = () => {
    const newRegisterData = registerData.map((item, i) => {
      if (i === step) {
        return {
          ...item,
          score,
        };
      }
      return item;
    });
    if (score) setRegisterData(newRegisterData);
    setStep(step - 1);
  };
  return (
    <div className='mt-28 w-full px-8'>
      <div className='mb-10 text-xl font-semibold'>
        {registerData[step].question}
      </div>
      <input
        type='number'
        className='w-1/5 h-8 rounded-lg p-2 text-teal-600'
        value={score}
        onChange={(event) => setScore(Number(event.target.value))}
      />
      <section className='flex justify-between'>
        <button onClick={handleBack}>이전</button>
        <button onClick={handleNext}>다음</button>
      </section>
    </div>
  );
}
