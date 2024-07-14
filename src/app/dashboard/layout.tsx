import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-teal-200/60 flex flex-col w-full px-4'>
      <Header />
      <NavBar />
      <div className='px-4 mt-4'>{children}</div>
    </div>
  );
}
