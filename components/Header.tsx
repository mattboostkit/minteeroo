import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const Header = () => {
  return (
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
        <div className="space-x-8 text-lg">
          <Link href="/#product-showcase" className="text-neutral-darker hover:text-mint transition duration-300 pb-1 border-b-2 border-transparent hover:border-mint">Shop</Link>
          <Link href="/about" className="text-neutral-darker hover:text-mint transition duration-300 pb-1 border-b-2 border-transparent hover:border-mint">Our Story</Link>
          {/* Add other links like Contact, Account, Cart later */}
          <Link href="/cart" className="text-neutral-darker hover:text-mint transition duration-300 pb-1 border-b-2 border-transparent hover:border-mint">
            Cart (0) {/* Placeholder */}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;