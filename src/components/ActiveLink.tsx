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
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${isActive ? 'text-teal-600' : 'text-black'} capitalize`}
    >
      {children}
    </Link>
  );
}
