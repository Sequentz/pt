"use client";

import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <div className="bg-customGray w-full h-24 relative">
      {/* Visible only on mobile (small screens), hidden on tablet and larger screens */}
      <div className="block sm:hidden">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Header;
