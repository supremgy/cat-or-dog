'use client';
import React from 'react';
import Image from 'next/image';
import InfoGrab from '../../public/infograb.svg';
import { useStore } from '@/store';
import { usePathname, useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const setModalState = useStore((state) => state.setModalState);

  const handleClick = () => {
    if (pathname === '/survey') {
      setModalState(true);
      return;
    } else if (pathname === '/dashboard') {
      signOut();
    }
    router.push('/');
  };
  return (
    <header className='w-full h-10 flex justify-center mt-4'>
      <Image src={InfoGrab} alt='InfoGrab' height={30} onClick={handleClick} />
    </header>
  );
}
