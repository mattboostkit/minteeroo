import React from 'react';
import Image from 'next/image'; // Import the Image component
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story | Mintee",
  description: "Learn about Mintee's mission, the benefits of peppermint, and our commitment to sustainability.",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h1 className="font-gazpacho text-4xl sm:text-5xl md:text-6xl font-bold text-mint-dark mb-16 md:mb-20 text-center tracking-tight">
        Our Story
      </h1>

      {/* Brand Story Section */}
      <section className="mb-20 md:mb-24">
        {/* Apply heading font */}
        {/* Apply heading font via CSS class */}
        <h2 className="font-gazpacho text-3xl md:text-4xl font-bold text-mint-dark mb-8 text-center md:text-left">Born to Chill</h2>
        <div className="prose prose-lg md:prose-xl max-w-none text-neutral-darker">
          <p className="mb-4">
            I’ve been drinking peppermint tea for as long as I can remember. It helped with bloating, soothed my headaches, and was my go-to for caffeine-free hydration. But honestly? Plain water just didn’t excite me.
          </p>
          <p className="mb-4">
            So I started chilling peppermint tea in the fridge – and that’s when it clicked.
          </p>
          <p className="mb-4">
            That cool, crisp flavour felt like a little daily treat.
          </p>
          <p className="mb-4">
            Mintee was born out of that moment: a clean, crisp, naturally refreshing drink that makes drinking water something you actually look forward to.
          </p>
          <p className="mb-4">
            Built by The Chill Co, we&apos;re on a mission to bring purposeful, plant-based drinks to life.
            We use real Irish peppermint leaves, not artificial flavourings, and our drinks are made with care for both people and planet.
          </p>
          <p className="mb-4">
            We’re here to create better drinks, one chilled bottle at a time.
          </p>
          <p className="mt-6">
            – Rebecca, Mintee Founder 🌿
          </p>
        </div>
        {/* Founder Image */}
        <div className="mt-12 relative w-full h-[500px] max-w-lg mx-auto rounded-lg overflow-hidden shadow-md"> {/* Removed aspect-video, added fixed height */}
          <Image src="/images/BecJohn.png" alt="Rebecca, Mintee Founder" layout="fill" objectFit="contain" /> {/* Changed objectFit to contain */}
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
          <p className="mb-6"> {/* Added bottom margin */}
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