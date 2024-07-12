'use client';
import React from 'react';
import Image from 'next/image';
import InfoGrab from '../../public/infograb.svg';
import { useStore } from '@/store';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const resetUserData = useStore((state) => state.resetUserData);
  const resetRegisterData = useStore((state) => state.resetRegisterData);
  const handleClick = () => {
    resetUserData();
    resetRegisterData();
    router.push('/');
  };
  return (
    <header className='w-full h-10 flex justify-center mt-4'>
      <Image src={InfoGrab} alt='InfoGrab' height={30} onClick={handleClick} />
    </header>
  );
}
