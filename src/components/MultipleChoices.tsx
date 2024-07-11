import React, { useState } from 'react';
import { StepProps } from './SingleChoice';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store';

export default function MultipleChoices({ step, setStep }: StepProps) {
  const router = useRouter();

  const setTotal = useStore((state) => state.setTotal);
  const registerData = useStore((state) => state.registerData);
  const setRegisterData = useStore((state) => state.setRegisterData);

  const [selectedAnswer, setSelectedAnswer] = useState<number[]>(
    registerData[step].index as number[]
  );

  const handleNext = () => {
    const totalScore = registerData.reduce((accumulator, currentValue) => {
      return accumulator + (currentValue.score || 0);
    }, 0);

    if (selectedAnswer.length === 2) {
      setTotal(
        totalScore +
          registerData[step].answer![selectedAnswer[0]].value +
          registerData[step].answer![selectedAnswer[1]].value
      );
    }

    router.push('/result');
  };

  const handleBack = () => {
    const newRegisterData = registerData.map((item, i) => {
      if (i === step && item.answer && selectedAnswer) {
        return {
          ...item,
          index: selectedAnswer,
        };
      }
      return item;
    });

    setRegisterData(newRegisterData);
    setStep(step - 1);
  };

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer.includes(index)) {
      setSelectedAnswer(selectedAnswer.filter((item) => item !== index));
    } else if (selectedAnswer.length < 2) {
      setSelectedAnswer([...selectedAnswer, index]);
    } else {
      setSelectedAnswer([selectedAnswer[0], index]);
    }
  };
  return (
    <div className='mt-28 w-full px-8'>
      <div className='mb-10 text-xl font-semibold'>
        {registerData[step].question}
      </div>
      {registerData[step].answer && (
        <ul className='mb-8'>
          {registerData[step].answer.map((ans, index) => (
            <li
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`bg-green-500/40 ${
                selectedAnswer.includes(index)
                  ? 'bg-green-600'
                  : 'hover:bg-green-500/70'
              }  active:bg-green-600 active:scale-95 duration-150 mb-2 w-full h-10 rounded-lg p-3 flex items-center `}
            >
              {ans.content}
            </li>
          ))}
        </ul>
      )}
      <section className='flex justify-between'>
        <button onClick={handleBack}>이전</button>
        <button onClick={handleNext}>완료</button>
      </section>
    </div>
  );
}
