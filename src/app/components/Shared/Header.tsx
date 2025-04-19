"use client";

import Link from "next/link";
import React, { useState } from "react";
import { PiDotsNine } from "react-icons/pi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Home", href: "/home" },
    { label: "Pages", href: "/pages" },
    { label: "Blog", href: "/blog" },
    { label: "Events", href: "/events" },
    { label: "Contact", href: "/contact" },
    {
      label: "More",
      href: "/more",
      icon: <PiDotsNine className="text-xl md:text-2xl" />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Daevnt
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 lg:space-x-6 xl:space-x-8">
              {navigationItems.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white font-medium hover:text-blue-400 transition-colors text-sm lg:text-base flex items-center gap-1 px-2 py-1"
                  >
                    {icon ? icon : label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-white hover:text-blue-400 hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 bg-black/90 backdrop-blur-sm p-4 rounded-md shadow-lg border border-white/10">
            <ul className="flex flex-col space-y-3">
              {navigationItems.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white hover:text-blue-400 text-base flex items-center gap-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {icon && <span className="text-xl">{icon}</span>}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
