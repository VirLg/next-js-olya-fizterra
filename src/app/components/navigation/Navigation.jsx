'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = ({ navLinks }) => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map(el => {
        const isActive = pathname === el.href;
        return (
          <Link
            key={el.label}
            href={el.href}
            className={isActive ? 'active' : ''}
          >
            {el.label}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
