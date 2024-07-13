'use client';
import React, { useState } from 'react';
import { useStore } from '@/store';
import { StepProps } from './SingleChoice';
import ButtonForm from './ButtonForm';
import { useRouter } from 'next/navigation';

export default function RatingQuestion({
  step,
  setStep,
  survey,
  sumTotal,
}: StepProps) {
  const router = useRouter();
  const setToastState = useStore((state) => state.setToastState);
  const selectedIndex = useStore((state) => state.selectedIndex);

  const [score, setScore] = useState<number | undefined>(undefined);

  const handleNext = () => {
    if (score && score > 10) {
      alert('점수가 너무 높아요!');
      return;
    } else if (score && score < 1) {
      alert('점수가 너무 낮아요!');
      return;
    }

    if (score) {
      let total = 0;
      selectedIndex.forEach((item, i) => {
        if (survey[i].answer) {
          if (typeof item.index === 'number') {
            total += survey[i].answer[item.index].value;
          } else if (Array.isArray(item.index)) {
            item.index.forEach((index) => {
              if (survey[i].answer) total += survey[i].answer[index].value;
            });
          }
        }
      });

      sumTotal(total + score);

      router.push('/result');
    } else {
      setToastState();
      return;
    }
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  return (
    <div className='mt-28 w-full'>
      <div
        className='mb-10 text-xl font-semibold'
        dangerouslySetInnerHTML={{ __html: survey[step].question }}
      />
      <input
        type='number'
        className='w-1/5 h-10 text-lg rounded-md p-2 text-teal-600 mb-8 outline-none focus:border-2 focus:border-teal-600 duration-150'
        value={score}
        onChange={(event) => setScore(Number(event.target.value))}
      />
      <ButtonForm
        nextText='완료'
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </div>
  );
}
