'use client'; // Need client component for state

import React, { useState } from 'react'; // Import useState
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <> {/* Add Fragment wrapper */}
    <header className="bg-white sticky top-0 z-50 border-b border-neutral">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo */}
        {/* Use Image component for the logo */}
        <Link href="/" className="block"> {/* Use block for link sizing */}
          <Image
            src="/images/Mintee Logo.png"
            alt="Mintee Logo"
            width={150} // Increased width
            height={48} // Increased height
            priority={true}
          />
        </Link>
        {/* Navigation Links */}
        {/* Desktop Navigation Links - Hidden on small screens */}
        <div className="hidden md:flex space-x-8 text-lg items-center">
          <Link href="/#product-showcase" className="text-neutral-darker hover:text-mint transition duration-300 pb-1 border-b-2 border-transparent hover:border-mint">Shop</Link>
          <Link href="/about" className="text-neutral-darker hover:text-mint transition duration-300 pb-1 border-b-2 border-transparent hover:border-mint">Our Story</Link>
          {/* Add other links like Contact, Account later */}
          <Link href="/cart" className="text-neutral-darker hover:text-mint transition duration-300 pb-1 border-b-2 border-transparent hover:border-mint">
            Cart (0) {/* Placeholder */}
          </Link>
        </div>

        {/* Mobile Menu Button - Visible only on small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="text-neutral-darker hover:text-mint focus:outline-none"
          >
            {/* Simple Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>

    {/* Mobile Menu Panel */}
    {/* Use transition classes for smooth slide-in/fade-in effect */}
    <div
      className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl pt-16"> {/* Adjust padding-top to avoid overlap with header */}
         {/* Close button positioned absolutely */}
         <button
            onClick={toggleMobileMenu}
            aria-label="Close menu"
            className="absolute top-6 right-6 text-neutral-darker hover:text-mint focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

        <Link href="/#product-showcase" className="text-neutral-darker hover:text-mint transition duration-300" onClick={toggleMobileMenu}>Shop</Link>
        <Link href="/about" className="text-neutral-darker hover:text-mint transition duration-300" onClick={toggleMobileMenu}>Our Story</Link>
        {/* Add other links */}
        <Link href="/cart" className="text-neutral-darker hover:text-mint transition duration-300" onClick={toggleMobileMenu}>
          Cart (0) {/* Placeholder */}
        </Link>
      </div>
    </div>
    </> // Close Fragment wrapper
  ); // Correct placement for closing parenthesis
};

export default Header;