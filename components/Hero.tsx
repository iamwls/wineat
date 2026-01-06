
import React from 'react';

const CharacterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    {/* Head */}
    <circle cx="50" cy="60" r="30" fill="white" stroke="currentColor" strokeWidth="2.5" />
    {/* Eyes */}
    <circle cx="42" cy="58" r="2" fill="currentColor" />
    <circle cx="58" cy="58" r="2" fill="currentColor" />
    {/* Smile */}
    <path d="M40,68 Q50,75 60,68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Curly Hairs */}
    <path d="M35,35 Q30,20 40,25 Q45,30 40,35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M50,30 Q45,10 55,15 Q60,20 55,30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M65,35 Q70,20 60,25 Q55,30 60,35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-stone-950">
      <img 
        src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=2000" 
        alt="Wine cellar" 
        className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale-[0.3]"
      />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-[1.4] tracking-tight flex flex-wrap items-center justify-center gap-x-3">
            <span>오늘 음식에 와인은</span>
            <CharacterIcon className="w-12 h-12 md:w-16 md:h-16 text-stone-400" />
            <span>와잇에서,</span>
            <div className="w-full">
              <span className="text-stone-400 font-script font-normal lowercase text-4xl md:text-7xl block mt-2">wineat!</span>
            </div>
          </h1>
          <p className="text-sm md:text-base text-stone-400 mb-2 font-light leading-relaxed tracking-wide">
            지금 나와 가장 잘 맞는 와인을 함께 즐겨보세요
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
