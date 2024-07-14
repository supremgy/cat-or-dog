import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function ActiveLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();
  const team = pathname.split('/').pop();
  const isActive = pathname === href;

  const teamColor = (team: string) => {
    const teamColors: { [key: string]: string } = {
      product: 'text-purple-600',
      devops: 'text-blue-600',
      success: 'text-amber-600',
      laboratory: 'text-red-600',
    };

    return teamColors[team] || 'text-teal-600';
  };
  return (
    <Link
      href={href}
      className={`${
        isActive ? `${team && teamColor(team)}` : 'text-black'
      } capitalize`}
    >
      {children}
    </Link>
  );
}
