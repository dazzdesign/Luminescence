import React from 'react';
import './AnimatedChevron.css';

const AnimatedChevron = () => {
  return (
    <div>
      <svg className="modern-arrow" viewBox="0 0 24 80" width="160" height="200">
        <defs>
          <linearGradient id="animated-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700">
              <animate
                attributeName="stop-color"
                values="#FFD700;#FF8C00;#FFFACD;#FFD700"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#FFFACD">
              <animate
                attributeName="stop-color"
                values="#FFFACD;#FFD700;#FF8C00;#FFFACD"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <line
          x1="12"
          y1="0"
          x2="12"
          y2="12"
          stroke="url(#animated-gradient)"
          strokeWidth="1.5"
          strokeDasharray="3,3"
        />
        <path
          d="M8 20l4 4 4-4"
          fill="none"
          stroke="url(#animated-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 30l6 6 6-6"
          fill="none"
          stroke="url(#animated-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 42l8 8 8-8"
          fill="none"
          stroke="url(#animated-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default AnimatedChevron;
