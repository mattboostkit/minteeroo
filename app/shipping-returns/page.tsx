import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shipping & Returns | Mintee",
  description: "Information about shipping and returns for Mintee orders.",
};

const ShippingReturnsPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h1 className="font-gazpacho text-4xl sm:text-5xl md:text-6xl font-bold text-mint-dark mb-16 md:mb-20 text-center tracking-tight">
        Shipping & Returns
      </h1>

      <div className="prose prose-lg md:prose-xl max-w-none text-neutral-darker space-y-8">
        <section>
          <h2 className="font-gazpacho text-2xl font-semibold text-mint-dark mb-4">Shipping Information</h2>
          <p>
            We currently ship Mintee orders within Ireland and the UK. Orders are typically processed within 1-2 business days.
          </p>
          <p>
            Standard shipping usually takes 3-5 business days. You will receive a tracking number once your order has shipped.
          </p>
          <p>
            Shipping costs are calculated at checkout based on your location and order size. We offer free standard shipping on orders over €50.
          </p>
          {/* Add more specific shipping details if needed */}
        </section>

        <section>
          <h2 className="font-gazpacho text-2xl font-semibold text-mint-dark mb-4">Returns Policy</h2>
          <p>
            We want you to love Mintee! If you&apos;re not completely satisfied with your purchase, please contact us within 14 days of receiving your order.
          </p>
          <p>
            Due to the nature of our product, we can only accept returns for unopened and undamaged items. Please email us at <a href="mailto:support@mintee.example" className="text-mint-dark hover:underline">support@mintee.example</a> with your order number and reason for return.
          </p>
          <p>
            Return shipping costs are the responsibility of the customer, unless the return is due to an error on our part (e.g., wrong item shipped, damaged item). Once we receive and inspect the returned item(s), we will process your refund.
          </p>
          {/* Add more specific return details if needed */}
        </section>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;