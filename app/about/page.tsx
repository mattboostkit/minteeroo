import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story | Mintee",
  description: "Learn about Mintee's mission, the benefits of peppermint, and our commitment to sustainability.",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-mint-dark mb-16 md:mb-20 text-center tracking-tight">
        Our Story
      </h1>

      {/* Brand Story Section */}
      <section className="mb-20 md:mb-24">
        {/* Apply heading font */}
        {/* Apply heading font via CSS class */}
        <h2 className="font-gazpacho text-3xl md:text-4xl font-bold text-mint-dark mb-8 text-center md:text-left">The Mintee Journey</h2>
        <div className="prose prose-lg md:prose-xl max-w-none text-neutral-darker">
          <p>
            Mintee started with a simple idea: to create a truly refreshing drink that was both healthy and delicious. We saw a gap in the market for a sophisticated, natural alternative to sugary sodas and bland waters. Inspired by the invigorating properties of peppermint, we set out to craft the perfect infusion.
          </p>
          <p>
            {/* Placeholder for more brand story content */}
            Our journey involved countless experiments to find the purest peppermint extract and the ideal balance of flavour. We believe in transparency and quality, from sourcing our ingredients to our final product.
          </p>
        </div>
      </section>

      {/* Peppermint Benefits Section */}
      <section className="mb-20 md:mb-24 bg-mint-light p-10 md:p-12 rounded-xl shadow-sm">
        {/* Apply heading font */}
        {/* Apply heading font via CSS class */}
        <h2 className="font-gazpacho text-3xl md:text-4xl font-bold text-mint-dark mb-8 text-center">The Power of Peppermint</h2>
        <div className="prose prose-lg md:prose-xl max-w-none text-neutral-darker text-center">
          <p>
            Peppermint isn&apos;t just about taste; it&apos;s packed with benefits. Known for centuries for its soothing properties, peppermint can aid digestion, freshen breath, and provide a natural energy boost without caffeine.
          </p>
          <p>
            {/* Placeholder for more educational content */}
            We use only the finest peppermint extract to ensure you get the best flavour and benefits in every sip.
          </p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-white p-10 md:p-12 rounded-xl border border-neutral">
        {/* Apply heading font */}
        {/* Apply heading font via CSS class */}
        <h2 className="font-gazpacho text-3xl md:text-4xl font-bold text-mint-dark mb-8 text-center">Our Commitment to the Planet</h2>
        <div className="prose prose-lg md:prose-xl max-w-none text-neutral-darker">
          <p>
            Sustainability is at the heart of Mintee. We are conscious of our environmental impact and are committed to making responsible choices.
          </p>
          <ul className="list-none space-y-3 pl-0">
            <li className="flex items-start">
              <span className="text-mint mr-3 mt-1">✓</span>
              <span>Our 500ml bottles are made from recycled PET and are fully recyclable.</span>
            </li>
            <li className="flex items-start">
              <span className="text-mint mr-3 mt-1">✓</span>
              <span>We are constantly exploring ways to reduce our carbon footprint in production and shipping.</span>
            </li>
            <li className="flex items-start">
              <span className="text-mint mr-3 mt-1">✓</span>
              <span>We partner with suppliers who share our commitment to ethical and sustainable practices.</span>
            </li>
            {/* Placeholder for more sustainability details */}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;