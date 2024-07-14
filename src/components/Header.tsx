'use client';
import React from 'react';
import Image from 'next/image';
import InfoGrab from '../../public/infograb.svg';
import { useStore } from '@/store';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const setModalState = useStore((state) => state.setModalState);

  const handleClick = () => {
    pathname === '/survey' ? setModalState(true) : router.push('/');
  };
  return (
    <header className='w-full h-10 flex justify-center mt-4'>
      <Image src={InfoGrab} alt='InfoGrab' height={30} onClick={handleClick} />
    </header>
  );
}
