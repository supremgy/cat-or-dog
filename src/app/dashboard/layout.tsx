import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import { Team } from '@/model/team';
import { fetchTeams } from '@/service/team';
import React from 'react';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const teamData: Team[] = await fetchTeams();
  const teams = teamData
    .filter((team) => team.name !== 'Admin')
    .map((team) => team.name);

  return (
    <div className='main-theme overflow-y-auto'>
      <Header />
      <NavBar teams={teams} />
      <div className='px-4 mt-4 mb-8'>{children}</div>
    </div>
  );
}
