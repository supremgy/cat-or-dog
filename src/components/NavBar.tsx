'use client';
import React from 'react';
import ActiveLink from './ActiveLink';

interface Team {
  name: string;
}
interface Props {
  teams: string[];
}

export default function NavBar({ teams }: Props) {
  return (
    <nav className=' flex my-4 justify-around gap-2 font-bold text-lg sm:text-2xl xs:text-base xxs:text-sm'>
      <ActiveLink href={`/dashboard`}>InfoGrab</ActiveLink>

      {teams &&
        teams.map((team, i) => (
          <ActiveLink key={i} href={`/dashboard/${team.toLowerCase()}`}>
            {team}
          </ActiveLink>
        ))}
    </nav>
  );
}
