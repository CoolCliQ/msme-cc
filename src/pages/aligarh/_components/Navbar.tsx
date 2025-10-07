// components/Navbar.tsx
import React from "react";

const navItems = ["Testimonials", "Our Works", "About Us", "Contact Us"];

const Navbar: React.FC = () => {
  return (
    // w-full fixed top-0 left-0 z-50 transition-colors duration-300 font-Outfit bg-[#0A0A0A]/80 backdrop-blur-lg
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#bg-gray-900]/80 backdrop-blur-md shadow-sm h-18">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-white/75">MyLogo</div>

        {/* Nav links */}
        <ul className="hidden md:flex items-center space-x-8 text-white/75 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button (optional) */}
        {/* You can add a hamburger menu here for mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
