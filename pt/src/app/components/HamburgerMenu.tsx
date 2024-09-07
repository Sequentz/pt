"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState } from "react";
import { SocialIcon } from 'react-social-icons';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="pt-6 top-2 left-0 w-full z-50 p-4">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      
      {/* Sliding Menu */}
      <div
        className={`fixed top-[96px] left-0 h-[calc(100vh-60px)] w-full bg-gradient-to-t from-gray-400 to-black transform transition-transform duration-1000 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="text-white text-2xl mt-10 text-center p-8 font-bold">
        
          <Link href="/" className="block mb-4" onClick={closeMenu}>Home</Link>
          <Link href="/pages/about" className="block mb-4" onClick={closeMenu}>About</Link>
          <Link href="/book" className="block mb-4" onClick={closeMenu}>Book me</Link>

          <div className="flex justify-center mt-6">
            <SocialIcon url="https://www.instagram.com/nikeffemagewichtenheffe/" className="mx-2" target="_blank" />
            <SocialIcon url="https://www.tiktok.com/@belgischegorilla" className="mx-2" target="_blank" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
