import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Mintee",
  description: "Mintee's terms of service.",
};

const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h1 className="font-gazpacho text-4xl sm:text-5xl md:text-6xl font-bold text-mint-dark mb-16 md:mb-20 text-center tracking-tight">
        Terms of Service
      </h1>

      <div className="prose prose-lg md:prose-xl max-w-none text-neutral-darker space-y-6">
        <p>
          <strong>Last Updated: [Insert Date]</strong>
        </p>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing or using our website ([Insert Website URL]) and purchasing our products, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, then you may not access the service.
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">2. Purchases</h2>
          <p>
            [Placeholder: Detail terms related to purchasing products, payment methods, pricing, order acceptance, cancellations.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">3. User Accounts</h2>
          <p>
            [Placeholder: If applicable, describe terms for account creation, responsibilities, termination.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">4. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Mintee and its licensors.
            [Placeholder: Add details about trademarks, copyrights, etc.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">5. Limitation of Liability</h2>
          <p>
            [Placeholder: Include standard limitation of liability clauses.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of Ireland, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at [Insert Contact Email].
          </p>
        </section>
        {/* Add more sections as legally required */}
      </div>
    </div>
  );
};

export default TermsOfServicePage;