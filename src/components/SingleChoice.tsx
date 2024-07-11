import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useStore } from '@/store';

export interface StepProps {
  step: number;
  setStep: (step: number) => void;
}

export default function SingleChoice({ step, setStep }: StepProps) {
  const router = useRouter();
  const registerData = useStore((state) => state.registerData);
  const setRegisterData = useStore((state) => state.setRegisterData);

  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(
    registerData[step].index as number
  );

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      const newRegisterData = registerData.map((item, i) => {
        if (i === step) {
          return {
            ...item,
            index: selectedAnswer,
            score: item.answer![selectedAnswer].value,
          };
        }
        return item;
      });
      setRegisterData(newRegisterData);
    }
    setStep(step + 1);
  };
  const handleBack = () => {
    if (step === 0) {
      router.push('/');
    } else {
      if (selectedAnswer) {
        const newRegisterData = registerData.map((item, i) => {
          if (i === step) {
            return {
              ...item,
              index: selectedAnswer,
              score: item.answer![selectedAnswer].value,
            };
          }
          return item;
        });
        setRegisterData(newRegisterData);
      }
    }
    setStep(step - 1);
  };

  return (
    <div className='mt-28 w-full px-8'>
      <div className='mb-10 text-xl font-semibold w-full'>
        {registerData[step].question}
      </div>
      {registerData[step].answer && (
        <ul className='mb-8  '>
          {registerData[step].answer!.map((ans, index) => (
            <li
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`bg-green-500/40  ${
                selectedAnswer === index
                  ? 'bg-green-600'
                  : 'hover:bg-green-500/70'
              }  active:bg-green-600 active:scale-95 duration-100 mb-2 w-full h-10 text-lg rounded-lg p-3 flex items-center `}
            >
              {ans.content}
            </li>
          ))}
        </ul>
      )}
      <section className='flex justify-between'>
        <button onClick={handleBack}>이전</button>
        <button onClick={handleNext}>다음</button>
      </section>
    </div>
  );
}
