'use client';

import React from 'react';
import ProgressBar from './ProgressBar';
import SingleChoice from './SingleChoice';
import RatingQuestion from './RatingQuestion';
import MultipleChoices from './MultipleChoices';
import { useStore } from '@/store';
import AlertModal from './AlertModal';
import Toast from './Toast';
import { Survey } from '@/app/survey/page';
import { redirect } from 'next/navigation';

export interface SurveyProps {
  survey: Survey[];
}

export default function SurveyForm({ survey }: SurveyProps) {
  const nickname = useStore((state) => state.nickname);
  !nickname && redirect('/');
  const modalState = useStore((state) => state.modalState);
  const toastState = useStore((state) => state.toastState);
  const sumTotal = useStore((state) => state.setTotal);
  const step = useStore((state) => state.currentStep);
  const setStep = useStore((state) => state.setCurrentStep);

  return (
    <>
      <ProgressBar step={step} />
      <div className='relative mb-4'>
        <div>
          {toastState && <Toast />}
          {(step === 0 || step === 1) && (
            <SingleChoice
              step={step}
              setStep={setStep}
              survey={survey}
              sumTotal={sumTotal}
            />
          )}
          {step === 2 && (
            <MultipleChoices
              step={step}
              setStep={setStep}
              survey={survey}
              sumTotal={sumTotal}
            />
          )}
          {step === 3 && (
            <RatingQuestion
              step={step}
              setStep={setStep}
              survey={survey}
              sumTotal={sumTotal}
            />
          )}
        </div>
      </div>
      {modalState && <AlertModal />}
    </>
  );
}
