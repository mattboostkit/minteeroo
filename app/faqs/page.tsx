import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "FAQs | Mintee",
  description: "Frequently asked questions about Mintee peppermint water.",
};

const FAQsPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h1 className="font-gazpacho text-4xl sm:text-5xl md:text-6xl font-bold text-mint-dark mb-16 md:mb-20 text-center tracking-tight">
        Frequently Asked Questions
      </h1>

      <section className="space-y-10">
        <div>
          <h2 className="font-gazpacho text-2xl font-semibold text-mint-dark mb-4">What is Mintee?</h2>
          <p className="text-neutral-darker leading-relaxed">
            Mintee is a refreshing peppermint-infused water with zero sugar and zero calories. It&apos;s designed to be a crisp, clean, and healthy hydration option.
          </p>
        </div>

        <div>
          <h2 className="font-gazpacho text-2xl font-semibold text-mint-dark mb-4">Where is Mintee made?</h2>
          <p className="text-neutral-darker leading-relaxed">
            Mintee is proudly made in Ireland using real Irish peppermint leaves.
          </p>
        </div>

        <div>
          <h2 className="font-gazpacho text-2xl font-semibold text-mint-dark mb-4">Is Mintee suitable for vegans?</h2>
          <p className="text-neutral-darker leading-relaxed">
            Yes, Mintee is completely plant-based and suitable for vegans.
          </p>
        </div>

        <div>
          <h2 className="font-gazpacho text-2xl font-semibold text-mint-dark mb-4">Where can I buy Mintee?</h2>
          <p className="text-neutral-darker leading-relaxed">
            Currently, Mintee is available for purchase through our online store. We are working on expanding to retail locations soon!
          </p>
        </div>

        {/* Add more dummy questions as needed */}

      </section>
    </div>
  );
};

export default FAQsPage;