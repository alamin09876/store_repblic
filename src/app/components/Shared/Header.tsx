"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { PiDotsNine } from "react-icons/pi";
import imageOne from "../../../../public/assest/logoImage/logo.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
              setShowHeader(false); // scroll down
            } else {
              setShowHeader(true); // scroll up
            }
            lastScrollY.current = currentScrollY;
          }
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 will-change-transform ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex gap-4 items-center">
            <Image
              src={imageOne}
              alt="Logo"
              width={50}
              height={50}
              className="object-contain opacity-80"
            />
            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              Daevnt
            </Link>
          </div>

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

        {/* Mobile Menu Dropdown */}
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
