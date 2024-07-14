import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <nav className='flex w-full justify-around gap-2 my-4 font-bold text-lg sm:text-2xl xs:text-base xxs:text-sm'>
      <Link href={`/dashboard`}>InfoGrab</Link>
      <Link href={`/dashboard/${'product'}`}>Product</Link>
      <Link href={`/dashboard/${'devops'}`}>DevOps</Link>
      <Link href={`/dashboard/${'success'}`}>Success</Link>
      <Link href={`/dashboard/${'laboratory'}`}>Laboratory</Link>
    </nav>
  );
}
