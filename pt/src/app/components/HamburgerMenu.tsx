"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SocialIcon } from 'react-social-icons';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  // Add/Remove overflow-hidden class to body when menu is open/closed
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      // Clean up by removing the class when the component unmounts
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <div>
      {/* Hamburger Icon */}
      <div className="pt-6 top-2 left-0 w-full z-50 p-4">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      
      {/* Sliding Menu */}
      <div
        className={`fixed top-[96px] left-0 h-[calc(100vh-60px)] w-full bg-customBeige transform transition-transform duration-1000 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="text-customGray text-2xl mt-10 text-center p-8 font-bold">
          <h1 className="text-3xl pb-14">Channel The Violence</h1>
          <Link href="/" className="block mb-4" onClick={closeMenu}>Home</Link>
          <Link href="/pages/about" className="block mb-4" onClick={closeMenu}>Over ons</Link>
          <Link href="/pages/aanbod" className="block mb-4" onClick={closeMenu}>Aanbod</Link>
          <Link href="/pages/booking" className="block mb-4" onClick={closeMenu}>Personal Training</Link>

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
