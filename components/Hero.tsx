
import React, { useState } from 'react';

const AnimatedLogo: React.FC = () => {
  const letters = "wineat!".split("");
  return (
    <div className="flex justify-center items-center">
      {letters.map((char, i) => (
        <span 
          key={i} 
          className={`${char === '!' ? 'animate-thump-special' : 'animate-thump'} text-6xl md:text-9xl font-logo tracking-tighter text-[#1D1717]`}
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <section className="bg-white pt-12 pb-24 flex flex-col items-center overflow-hidden min-h-[70vh] justify-center">
      <div className="text-center px-4 max-w-4xl w-full">
        <div className="mb-12">
          <AnimatedLogo />
        </div>
        
        {/* Cat Image Section with wine/eat text */}
        <div className="relative flex items-center justify-between w-full mb-16">
          <span className="font-logo text-2xl md:text-4xl text-stone-400 select-none tracking-tight relative -top-12 md:-top-24">wine</span>
          
          <img
            src="https://file.notion.so/f/f/b7de9f98-6fe4-4491-bbd8-6dff9b3fbe0b/149f515f-fe75-4ede-a23e-fa11c9e4635c/waeat.png?table=block&id=2e1cf5e8-edac-8059-8c77-e710e974b705&spaceId=b7de9f98-6fe4-4491-bbd8-6dff9b3fbe0b&expirationTimestamp=1767830400000&signature=I_HbD3FqAyHdlEw7M8DSFVXz4Tb4MPNddqfIxWvCbAg&downloadName=waeat.png"
            alt="고양이 와인 그림"
            className="w-72 md:w-[500px] animate-doodle-jitter z-10"
          />      
          
          <span className="font-logo text-2xl md:text-4xl text-stone-400 select-none tracking-tight relative -top-12 md:-top-24">eat</span>
        </div>
        
        <div className="w-full flex flex-col items-center">
          <div 
            className="relative group max-w-xs w-full cursor-pointer mt-4 animate-in fade-in zoom-in duration-700 delay-300"
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            onClick={onStart}
          >
            <div 
              className="absolute inset-0 border-[1.2px] border-stone-400 -z-0 pointer-events-none transition-all duration-500 ease-in-out"
              style={{
                borderRadius: isBtnHovered 
                  ? '140px 170px 130px 180px / 125px 105px 140px 110px'
                  : '0px',
                transform: isBtnHovered ? 'rotate(1.5deg) scale(1.05)' : 'rotate(0deg) scale(1)',
                opacity: isBtnHovered ? 0.8 : 0
              }}
            ></div>

            <button 
              className="relative w-full py-5 font-logo uppercase text-2xl tracking-tighter flex items-center justify-center gap-3 transition-all duration-500 ease-in-out active:scale-[0.98] z-10 text-stone-800 bg-white"
              style={{
                border: isBtnHovered ? '2px solid #1D1717' : '1px solid #000',
                borderRadius: isBtnHovered 
                  ? '145px 160px 150px 155px / 125px 115px 130px 110px'
                  : '0px',
                boxShadow: isBtnHovered ? '6px 8px 0px 0px #1D1717' : '0px 0px 0px 0px rgba(0,0,0,0)',
                transform: isBtnHovered ? 'translateY(-4px)' : 'translateY(0)'
              }}
            >
              나만의 와잇 찾기
            </button>
            <p className="mt-8 text-stone-400 text-sm font-instrument-sans italic animate-pulse">Click to start your journey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
