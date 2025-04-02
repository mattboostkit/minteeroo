import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Mintee",
  description: "Mintee's privacy policy regarding user data.",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h1 className="font-gazpacho text-4xl sm:text-5xl md:text-6xl font-bold text-mint-dark mb-16 md:mb-20 text-center tracking-tight">
        Privacy Policy
      </h1>

      <div className="prose prose-lg md:prose-xl max-w-none text-neutral-darker space-y-6">
        <p>
          <strong>Last Updated: [Insert Date]</strong>
        </p>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">1. Introduction</h2>
          <p>
            Welcome to Mintee (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Insert Contact Email].
          </p>
          <p>
            This privacy notice describes how we might use your information if you visit our website at [Insert Website URL], purchase our products, or otherwise engage with us.
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">2. What Information Do We Collect?</h2>
          <p>
            [Placeholder: Detail the types of personal information collected, e.g., name, email, address, payment info, usage data, cookies.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">3. How Do We Use Your Information?</h2>
          <p>
            [Placeholder: Explain the purposes for collecting data, e.g., order fulfillment, marketing, website improvement, customer support.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">4. Will Your Information Be Shared With Anyone?</h2>
          <p>
            [Placeholder: Describe sharing practices, e.g., third-party service providers like payment processors, shipping companies, marketing platforms. Mention compliance with legal obligations.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">5. How Do We Keep Your Information Safe?</h2>
          <p>
            [Placeholder: Outline security measures taken to protect user data.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">6. What Are Your Privacy Rights?</h2>
          <p>
            [Placeholder: Explain user rights, e.g., access, correction, deletion, opt-out of marketing.]
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">7. Updates to This Notice</h2>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Last Updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="font-gazpacho text-xl font-semibold text-mint-dark mb-3">8. How Can You Contact Us About This Notice?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at [Insert Contact Email] or by post to:
          </p>
          <p>
            [Insert Company Name]<br />
            [Insert Company Address]
          </p>
        </section>
        {/* Add more sections as legally required */}
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;