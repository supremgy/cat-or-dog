import React from 'react';
import Image from 'next/image';
import InfoGrab from '../../public/infograb.svg';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full h-10 flex justify-center mt-4'>
      <Link href='/'>
        <Image src={InfoGrab} alt='InfoGrab' height={30} />
      </Link>
    </header>
  );
}
