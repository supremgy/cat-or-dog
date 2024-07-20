import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import { Team } from '@/model/team';
import { fetchTeams } from '@/service/team';
import { getServerSession } from 'next-auth';
import React, { Suspense } from 'react';
import { authOptions } from '../api/auth/authOptions';
import { redirect } from 'next/navigation';
import GridSpinner from '@/components/GridSpinner';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect('/');

  const teamData: Team[] = await fetchTeams();
  const teams = teamData
    .filter((team) => team.name !== 'Admin')
    .map((team) => team.name);

  return (
    <div className='main-theme overflow-y-auto'>
      <Header />
      <NavBar teams={teams} />
      <div className='px-4 mt-4 mb-8'>
        <Suspense fallback={<GridSpinner />}>{children}</Suspense>
      </div>
    </div>
  );
}
