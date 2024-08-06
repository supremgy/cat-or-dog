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

  const step = useStore((state) => state.currentStep);

  return (
    <>
      <ProgressBar step={step} />
      <div className='relative mb-4'>
        {toastState && <Toast />}

        {(step === 0 || step === 1) && <SingleChoice survey={survey} />}

        {step === 2 && <MultipleChoices survey={survey} />}

        {step === 3 && <RatingQuestion survey={survey} />}
      </div>

      {modalState && <AlertModal />}
    </>
  );
}
