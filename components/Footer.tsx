import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

const Footer = () => {
  return (
    <footer className="bg-neutral-darker text-neutral-light py-16 md:py-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12">
        {/* Brand Info & Socials */}
        <div className="md:col-span-1 lg:col-span-1">
          <Link href="/" className="inline-block mb-4">
             <Image src="/images/Mintee Logo_White.png" alt="Mintee Logo White" width={120} height={38} />
             {/* <h3 className="text-2xl font-bold text-white">Mintee</h3> */}
          </Link>
          <p className="text-sm text-neutral mb-6">Refreshingly Different. Naturally Mint.</p>
          {/* Social Media Links */}
          <div className="flex space-x-5">
            <a href="#" aria-label="Facebook" className="text-neutral hover:text-mint-light transition duration-300 text-xl">FB</a>
            <a href="#" aria-label="Instagram" className="text-neutral hover:text-mint-light transition duration-300 text-xl">IG</a>
            <a href="#" aria-label="Twitter" className="text-neutral hover:text-mint-light transition duration-300 text-xl">TW</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          {/* Quick Links */}
          <h4 className="font-semibold text-white mb-5 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/#product-showcase" className="text-neutral hover:text-mint-light transition duration-300">Shop</Link></li>
            <li><Link href="/about" className="text-neutral hover:text-mint-light transition duration-300">Our Story</Link></li>
            <li><Link href="/faqs" className="text-neutral hover:text-mint-light transition duration-300">FAQs</Link></li>
            <li><Link href="/contact" className="text-neutral hover:text-mint-light transition duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          {/* Support Links */}
          <h4 className="font-semibold text-white mb-5 text-lg">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/shipping-returns" className="text-neutral hover:text-mint-light transition duration-300">Shipping & Returns</Link></li>
            <li><Link href="/privacy-policy" className="text-neutral hover:text-mint-light transition duration-300">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="text-neutral hover:text-mint-light transition duration-300">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact Info Placeholder (Removed Newsletter Form) */}
        <div className="lg:col-span-1">
          <h4 className="font-semibold text-white mb-5 text-lg">Contact</h4>
          <ul className="space-y-3 text-sm text-neutral">
             <li>Email: hello@mintee.co.uk</li>
             <li>Address: 123 Mint Lane, London, UK</li>
             {/* Add more contact details if needed */}
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className="container mx-auto px-6 mt-12 pt-8 border-t border-neutral-dark/50 text-center text-xs text-neutral">
        © {new Date().getFullYear()} Mintee Water Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;