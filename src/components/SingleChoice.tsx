import React, { useEffect, useState } from 'react';
import { useStore } from '@/store';
import ButtonForm from './ButtonForm';
import Link from 'next/link';
import { Survey } from '@/app/survey/page';

export interface StepProps {
  step: number;
  survey: Survey[];
  setStep: (step: number) => void;
  sumTotal: (score: number) => void;
}

export default function SingleChoice({ step, setStep, survey }: StepProps) {
  const setModalState = useStore((state) => state.setModalState);
  const setToastState = useStore((state) => state.setToastState);
  const selectedIndex = useStore((state) => state.selectedIndex);
  const setSelectedIndex = useStore((state) => state.setSelectedIndex);
  const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>(
    selectedIndex[step].index as number
  );
  useEffect(() => {
    setSelectedAnswer(selectedIndex[step].index as number);
  }, [step]);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    setSelectedIndex(index, step);
  };

  const handleNext = () => {
    if (typeof selectedAnswer === 'number') {
      setStep(step + 1);
    } else {
      setToastState();
      return;
    }
  };
  const handleBack = () => {
    if (step === 0) {
      setModalState(true);
      return;
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className='mt-16 size-full'>
      <div
        className={`${step === 1 ? 'mb-2' : 'mb-10'} text-xl w-full`}
        dangerouslySetInnerHTML={{ __html: survey[step].question }}
      />
      {step === 1 && (
        <p className='mb-8'>
          <span className='mr-2'>👉</span>
          <Link
            target='_blank'
            className='underline'
            href={
              'https://do0ori.notion.site/024ab670d29546958b84c2a3c67d9cac?v=844c3ec2b3844e87ac91f30aa515284d'
            }
          >
            (DangDangWalk팀 미팅 노션)
          </Link>
        </p>
      )}
      {survey[step].answer && (
        <ul className='mb-8  '>
          {survey[step].answer!.map((ans, index) => (
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
      <ButtonForm handleBack={handleBack} handleNext={handleNext} />
    </div>
  );
}
