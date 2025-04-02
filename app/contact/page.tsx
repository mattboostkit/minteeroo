import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | Mintee",
  description: "Get in touch with the Mintee team.",
};

const ContactPage = () => {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-20 md:py-32">
      <h1 className="font-gazpacho text-4xl sm:text-5xl md:text-6xl font-bold text-mint-dark mb-16 md:mb-20 text-center tracking-tight">
        Contact Us
      </h1>

      <section className="max-w-xl mx-auto">
        <p className="text-lg text-neutral-darker mb-10 text-center">
          Have a question, feedback, or just want to say hello? Fill out the form below or email us directly.
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-darker mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-mint-dark focus:border-transparent"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-darker mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-mint-dark focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-darker mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-neutral-dark rounded-md focus:outline-none focus:ring-2 focus:ring-mint-dark focus:border-transparent"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-mint-dark hover:brightness-110 text-white font-semibold py-3 px-10 rounded-full transition duration-300 text-lg shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              Send Message
            </button>
          </div>
        </form>

        <p className="text-center text-neutral-darker mt-12">
          Alternatively, you can email us at: <a href="mailto:hello@mintee.example" className="text-mint-dark hover:underline">hello@mintee.example</a>
        </p>
      </section>
    </div>
  );
};

export default ContactPage;