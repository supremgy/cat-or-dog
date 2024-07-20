import React, { useState } from 'react';
import { StepProps } from './SingleChoice';
import { useStore } from '@/store';
import ButtonForm from './ButtonForm';

export default function MultipleChoices({ survey }: StepProps) {
  const onToast = useStore((state) => state.onToast);
  const selectedIndex = useStore((state) => state.selectedIndex);
  const setSelectedIndex = useStore((state) => state.setSelectedIndex);

  const step = useStore((state) => state.currentStep);
  const setStep = useStore((state) => state.setCurrentStep);
  const [selectedAnswer, setSelectedAnswer] = useState<number[]>(
    selectedIndex[step].index as number[]
  );
  const handleNext = () => {
    if (selectedAnswer.length === 2) {
      setStep(step + 1);
    } else {
      onToast();
      return;
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer.includes(index)) {
      setSelectedAnswer(selectedAnswer.filter((item) => item !== index));
      setSelectedIndex(
        selectedAnswer.filter((item) => item !== index),
        step
      );
    } else if (selectedAnswer.length < 2) {
      setSelectedAnswer([...selectedAnswer, index]);
      setSelectedIndex([...selectedAnswer, index], step);
    } else {
      setSelectedAnswer([selectedAnswer[0], index]);
      setSelectedIndex([selectedAnswer[0], index], step);
    }
  };
  return (
    <div className='mt-28 w-full'>
      <div className='mb-10 text-xl font-semibold'>{survey[step].question}</div>
      {survey[step].answer && (
        <ul className='mb-8'>
          {survey[step].answer.map((ans, index) => (
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
      <ButtonForm handleBack={handleBack} handleNext={handleNext} />
    </div>
  );
}
