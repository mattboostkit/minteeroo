import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image'; // Import Image component

// This function would typically fetch metadata based on the slug
// For now, we'll use generic metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const productName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()); // Simple slug to title
  return {
    title: `${productName} | Mintee`,
    description: `Details and purchase options for ${productName}.`,
  };
}

// This component would fetch product data based on the slug
const ProductPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  // Placeholder data - replace with actual data fetching logic
  const product = {
    name: "Mintee Peppermint Water - 500ml",
    price: "£1.99",
    subscriptionPrice: "£1.79",
    description: "Experience the crisp, cool refreshment of Mintee. Our signature peppermint-infused water is crafted with natural extract, offering a delightful taste with zero sugar and zero calories. Perfect for hydration anytime, anywhere.",
    ingredients: "Purified Water, Natural Peppermint Extract.",
    benefits: ["Zero Sugar", "Zero Calories", "Natural Flavour", "Aids Digestion", "Refreshing"],
    servingSuggestions: "Best served chilled. Enjoy on its own or as a mixer.",
  };

  return (
    <div className="container mx-auto max-w-6xl px-6 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Product Image Gallery Placeholder */}
        <div className="sticky top-28">
          <div className="relative aspect-square bg-neutral-light rounded-xl shadow-sm flex items-center justify-center">
            {/* Placeholder for main product image */}
             <span className="text-neutral-dark">Product Image Placeholder</span>
             {/* Example using placeholder image if available */}
             {/* <Image src="/images/product-placeholder.png" alt={product.name} fill style={{ objectFit: 'contain' }} /> */}
          </div>
          {/* Thumbnail placeholders */}
          <div className="flex gap-3 mt-4 justify-center">
            <div className="w-16 h-16 bg-neutral rounded-md border border-neutral-dark"></div>
            <div className="w-16 h-16 bg-neutral rounded-md"></div>
            <div className="w-16 h-16 bg-neutral rounded-md"></div>
          </div>
        </div>

        {/* Product Details & Purchase Options */}
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mint-dark mb-3 leading-tight tracking-tight">{product.name}</h1>
          <p className="text-3xl font-bold text-mint-dark mb-6">{product.price}</p> {/* Use mint-dark for price */}

          {/* Subscription Option */}
          <div className="bg-mint-light p-5 rounded-lg mb-8 border border-mint">
            <p className="font-semibold text-mint-dark text-lg mb-1">Subscribe & Save</p>
            <p className="text-neutral-darker mb-2">Get it for <span className="font-bold">{product.subscriptionPrice}</span> with a subscription. Delivered monthly.</p>
            {/* TODO: Link this button */}
            <button className="text-sm text-mint-dark hover:underline font-medium">Learn More</button>
          </div>

          <p className="text-lg text-neutral-darker mb-8 leading-relaxed">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <label htmlFor="quantity" className="font-semibold text-neutral-darker">Quantity:</label>
            {/* TODO: Implement quantity logic */}
            <select id="quantity" className="border border-neutral-dark rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mint-dark focus:border-transparent">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-mint hover:bg-mint-dark text-white font-semibold py-3 px-10 rounded-full transition duration-300 text-lg shadow-md hover:shadow-lg mb-10">
            Add to Basket
          </button>

          {/* Product Information Section */}
          <div className="border-t border-neutral pt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-mint-dark mb-3">Product Details</h3>
              <div className="prose prose-neutral max-w-none text-neutral-darker">
                <p><strong>Ingredients:</strong> {product.ingredients}</p>
                <p><strong>Serving Suggestions:</strong> {product.servingSuggestions}</p>
                <p><strong>Benefits:</strong></p>
                <ul>
                  {product.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}
                </ul>
              </div>
            </div>
            {/* Add placeholders for other potential sections like Shipping Info */}
          </div>
        </div>
      </div>

      {/* --- Customer Reviews Section --- */}
      <section id="reviews" className="mt-20 md:mt-32 border-t border-neutral pt-16 md:pt-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mint-dark mb-12 text-center">
          Customer Reviews
        </h2>
        <div className="text-center text-neutral-darker">
          {/* Placeholder for reviews component */}
          {/* TODO: Implement reviews display */}
          <p>Reviews coming soon!</p>
        </div>
      </section>
      {/* --- End Customer Reviews Section --- */}
    </div>
  );
};

export default ProductPage;