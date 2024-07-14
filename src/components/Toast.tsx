import { useStore } from '@/store';
import React from 'react';

export default function Toast() {
  const offToast = useStore((state) => state.offToast);
  return (
    <div
      onClick={() => offToast()}
      className='absolute -top-2 w-full h-full mx-auto flex justify-center items-center animate-fadeOut'
    >
      <div className='text-center text-white text-sm font-medium  bg-neutral-800/60 rounded-2xl w-2/4 h-9 flex items-center justify-center'>
        잠깐! 답을 알려주세요 😅
      </div>
    </div>
  );
}
