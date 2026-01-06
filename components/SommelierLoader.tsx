
import React from 'react';

const SommelierLoader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative w-40 h-40 mb-6 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full text-stone-900 fill-none stroke-stone-900 stroke-[2.5]">
          {/* Head Shape */}
          <circle cx="50" cy="60" r="32" fill="white" className="path-draw" />
          
          {/* Eyes */}
          <circle cx="42" cy="58" r="2.5" fill="currentColor" />
          <circle cx="58" cy="58" r="2.5" fill="currentColor" />
          
          {/* Smiling Mouth */}
          <path d="M40,70 Q50,78 60,70" strokeLinecap="round" />
          
          {/* Wobbly/Curly Hairs based on user image */}
          <path d="M30,35 Q25,15 40,22 Q50,30 42,38" strokeLinecap="round" className="path-draw" />
          <path d="M50,30 Q45,5 58,12 Q65,20 55,35" strokeLinecap="round" className="path-draw" />
          <path d="M70,35 Q75,15 62,22 Q55,30 65,38" strokeLinecap="round" className="path-draw" />

          {/* Thinking Dots */}
          <circle cx="85" cy="20" r="2" className="think-dot fill-stone-900" style={{ animationDelay: '0s' }} />
          <circle cx="90" cy="12" r="1.5" className="think-dot fill-stone-900" style={{ animationDelay: '0.3s' }} />
        </svg>
      </div>
      <div className="text-center">
        <p className="text-2xl font-script font-bold text-stone-950 mb-3 italic tracking-wider">"wine + eat.... wineat!!!"</p>
        <p className="text-sm text-stone-400 font-medium tracking-tight">전문 소믈리에가 최상의 마리아주를 조합하고 있습니다.</p>
      </div>
    </div>
  );
};

export default SommelierLoader;
