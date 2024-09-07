"use client";
import Hamburger from "hamburger-react";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
    {/* Hamburger Icon */}
      <div className="fixed top-2 left-0 w-full  z-50 p-4">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    {/* SLiding Menu */}
      <div
        className={`fixed top-[96px] left-0 h-[calc(100vh-60px)] w-full bg-red-500 transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="text-white text-2xl mt-10 text-center p-8">
          <li className="mb-4">Home</li>
          <li className="mb-4">About</li>
          <li className="mb-4">Book me</li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
