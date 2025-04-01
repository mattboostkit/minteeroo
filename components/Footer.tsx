import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-darker text-neutral-light py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Mintee</h3>
          <p className="text-sm text-neutral mb-4">Refreshingly Different. Naturally Mint.</p>
          {/* Social Media Icons Placeholder */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-mint-light transition duration-300">FB</a>
            <a href="#" aria-label="Instagram" className="hover:text-mint-light transition duration-300">IG</a>
            <a href="#" aria-label="Twitter" className="hover:text-mint-light transition duration-300">TW</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#product-showcase" className="hover:text-mint-light transition duration-300">Shop</Link></li>
            <li><Link href="/about" className="hover:text-mint-light transition duration-300">Our Story</Link></li>
            <li><Link href="/faq" className="hover:text-mint-light transition duration-300">FAQs</Link></li>
            <li><Link href="/contact" className="hover:text-mint-light transition duration-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shipping" className="hover:text-mint-light transition duration-300">Shipping & Returns</Link></li>
            <li><Link href="/privacy" className="hover:text-mint-light transition duration-300">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-mint-light transition duration-300">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white mb-4">Newsletter</h4>
          <p className="text-sm text-neutral mb-4">Get updates and special offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-grow px-3 py-2 rounded-l-md text-neutral-darker focus:outline-none"
            />
            <button
              type="submit"
              className="bg-mint hover:bg-mint-dark text-white font-bold py-2 px-4 rounded-r-md transition duration-300"
            >
              Go
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-neutral-dark text-center text-sm text-neutral">
        © {new Date().getFullYear()} Mintee Water Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;