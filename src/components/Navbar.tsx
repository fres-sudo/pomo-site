"use client";
import React, { useState } from "react";
import appicon from "../../public/appicon.png";
import Image from "next/image";
import { Menu, X, Link as LinkIcon } from "lucide-react"; // Link icon for the menu

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black border-b border-b-white/20">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          {/* App Icon with gradient */}
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C3F0B1,#2FD8FE)] blur-md"></div>
            <a
              href="/"
            ><Image
                src={appicon}
                alt="appicon"
                className="h-12 w-12 rounded-xl relative"
              /></a>

          </div>

          {/* Menu Button for Mobile */}
          <div
            className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="text-white" /> // Close icon when menu is open
            ) : (
              <Menu className="text-white" /> // Menu icon when closed
            )}
          </div>

          {/* Navbar for larger screens */}
          <nav className="gap-6 items-center hidden sm:flex">
            <a
              href="/about"
              className="text-white hover:text-opacity-100 transition text-opacity-60"
            >
              About
            </a>
            <a
              href="/changelog"
              className="text-white hover:text-opacity-100 transition text-opacity-60"
            >
              Changelog
            </a>
            <a
              href="/contact"
              className="text-white hover:text-opacity-100 transition text-opacity-60"
            >
              Contact Us
            </a>
            <a href="/">
              <button className="bg-white py-2 px-4 rounded-lg">Get for free</button>
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu (Slide-in from the right) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-black transition-transform transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } sm:hidden z-50`}
      >
        <div className="p-6 flex flex-col h-full">
          {/* Top Section with Close Icon and App Icon */}
          <div className="flex justify-between items-center mb-6">
            {/* Close Icon */}
            <div
              className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg cursor-pointer"
              onClick={toggleMenu}
            >
              <X className="text-white" />
            </div>
            {/* App Icon (no decoration) */}
            <div>
              <Image
                src={appicon}
                alt="appicon"
                className="h-10 w-10 rounded-lg"
              />
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-700 mb-6" />

          {/* Navigation Links with Link Icon */}
          <nav className="flex flex-col space-y-6">
            <a
              href="/about"
              className="text-white hover:text-opacity-100 transition text-opacity-60 flex items-center"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              About
            </a>
            <a
              href="/changelog"
              className="text-white hover:text-opacity-100 transition text-opacity-60 flex items-center"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              Changelog
            </a>
            <a
              href="/contact"
              className="text-white hover:text-opacity-100 transition text-opacity-60 flex items-center"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              Contact Us
            </a>
            <a href="/">
              <button className="bg-white py-2 px-4 rounded-lg w-full flex items-center justify-center">
                Get for free
              </button>
            </a>
          </nav>

          {/* Optional Footer or Additional Links */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;


