'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer'; // Re-add hook

// Define simpler props specifically for a div wrapper
interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
  delay?: string; // Optional delay class e.g., 'delay-300'
}

// Renaming component to reflect it renders a div
const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  className = '',
  delay = '',
}) => {
  // Re-add useInView hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  return (
    // Always render a div
    <div
      ref={ref} // Re-add ref
      // Default to opacity-100, apply opacity-0 only when not in view
      className={`transition-opacity duration-700 ease-out ${delay} ${
        inView ? 'opacity-100' : 'opacity-0' // Apply opacity based on inView
      } ${className}`}
    >
      {children}
    </div>
  );
};

// Exporting the renamed component
export default AnimatedDiv;