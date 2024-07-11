'use client';

import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import SingleChoice from './SingleChoice';
import RatingQuestion from './RatingQuestion';
import MultipleChoices from './MultipleChoices';
import { useStore } from '@/store';
import { Answer } from '@/store/SurveyStore';

interface StepState {
  question: string;
  answer?: Answer[] | undefined;
}

interface Props {
  survey: {
    openness: StepState;
    neuroticism: StepState;
    extroversion: StepState;
    agreeableness: StepState;
  };
}
export default function SurveyForm({ survey }: Props) {
  const setRegisterData = useStore((state) => state.setRegisterData);
  const registerData = useStore((state) => state.registerData);
  useEffect(() => {
    const newRegisterData = [
      {
        ...registerData[0],
        question: survey.openness.question,
        answer: survey.openness.answer,
      },
      {
        ...registerData[1],
        question: survey.neuroticism.question,
        answer: survey.neuroticism.answer,
      },
      {
        ...registerData[2],
        question: survey.extroversion.question,
      },
      {
        ...registerData[3],
        question: survey.agreeableness.question,
        answer: survey.agreeableness.answer,
      },
    ];

    // 상태가 다를 경우에만 업데이트
    if (JSON.stringify(registerData) !== JSON.stringify(newRegisterData)) {
      setRegisterData(newRegisterData);
    }
  }, [setRegisterData, registerData, survey]);

  const [step, setStep] = useState(0);

  return (
    <div>
      <ProgressBar step={step} />
      {step === 0 && <SingleChoice step={step} setStep={setStep} />}
      {step === 1 && <SingleChoice step={step} setStep={setStep} />}
      {step === 2 && <RatingQuestion step={step} setStep={setStep} />}
      {step === 3 && <MultipleChoices step={step} setStep={setStep} />}
    </div>
  );
}
