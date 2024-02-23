'use client';
import React from 'react';
import Navigation from '../navigation/Navigation';
import { IconButton } from '../iconButton/IconButton';
import Telegramm from '../icons/Telegram_(software)-Logo.wine.svg';
import FB from '../icons/facebook-svgrepo-com.svg';
import Viber from '../icons/viber-svgrepo-com.svg';
import Insta from '../icons/icons8-instagram.svg';
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Gallery', href: '/gallery' },
];
export default function Header() {
  return (
    <header className="container bg-sky-500 h-[80px] pt-6">
      <Navigation navLinks={navItems} />
      <IconButton className="w-[60px] h-[60px]">{Telegramm} </IconButton>
      <IconButton className="w-[30px] h-[30px]">{FB} </IconButton>
      <IconButton className="w-[30px] h-[30px]">{Viber} </IconButton>
      <IconButton className="w-[30px] h-[30px]">{Insta} </IconButton>
    </header>
  );
}
{
  /* <ul className=" flex justify-center ">
        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/main">Main</Link>
        </li>

        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/home">Home</Link>
        </li>
        <li className="mr-10 hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/statistics">Statistics</Link>
        </li>
        <li className="hover:text-slate-300 tracking-widest text-2xl">
          <Link href="/about">About</Link>
        </li>
      </ul> */
}
