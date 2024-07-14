'use client';
import React from 'react';
import ActiveLink from './ActiveLink';

interface Team {
  name: string;
}
interface Props {
  teamList: Team[];
}

export default function NavBar({ teamList }: Props) {
  return (
    <nav className=' flex my-4 justify-around gap-2 font-bold text-lg sm:text-2xl xs:text-base xxs:text-sm'>
      <ActiveLink href={`/dashboard`}>InfoGrab</ActiveLink>

      {teamList &&
        teamList.map((item, i) => (
          <ActiveLink key={i} href={`/dashboard/${item.name}`}>
            {item.name}
          </ActiveLink>
        ))}
    </nav>
  );
}
