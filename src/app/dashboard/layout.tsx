import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  //team 목록 fetch
  const teamList = [
    { name: 'product' },
    { name: 'devops' },
    { name: 'success' },
    { name: 'laboratory' },
  ];
  return (
    <div className='main-theme overflow-y-auto'>
      <Header />
      <NavBar teamList={teamList} />
      <div className='px-4 mt-4 mb-8'>{children}</div>
    </div>
  );
}
