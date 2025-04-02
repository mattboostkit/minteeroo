import React from 'react';
import Image from 'next/image';
// Removed animation component import

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      {/* --- Hero Section --- */}
      {/* Added gradient background */}
      {/* --- Hero Section - Full Width Gradient --- */}
      {/* Outer section for full-width background */}
      <section id="hero" className="w-full bg-gradient-to-b from-sky-blue to-white overflow-hidden">
        {/* Inner container for content alignment */}
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between py-20 md:py-32 px-6 min-h-[80vh]">

          {/* Text Content - Left Side */}
          <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left order-2 md:order-1 mb-10 md:mb-0 md:pr-8 lg:pr-12">
            {/* Apply Gazpacho font directly via style */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-mint-dark mb-5 leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-gazpacho)' }}
            >
              Put a &apos;pep&apos; in your step
            </h1>
            <p className="text-lg md:text-xl text-neutral-darker mb-10">
              Discover the crisp, cool taste of Mintee peppermint-infused water. Zero sugar, zero calories, purely refreshing.
            </p>
            {/* Added hover scale effect */}
            {/* Use darker button color */}
            <button className="bg-mint-dark hover:brightness-110 text-white font-semibold py-3 px-10 rounded-full transition duration-300 text-lg shadow-md hover:shadow-lg hover:scale-105 transform">
              Shop Now
            </button>
          </div>

          {/* Image Container - Right Side */}
          <div className="w-full md:w-1/2 lg:w-3/5 order-1 md:order-2 flex justify-center md:justify-end mb-10 md:mb-0"> {/* Added margin-bottom for mobile */}
            <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[400px] h-auto aspect-[487/868]">
              <Image
                src="/images/Mintee.png"
                alt="Mintee Peppermint Water Bottle"
                fill={true}
                style={{ objectFit: 'contain' }}
                priority={true}
                sizes="(max-width: 767px) 60vw, (max-width: 1023px) 40vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>
      {/* --- End Hero Section --- */}

      {/* Benefits/USPs Section */}
      {/* --- Benefits Section --- */}
      {/* Wrap section content in AnimatedDiv */}
      <section id="benefits" className="w-full py-20 md:py-32 bg-white overflow-hidden"> {/* Added overflow-hidden */}
        {/* Wrap the container div with AnimatedDiv */}
        {/* Reverted to standard div container */}
        <div className="container mx-auto px-6 text-center">
          {/* Apply heading font */}
          {/* Apply heading font via CSS class */}
          <h2 className="font-gazpacho text-3xl md:text-4xl lg:text-5xl font-bold text-mint-dark mb-16 md:mb-20">
            Why Choose Mintee?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12"> {/* Increased gap */}
            {/* Benefit 1 */}
            <div className="flex flex-col items-center p-6"> {/* Use flex column */}
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-mint-light rounded-full flex items-center justify-center mb-5 text-mint-dark text-3xl">🌿</div>
              <h3 className="font-gazpacho text-xl md:text-2xl font-semibold text-mint-dark mb-3">Refreshing and Functional</h3>
              <p className="text-neutral-darker leading-relaxed">Pure water infused with real peppermint extract for a crisp, clean taste.</p> {/* Improved text */}
            </div>
            {/* Benefit 2 */}
            <div className="flex flex-col items-center p-6">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-mint-light rounded-full flex items-center justify-center mb-5 text-mint-dark text-3xl">💧</div>
              <h3 className="font-gazpacho text-xl md:text-2xl font-semibold text-mint-dark mb-3">Zero Sugar, Zero Calories</h3>
              <p className="text-neutral-darker leading-relaxed">A healthy, guilt-free alternative to sugary drinks and artificial flavours.</p> {/* Improved text */}
            </div>
            {/* Benefit 3 */}
            <div className="flex flex-col items-center p-6">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-mint-light rounded-full flex items-center justify-center mb-5 text-mint-dark text-3xl">✨</div>
              <h3 className="font-gazpacho text-xl md:text-2xl font-semibold text-mint-dark mb-3">Digestive Benefits</h3>
              <p className="text-neutral-darker leading-relaxed">Enjoy the soothing properties of peppermint, known to aid digestion.</p> {/* Improved text */}
            </div>
            {/* Benefit 4: Made in Ireland */}
            <div className="flex flex-col items-center p-6">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-mint-light rounded-full flex items-center justify-center mb-5 text-mint-dark text-3xl">🇮🇪</div>
              <h3 className="font-gazpacho text-xl md:text-2xl font-semibold text-mint-dark mb-3">Made in Ireland</h3>
              <p className="text-neutral-darker leading-relaxed">With a commitment to ethical sourcing and sustainability.</p>
            </div>
            {/* Benefit 5: Made for Modern Life */}
            <div className="flex flex-col items-center p-6">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-mint-light rounded-full flex items-center justify-center mb-5 text-mint-dark text-3xl">🏃‍♀️</div>
              <h3 className="font-gazpacho text-xl md:text-2xl font-semibold text-mint-dark mb-3">Made for Modern Life</h3>
              <p className="text-neutral-darker leading-relaxed">Whether you&apos;re at work, working out, or just need a mid-day boost – Mintee keeps you feeling fresh without any of the extras.</p>
            </div>
            {/* Benefit 6: Naturally Good */}
            <div className="flex flex-col items-center p-6">
              {/* Icon Placeholder */}
              <div className="w-16 h-16 bg-mint-light rounded-full flex items-center justify-center mb-5 text-mint-dark text-3xl">✅</div>
              <h3 className="font-gazpacho text-xl md:text-2xl font-semibold text-mint-dark mb-3">Naturally Good</h3>
              <p className="text-neutral-darker leading-relaxed">Mintee supports digestive wellness, improves focus, and offers antimicrobial and decongestant properties.</p>
            </div>
          </div>
        {/* Removed extra closing div */}
        </div>
      </section>
      {/* --- End Benefits Section --- */}

      {/* Product Showcase Section */}
      {/* --- Product Showcase Section --- */}
      {/* Wrap section content in AnimatedDiv */}
      <section id="product-showcase" className="w-full py-20 md:py-32 bg-white overflow-hidden"> {/* Added overflow-hidden */}
        {/* Wrap section content in AnimatedDiv, applying container styles to it */}
        {/* Reverted to standard div container */}
        <div className="container mx-auto px-6 text-center">
          {/* Apply heading font via CSS class */}
          <h2 className="font-gazpacho text-3xl md:text-4xl lg:text-5xl font-bold text-mint-dark mb-16 md:mb-20">
            Meet Mintee
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
            {/* Product Image */}
            <div className="relative w-48 h-96 md:w-56 rounded-lg overflow-hidden shadow-md transition duration-300 transform hover:scale-105">
              <Image
                src="/images/Mintee.png"
                alt="Mintee Peppermint Water 500ml Bottle"
                layout="fill"
                objectFit="contain" // Use contain to ensure the whole bottle is visible
                sizes="(max-width: 767px) 40vw, 224px" // Adjust sizes as needed
              />
            </div>
            {/* Product Details */}
            <div className="text-center md:text-left max-w-md">
              <h3 className="font-gazpacho text-2xl md:text-3xl font-semibold text-mint-dark mb-4">Mintee Peppermint Water</h3>
              <p className="text-lg text-neutral-darker mb-6 leading-relaxed">Crisp, cool, and utterly refreshing. Our signature blend in a convenient 500ml recyclable PET bottle.</p>
              <p className="text-3xl font-bold text-mint-dark mb-8">£1.99</p>
              {/* Use darker button color */}
              <button className="bg-mint-dark hover:brightness-110 text-white font-semibold py-3 px-10 rounded-full transition duration-300 text-lg shadow-md hover:shadow-lg hover:scale-105 transform">
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* --- End Product Showcase Section --- */}

      {/* Newsletter Signup Section */}
      {/* --- Newsletter Signup Section --- */}
      {/* Wrap section content in AnimatedDiv */}
      <section id="newsletter" className="w-full py-20 md:py-32 bg-mint-light overflow-hidden"> {/* Added overflow-hidden */}
        {/* Wrap section content in AnimatedDiv, applying container styles to it */}
        {/* Reverted to standard div container */}
        <div className="container mx-auto px-6 text-center max-w-2xl">
          {/* Apply heading font via CSS class */}
          <h2 className="font-gazpacho text-3xl md:text-4xl lg:text-5xl font-bold text-mint-dark mb-5">
            Stay Refreshed
          </h2>
          <p className="text-lg text-neutral-darker mb-10">
            Sign up for exclusive offers, early access to new flavours, and a 10% discount on your first order.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-5 py-3 border border-neutral-dark rounded-full focus:outline-none focus:ring-2 focus:ring-mint-dark focus:border-transparent text-lg"
              required
            />
            <button
              type="submit"
              className="bg-mint-dark hover:brightness-110 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg shadow-md hover:shadow-lg flex-shrink-0 hover:scale-105 transform"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      {/* --- End Newsletter Signup Section --- */}
    </main>
  );
}
