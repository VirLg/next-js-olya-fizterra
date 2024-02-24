'use client';
import React from 'react';
import Navigation from '../navigation/Navigation';
import { IconButton } from '../iconButton/IconButton';
import Telegramm from '../icons/Telegram_(software)-Logo.wine.svg';
import FB from '../icons/facebook-svgrepo-com.svg';
import Viber from '../icons/viber-svgrepo-com.svg';
import Insta from '../icons/icons8-instagram.svg';
import Logo from '../images/logo-copy.jpg';
const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Contacts', href: '/contacts' },
  { label: 'Gallery', href: '/gallery' },
];
export default function Header() {
  console.log('Logo', Logo);
  return (
    <header className="container bg-green-900 h-[192px] p-6 m-auto ">
      <div className="flex  justify-between items-end">
        <img src={Logo.src} alt="logo" width={'250px'} />

        <ul className="flex">
          <Navigation navLinks={navItems} />
        </ul>
      </div>
      <div className="flex justify-center items-center gap-[60px] mt-4">
        <IconButton className="w-[60px] h-[60px]">{Telegramm} </IconButton>
        <IconButton className="w-[30px] h-[30px]">{FB} </IconButton>
        <IconButton className="w-[30px] h-[30px]">{Viber} </IconButton>
        <IconButton className="w-[30px] h-[30px]">{Insta} </IconButton>
      </div>
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
