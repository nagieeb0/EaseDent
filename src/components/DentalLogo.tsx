import React from 'react';

export default function DentalLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main tooth shape */}
      <path
        d="M50 10 C65 10 80 20 80 40 C80 70 65 90 50 90 C35 90 20 70 20 40 C20 20 35 10 50 10"
        className="fill-primary-500 dark:fill-primary-400"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Left side accent */}
      <path
        d="M35 25 Q30 35 35 45"
        className="stroke-gray-600 dark:stroke-gray-400"
        strokeWidth="2"
        fill="none"
      />
      {/* Right side accent */}
      <path
        d="M65 25 Q70 35 65 45"
        className="stroke-gray-600 dark:stroke-gray-400"
        strokeWidth="2"
        fill="none"
      />
      {/* Stars */}
      <path
        d="M25 25 L27 27 L25 29 L23 27 Z"
        className="fill-yellow-400"
      />
      <path
        d="M75 25 L77 27 L75 29 L73 27 Z"
        className="fill-yellow-400"
      />
      <path
        d="M50 5 L52 7 L50 9 L48 7 Z"
        className="fill-yellow-400"
      />
    </svg>
  );
}