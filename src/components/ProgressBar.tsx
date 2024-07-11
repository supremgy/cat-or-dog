import React from 'react';

export default function ProgressBar({ step }: { step: number }) {
  return (
    <div
      className={`h-1 bg-teal-950 absolute left-0 rounded-r-lg duration-200 ease-in-out
        ${step === 0 && 'w-1/4'} // 
        ${step === 1 && 'w-2/4'} // 
        ${step === 2 && 'w-3/4'} // 
        ${step === 3 && 'w-full'}`}
    />
  );
}
