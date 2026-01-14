
import React, { useState } from 'react';

const AnimatedLogo: React.FC = () => {
  const letters = "wineat!".split("");
  return (
    <div className="flex justify-center items-center">
      {letters.map((char, i) => (
        <span 
          key={i} 
          className={`${char === '!' ? 'animate-thump-special' : 'animate-thump'} text-6xl md:text-9xl font-logo tracking-tighter text-[#1D1717]`}
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

const HeroCatSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 319 211" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M32.5176 36.2688C32.5176 36.2584 33.3119 29.629 34.7855 18.5426C35.3802 14.0682 36.0049 11.9803 37.1528 13.2383C41.6032 18.1152 42.1432 24.4479 43.1046 25.7361C44.7355 27.7835 45.905 29.3607 46.2323 30.126C46.4003 30.561 46.5723 31.0907 46.8756 31.92" stroke="black" strokeWidth="5.5" strokeLinecap="round"/>
    <path d="M45.4651 27.282C45.4901 27.282 45.5152 27.282 50.2875 27.4991C55.0598 27.7162 64.5786 28.1505 74.3859 28.5979" stroke="black" strokeWidth="5.5" strokeLinecap="round"/>
    <path d="M74.3401 36.4163C74.3401 36.4106 74.3401 36.405 74.7871 31.9975C75.2341 27.5901 76.1281 18.781 76.6438 13.9791C77.3283 7.6041 78.2385 5.92175 79.4358 4.69202C80.1838 3.92369 82.8051 9.03715 86.2654 16.0732C87.9248 19.603 89.3883 23.0502 90.3558 25.1714" stroke="black" strokeWidth="5.5" strokeLinecap="round"/>
    <path d="M149.363 106.654C151.951 106.716 157.122 106.84 162.135 107.018C167.149 107.197 171.846 107.426 174.327 107.74C176.807 108.054 176.927 108.446 176.956 108.795C177.07 110.155 175.529 111.783 173.5 113.575" stroke="#310A38" strokeWidth="27.4" strokeLinecap="round"/>
    <path d="M137.625 75.3153C137.625 75.3461 137.342 82.453 137.528 97.4031C137.626 105.276 139.231 113.674 140.237 119.286" stroke="black" strokeWidth="5.5" strokeLinecap="round"/>
  </svg>
);

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-white py-20 flex flex-col items-center overflow-hidden">
      <div className="text-center px-4 max-w-4xl w-full">
        <div className="mb-12">
          <AnimatedLogo />
        </div>
        
        <div className="relative flex items-center justify-center mb-16">
          <span className="hidden md:block font-logo text-3xl text-stone-200 absolute left-10">wine</span>
          <HeroCatSVG className="w-64 md:w-[400px] animate-doodle-jitter" />
          <span className="hidden md:block font-logo text-3xl text-stone-200 absolute right-10">eat</span>
        </div>
        
        <div 
          className="relative inline-block cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={onStart}
        >
          <p className="mb-6 text-stone-400 italic font-instrument-sans tracking-wide">
            wine + eat = wineat. . . !
          </p>
          <button 
            className="px-12 py-5 bg-white border-2 border-[#1D1717] text-3xl font-serif-regular lowercase tracking-tight transition-all duration-300 active:scale-95"
            style={{ 
              borderRadius: '255px 25px 225px 35px/35px 225px 25px 255px',
              boxShadow: isHovered ? '8px 8px 0px 0px #FFD1DC' : '0px 0px 0px 0px transparent',
              transform: isHovered ? 'translate(-4px, -4px)' : 'none'
            }}
          >
            start pairing!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
