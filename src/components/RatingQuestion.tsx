'use client';
import React, { useState } from 'react';
import { useStore } from '@/store';
import { StepProps } from './SingleChoice';
import ButtonForm from './ButtonForm';

export default function RatingQuestion({ step, setStep }: StepProps) {
  const registerData = useStore((state) => state.registerData);
  const setRegisterData = useStore((state) => state.setRegisterData);
  const setToastState = useStore((state) => state.setToastState);
  const [score, setScore] = useState<number | undefined>(
    registerData[step].score as number
  );

  const handleNext = () => {
    if (score && score > 10) {
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
    if (score) {
      setRegisterData(newRegisterData);
    } else {
      setToastState();
      return;
    }
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
    <div className='mt-28 w-full'>
      <div className='mb-10 text-xl font-semibold'>
        {registerData[step].question}
      </div>
      <input
        type='number'
        className='w-1/5 h-10 text-lg rounded-md p-2 text-teal-600 mb-8 outline-none focus:border-2 focus:border-teal-600 duration-150'
        value={score}
        onChange={(event) => setScore(Number(event.target.value))}
      />
      <ButtonForm handleBack={handleBack} handleNext={handleNext} />
    </div>
  );
}
