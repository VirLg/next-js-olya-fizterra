'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = ({ navItems }) => {
  const pathname = usePathname();
  return (
    <>
      {navItems.map(el => {
        const isActive = pathname === el.href;
        return (
          <li className="mr-[40px]">
            <Link
              key={el.label}
              href={el.href}
              className={isActive ? 'active' : ''}
            >
              <span className="text-4xl text-lime-100">{el.label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default Navigation;
