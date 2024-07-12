import React from 'react';
import Button from './Button';

interface ButtonFromProps {
  nextText?: string;
  handleBack: () => void;
  handleNext: () => void;
}

export default function ButtonForm({
  nextText = '다음',
  handleBack,
  handleNext,
}: ButtonFromProps) {
  return (
    <section className='flex justify-between'>
      <Button onClick={handleBack} text='이전' className='w-16 h-10 text-lg ' />
      <Button
        onClick={handleNext}
        text={nextText}
        className='w-16 h-10 text-lg'
      />
    </section>
  );
}
